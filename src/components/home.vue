<template>
  <div class="hello">
    <home-header></home-header>
    <home-swipe></home-swipe>
    <home-order></home-order>
    <home-function></home-function>
    <div>
      <img class="tel" src="src/assets/tel.jpg">
    </div>
    <home-foot></home-foot>
  </div>
</template>

<script>
import homeHeader from './home-header'
import homeSwipe from './home-swipe'
import homeOrder from './home-order'
import homeFunction from './home-function'
import homeFoot from './home-foot'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    homeHeader,
    homeSwipe,
    homeOrder,
    homeFunction,
    homeFoot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .tel{
      height:5rem /* 80/16 */;
      padding-bottom:4.375rem /* 70/16 */;
      width:100%;
    }
</style>
