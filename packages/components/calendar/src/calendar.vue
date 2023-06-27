<template>
  <div :class="nsCal.b()">
    <div :class="nsCal.e('header')">
      <div :class="nsCal.e('title')">{{currentDate }}</div>
      <div :class="nsCal.e('button-group')">
        <b-button @click="selectDate('prev-year')">前一年</b-button>
        <b-button @click="selectDate('prev-month')">上个月</b-button>
        <b-button @click="selectDate('today')">今天</b-button>
        <b-button @click="selectDate('next-month')">下个月</b-button>
        <b-button @click="selectDate('next-year')">下一年</b-button>
      </div>
    </div>
    <div class="line"></div>
    <div :class="nsCal.e('body')">
      <table :class="nsTable.b()" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th v-for="day in weekDays">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,rid) in rows" :key="rid">
            <td v-for="(cell,cid) in row" 
            :key="cid" 
            :class="[nsDay.b(),getCellClass(cell)]" 
            @click="handlePick(cell)">
              <slot name="date-cell" :data="getSlotDate(cell)">
                {{ cell.text }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BButton from '@bear-ui/components/button'
import { createNamespace } from '@bear-ui/hooks';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import {CalendarDateCell, CalendarDateType, calendarProps,calendarEmits, CalendarDateCellType} from './calendar'
import type { Dayjs } from 'dayjs'
import { computed, ref } from 'vue';
import { id } from '@bear-ui/locale';
//bem规范
const nsCal = createNamespace('calendar')
const nsTable = createNamespace('calendar-table')
const nsDay = createNamespace('calendar-day')

const props = defineProps(calendarProps)
const now = dayjs();
//根据用户的属性计算当前的日期
const date = computed(() => {
  if (!props.modelValue) {
    return now
  } else {
    return dayjs(props.modelValue)
  }
})
console.log(date);


defineOptions({ name: 'b-calendar' })
dayjs.locale('zh-cn')

//获取当前这一周的第一天 0-6 0周日 6周六（可以增加属性让用户设置）
const firstDayofWeek =  props.first_day_of_week //dayjs().startOf('week').day()  //1

//表头部分
const weekMaping = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const weekDays = computed(() => {
  return [
    ...weekMaping.slice(firstDayofWeek),
    ...weekMaping.slice(0,firstDayofWeek)
  ]
})


//面板部分 [[],[],[],[],[],[],[]]
const rows = computed(() => {
  //根据用户提供的日期计算出42个出来
  //1、获取本月的第一天是星期几
  let list:CalendarDateCell[] = []
  const firstDay = date.value.startOf('month').day()
  const lastDay = date.value.subtract(1, 'month').endOf('month').date()

  const count = firstDay - firstDayofWeek;//这个月前面有几天

  const preMonthDays:CalendarDateCell[] = Array.from({ length: count })
    .map((_, idx) => lastDay - (count - idx - 1))
    .map(_ => ({
    text: _,
    type:'prev'
  }))

  //获取当前月有多少天？
  const days = date.value.daysInMonth()
  
  //当前月的天数
  const currentMonthDays:CalendarDateCell[] = Array.from({ length: days }).map((_, idx) => ({
    text: idx + 1,
    type:'current'
  }))
  list = [...preMonthDays, ...currentMonthDays]

  let remaning = 42 - list.length

  const nextMonthDays: CalendarDateCell[] = Array.from({
    length: remaning
  }).map((_, idx) => ({
    text: idx + 1,
    type:'next'
  }))

  list.push(...nextMonthDays);

  return Array.from({ length: 6 }).map((_, idx) => {
    const start = idx * 7;  //99乘法表
    return list .slice(start,start+7)
  })
})

console.log(rows.value);

//new Date('2023/4/16') 根据月份找到当前这一天是星期几（前面补上对应的天数）+下个月的天数

 
const prevMonthDay = computed(()=>date.value.subtract(1,'month').date(1))
const nextMonthDay = computed(() => date.value.add(1, 'month').date(1))
const prevYearDay = computed(() => date.value.subtract(1, 'year').date(1))
const nextYearDay = computed(()=>date.value.add(1,'year').date(1))
const emit = defineEmits(calendarEmits)
function pickDay(day: Dayjs) {
  selectDay.value = day //保存选中的
  //v-model = modelValue + @update:modelValue
  emit('update:modelValue',day.toDate())
}

function selectDate(type: CalendarDateType) {
  //采用策略来优化
  const dateMap: Record<CalendarDateType, Dayjs> = {
    'prev-month': prevMonthDay.value,
    'next-month': nextMonthDay.value,
    'prev-year': prevYearDay.value,
    'next-year': nextYearDay.value,
    today: now,
  }
  const day = dateMap[type];  //找到日期，更改date日期  ,计算属性根据日期来进行计算

  pickDay(day)
}

function formatter(text: number, type: CalendarDateCellType):Dayjs {
  switch (type) {
    case 'prev':
      return date.value.startOf('month').subtract(1, 'month').date(text);
    case 'current':
      return date.value.date(text)
    case 'next':
      return date.value.startOf('month').add(1, 'month').date(text);
  }
}

const selectDay =ref<Dayjs>()  //用于标识当前用户选中的哪一个
function handlePick({ text, type }: CalendarDateCell) {
  //根据text 和type 获取日期来更新操作
  let day = formatter(text, type);
  
  pickDay(day)
}

function getCellClass({ text, type }: CalendarDateCell) {
  const clazz: string[] = [type];

  const date = formatter(text,type)

  if (date.isSame(selectDay.value, 'day')) {
    //如果选中的日期和当前循环的日期相同，就标识选中了
    clazz.push(nsDay.is('selected', true))
  }
  if (date.isSame(now, 'day')) {
    clazz.push(nsDay.is('today', true))
  }
  return clazz;
}

const currentDate = computed(() => {
  return `${date.value.year()}年${date.value.month()+1}月${date.value.date()}日`
})


function getSlotDate({ text, type }: CalendarDateCell) {
  let day = formatter(text, type)
  return {
    isSelected: day.isSame(selectDay.value),
    day: day.format('YYYY-MM-DD'),
    date: day.toDate(),
    type
  }
}
</script>