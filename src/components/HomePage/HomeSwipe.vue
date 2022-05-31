<template>
  <div class="swipe">
    <var-swipe class="swipe-example" :autoplay="2000">
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet-varletjs.vercel.app/cat.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet-varletjs.vercel.app/cat2.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet-varletjs.vercel.app/cat3.jpg">
      </var-swipe-item>
    </var-swipe>
  </div>
  <div class="text">
    <span>官方推荐</span>
  </div>
</template>

<style scoped>
.swipe{
  height: 45vw;
  text-align: center;
  margin-top: 5vw;
}

.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 95%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  border-radius: 2vw;
}
.text{
  font-size: 4vw;
  margin-left: 2.5vw;
}
</style>
