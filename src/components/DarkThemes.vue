<script setup>
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'

let currentTheme = null

const toggleTheme = () => {
  currentTheme = currentTheme ? null : dark
  StyleProvider(currentTheme)
}
</script>

<template>
  <var-button block @click="toggleTheme">切换主题</var-button>
</template>

<style scoped>

</style>
