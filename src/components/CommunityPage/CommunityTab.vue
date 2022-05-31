<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    class="tabs-example-vertical"
    elevation
    layout-direction="vertical"
    color="#f5e8cb"
    active-color="#ccc"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active"
  >
    <var-tab>推荐收藏</var-tab>
    <var-tab>往事杂谈</var-tab>
    <var-tab>魔兽世界</var-tab>
    <var-tab>特约专区</var-tab>
    <var-tab>手机游戏</var-tab>
    <var-tab>传统游戏</var-tab>
    <var-tab>网络游戏</var-tab>
    <var-tab>社区事务</var-tab>

  </var-tabs>
</template>

<style>
.tabs-example-vertical {
  width: 80px !important;
  height: 150vw  !important;
}
</style>
