<template>
  <ul class="mdui-list">
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">brush</i>&nbsp;
      <div class="mdui-list-item-content">评分</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">star</i> &nbsp;
      <div class="mdui-list-item-content">收藏</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">access_time</i> &nbsp;
      <div class="mdui-list-item-content">浏览历史</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">library_books</i>&nbsp;
      <div class="mdui-list-item-content">草稿箱</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">shopping_basket</i>&nbsp;
      <div class="mdui-list-item-content">商店</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">settings</i>&nbsp;
      <div class="mdui-list-item-content">设置</div>
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">brightness_4</i>&nbsp;
      <div class="mdui-list-item-content">夜间模式</div>
      <var-switch v-model="value" block @change="toggleTheme" />
    </li>
    <li class="mdui-divider mdui-m-y-0"></li>
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-icon material-icons">person</i>&nbsp;
      <div class="mdui-list-item-content">个性皮肤</div>
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'
const value = ref(false)
let currentTheme = null

const toggleTheme = () => {
  currentTheme = currentTheme ? null : dark
  StyleProvider(currentTheme)
}
</script>
<style>
  .mdui-ripple{
    height: 3vw;
  }
  .mdui-list-item-content{
    font-size: 1vw;
  }
  body {
    transition: background-color .25s;
    color: var(--color-text);
    background-color: var(--color-body);
  }
</style>
