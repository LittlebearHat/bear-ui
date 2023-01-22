#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 初始化 暂存 提交
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/LittlebearHat/bear-ui main:deploy

cd -