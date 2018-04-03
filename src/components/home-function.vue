<template>
  <div class="function">
    <ul>
      <li>
        <div><img  src="src/assets/On-siteRepair.png"></div>
        <span>上门维修</span>
      </li>
      <li>
        <div><img  src="src/assets/Online-Service.png"></div>
        <span>在线客服</span>
      </li>
      <li>
        <div><img  src="src/assets/PhoneOrder.png"></div>
        <span>电话下单</span>
      </li>
      <li>
        <div><img  src="src/assets/pay.png"></div>
        <span>订单支付</span>
      </li>
      <li>
        <div><img  src="src/assets/evaluate.png"></div>
        <span>评价吐槽</span>
      </li>
      <li>
        <div><img  src="src/assets/recovery.png"></div>
        <span>上门回收</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeFunction',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .function {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 7.5rem /* 120/16 */;
        text-align: center;
        div {
          position: relative;
          width: 2.5rem /* 40/16 */;
          height: 2.5rem /* 40/16 */;
          border-radius: .625rem /* 10/16 */;
          margin: 0 auto;
          img {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 1.5rem /* 24/16 */;
            height: 1.5rem /* 24/16 */;
          }
        }
        span {
          margin: 1.25rem /* 20/16 */ 0;
          display: inline-block;
          font-size: 16px;
          color: #787677
        }
      }
      li:nth-of-type(1) {
        div {
          background-color: #ffb602;
        }
      }
      li:nth-of-type(2) {
        div{
          background-color: #fc4f00;
        }
      }
      li:nth-of-type(3) {
        div {
          background-color: #23ccd3;
        }
      }
      li:nth-of-type(4) {
        div {
          background-color: #9263cd;
        }
      }
      li:nth-of-type(5) {
        div {
          background-color: #ef6fbc;
        }
      }
      li:nth-of-type(6) {
        div {
          background-color: #69cc96;
        }
      }
    }
  }

</style>
