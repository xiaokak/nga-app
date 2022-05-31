<template>
  <var-bottom-navigation
    active-color="#212121"
    fixed="true"
    v-model:active="active">
    <var-bottom-navigation-item @click="HomeClick" label="首页" icon="home"/>
    <var-bottom-navigation-item @click="FollowClick" label="关注" icon="heart"/>
    <var-bottom-navigation-item @click="CommunityClick" label="社区" icon="magnify"/>
    <var-bottom-navigation-item @click="PersonalClick" label="我的" icon="account-circle"/>
  </var-bottom-navigation>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const active = ref(0)
    const state = reactive({
      count: 0
    })
    const router = useRouter()
    const HomeClick = () => {
      router.push('/homepage')
    }
    const FollowClick = () => {
      router.push('/followpage')
    }
    const CommunityClick = () => {
      router.push('/communitypage')
    }
    const PersonalClick = () => {
      router.push('/personalpage')
    }
    return {
      ...toRefs(state),
      FollowClick,
      HomeClick,
      CommunityClick,
      PersonalClick,
      active
    }
  }
}
</script>
