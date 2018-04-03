<template>
  <div class="foot">
    <ul>
      <li>
        <div><img  src="src/assets/home-1.png"></div>
        <span>首页</span>
      </li>
      <li>
        <div><img  src="src/assets/repair.png"></div>
        <span>主板维修</span>
      </li>
      <li>
        <div><img  src="src/assets/recovery-1.png"></div>
        <span>上门回收</span>
      </li>
      <li>
        <div><img  src="src/assets/my.png"></div>
        <span>我的订单</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeFoot',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .foot {
    position:fixed;
    bottom:0;
    border-top:.0625rem /* 1/16 */ solid #dadada;
    background-color:white;
    ul {
      margin-top:.625rem /* 10/16 */;
      display: flex;
      flex-wrap: wrap;
      li {
        width:  5.859375rem /* 93.75/16 */;
        text-align: center;
        img {
            width: 1.5rem /* 24/16 */;
            height: 1.5rem /* 24/16 */;
          }
        span {
          margin: .625rem /* 10/16 */ 0;
          display: inline-block;
          font-size: 16px;
          color: #787677
        }
      }
    
    }
  }

</style>
