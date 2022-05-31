<template>
  <top-nav></top-nav>
  <bottom-navigation></bottom-navigation>
  <community-tab></community-tab>
</template>

<script>
import TopNav from '@/components/TopNav'
import BottomNavigation from '@/components/BottomNavigation'
import CommunityTab from '@/components/CommunityPage/CommunityTab'
export default {
  components: {
    TopNav,
    BottomNavigation,
    CommunityTab
  }
}
</script>

<style scoped>

</style>
