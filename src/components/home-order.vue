<template>
  <div class="order">
    <h2>您好，确定下单后</h2>
    <p>预计<span>300</span>秒内联系您</p>
    <div class="address">
      <input type='text' placeholder='系统会自动识别你的地址'/><img src="src/assets/address2.png">
    </div>
    <div class="tel">
      <input type='text' placeholder='你的联系方式'/><img src="src/assets/tel.png">
    </div>
    <div class='btn'>
        <input type='button' value="预约下单">
    </div>
    <div class='process'>
       <span>填写信息</span><span>在线下单</span><span>上门维修</span><span>付款评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeOrder',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .order {
      h2 {
          margin-top: 1.1875rem /* 19/16 */;
          text-align: center;
          font-size: 1.875rem /* 30/16 */;
      }
      p {
          text-align: center;
          margin-top: .8125rem /* 13/16 */;
          font-size: .9375rem /* 15/16 */;
          color: #4a4a4a;
          span{
            color: #ff6f04;
          }
      }
      .address {
          position: relative;
          margin: 0 1.125rem /* 18/16 */;
          overflow: hidden;
          border-bottom: .0625rem /* 1/16 */ solid #dddddd;
          img{
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              width: 1.875rem /* 30/16 */;
              height: 1.875rem /* 30/16 */;
          }
          input{
             outline: none;
             border: none;
             padding-left: 1.875rem /* 30/16 */;
             width: 100%;
             height: 3.75rem /* 60/16 */;
             box-sizing: border-box;
             font-size: 1.125rem /* 18/16 */;
             color: black;
          }
      }
      .tel{
          position: relative;
          margin: 0 1.125rem /* 18/16 */;
          overflow: hidden;
          border-bottom: .0625rem /* 1/16 */ solid #dddddd;
          img{
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              width: 1.875rem /* 30/16 */;
              height: 1.875rem /* 30/16 */;
          }
          input{
             outline: none;
             border: none;
             padding-left: 1.875rem /* 30/16 */;
             width: 100%;
             height: 3.75rem /* 60/16 */;
             box-sizing: border-box;
             font-size: 1.125rem /* 18/16 */;
             color: black;
          }
      }
      .btn{
        margin: 1.25rem /* 20/16 */ .5625rem /* 9/16 */;
        input{
          width: 100%;
          height: 2.5rem /* 40/16 */;
          background-color: #ff6801;
          border: none;
          outline: none;
          color: white;
          border-radius: .625rem /* 10/16 */;
          font-size:1.125rem /* 18/16 */;
        }
      }
      .process {
        display:flex;
        margin-bottom: 1.5rem /* 24/16 */;
        span{
          flex: 1;
          text-align: center;
          font-size: .875rem /* 14/16 */;
        }
      }
  }
</style>
