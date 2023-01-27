# 快速开始

本节将介绍如何在项目中使用 BearUI

## 用法

...
<template>
<b-icon :color="'red'">111</b-icon>
<b-icon>
<AddCircle></AddCircle>
</b-icon>

  <div>测试环境</div>
</template>

<script setup lang="ts">
import BIcon from '@bear-ui/components/icon';
import '@bear-ui/theme-chalk/src/index.scss';
import { AddCircle } from '@vicons/ionicons5'
</script>

...
