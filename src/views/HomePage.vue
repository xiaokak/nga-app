<template>
  <div class="home">
    <top-nav></top-nav>
    <tabs-option></tabs-option>
    <bottom-navigation></bottom-navigation>
    <home-swipe></home-swipe>
    <home-card></home-card>

  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import TabsOption from '@/components/HomePage/TabsOption.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import HomeSwipe from '@/components/HomePage/HomeSwipe.vue'
import HomeCard from '@/components/HomePage/HomeCard.vue'
export default {
  components: {
    TopNav,
    TabsOption,
    BottomNavigation,
    HomeSwipe,
    HomeCard
  }
}
</script>
