<template>
  <div class="box">
     <ul>
       <li>
         <dl>
            <dt>
               品牌
            </dt>
            <dd><router-link to="">iPhone</router-link></dd>
            <dd><router-link to="">ipad</router-link></dd>
            <dd><router-link to="">华为</router-link></dd>
            <dd><router-link to="">小米</router-link></dd>
            <dd><router-link to="">vivo</router-link></dd>
            <dd><router-link to="">oppo></router-link></dd>
            <dd><router-link to="">魅族</router-link></dd>
         </dl>
       </li>
       <li>
          <dl>
            <dt>
               型号
            </dt>
            <dd>
              <ul>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="src/assets/iphone.jpg">
                    <span>iPhone</span>
                  </a>
                </li>
              </ul>
            </dd>
         </dl>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'phoneList',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .box>ul{
      display: flex;
      margin: 0 .625rem /* 10/16 */;
      height: 100%;
      >li{
        height: 100%;
        color: #666;
        dt{
          height: 2.1875rem /* 35/16 */;
          line-height: 2.1875rem /* 35/16 */;
          font-size: 1.25rem /* 20/16 */;
          border:.0625rem /* 1/16 */ solid #dadada;
          border-left: none;
          text-align: center;
        }
      }
      >li:nth-child(1){
        padding-left: .875rem /* 14/16 */;
        width: 6.875rem /* 110/16 */;
        dd{
          a{
            display:block;
            margin-right: .375rem /* 6/16 */;
            padding-left: .875rem /* 14/16 */;
            text-decoration: none;
            height: 2.375rem /* 38/16 */;
            line-height: 2.375rem /* 38/16 */;
            color: #666;
            border-bottom: .0625rem /* 1/16 */ solid #dadada;
          }
        }
      }
      >li:nth-child(2){
        flex: 1;
        ul{
          padding-left: .75rem /* 12/16 */;
          overflow:hidden;
          border-left:.0625rem /* 1/16 */ solid #dadada;
          li{
            width: 50%;
            height: 8.375rem /* 134/16 */;
            border-bottom: 1px solid #ebebeb;
            float: left;
            a{
              display:block;
              margin: 1.125rem 0 .9375rem;
              border-right: 1px solid #eeeeee;
              font-size: 0.28rem;
              color: #666;
              text-align: center;
              img{
                margin: 0 auto .375rem /* 6/16 */;
                width: 5rem /* 80/16 */;
                height: 5rem /* 80/16 */;
              }
            }
          }
        }
      }
  }
</style>
