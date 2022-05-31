<template>
  <div class="topNav">
    <div class="topLeft">
      <var-icon class="icon" name="menu" block @click="left = true"/>
    </div>
    <div class="topRight">
      <i class="iconfont icon-qiandao icon"></i>
      <i class="iconfont icon-fabu icon"></i>
      <i class="iconfont icon-tongzhi icon"></i>
    </div>
  </div>
  <var-popup position="left" v-model:show="left">
    <div class="popup-example-block">
      <popup-block></popup-block>
    </div>
  </var-popup>
</template>

<script>
import { ref } from 'vue'
import PopupBlock from '@/components/PopupBlock'

export default {
  setup () {
    const left = ref(false)
    return {
      left
    }
  },
  components: {
    PopupBlock
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topNav {
  background-color: #212121;
  width: 100vw;
  height: 13vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.6vw;

  .topLeft {
    .icon {
      color: #f5e8cb;
      font-size: 6.6vw;
    }
  }

  .topRight {
    .icon {
      color: #f5e8cb;
      font-size: 6.6vw;
      margin-left: 6vw;
    }
  }
}

.popup-example-block {
  padding: 20px 24px;
  width: 80vw;
}

</style>
