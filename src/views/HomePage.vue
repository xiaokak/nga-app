<template>
  <div class="home">
    <top-nav></top-nav>
    <tabs-option></tabs-option>
    <bottom-navigation></bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/HomePage/TopNav.vue'
import TabsOption from '@/components/HomePage/TabsOption.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
export default {
  components: {
    TopNav,
    TabsOption,
    BottomNavigation
  }
}
</script>
