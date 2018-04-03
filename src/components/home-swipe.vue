<template>
  <swipe class="my-swipe" >
    <swipe-item class="slide1">1</swipe-item>
    <swipe-item class="slide2">2</swipe-item>
    <swipe-item class="slide3">3</swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  name: 'homeSwipe',
  data () {
    return {
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.my-swipe {
  height: 12.5rem /* 200/16 */;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
  height:100%;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
  height:100%;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  height:100%;
}
</style>
