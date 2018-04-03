<template>
  <div class="header">
    <img src="src/assets/address.png" class="address"><span>鼓楼区</span><img src="src/assets/brand.jpg" class="brand">
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .header {
      position: relative;
      height: 2.1875rem /* 35/16 */;
      line-height: 2.1875rem /* 35/16 */;
      .address{
          width: 1.1875rem /* 19/16 */;
          height: 1.25rem /* 20/16 */;
          vertical-align: middle;
      }
      span{
          vertical-align: middle;
      }
      .brand {
         position: absolute;
         left: 0;
         top: 0;
         right: 0;
         bottom: 0;
         width: 2.0625rem /* 33/16 */;
         height: 2.0625rem /* 33/16 */;
         margin:auto;
         vertical-alige:middle;
      }
  }
</style>
