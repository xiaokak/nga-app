<template>
  <var-tabs
    active-color="#000000"
    inactive-color="#616161"
    v-model:active="active">
    <var-tab>推荐</var-tab>
    <var-tab>热帖</var-tab>
    <var-tab>栏目</var-tab>
    <var-tab>评分</var-tab>
    <var-tab>赛事</var-tab>
    <var-tab>聊天室</var-tab>
  </var-tabs>
  <var-divider :margin="0"/>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style scoped lang="less" >

</style>
