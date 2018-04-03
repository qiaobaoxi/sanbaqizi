<template>
  <div class="hello">
   <div class="appleWrap">
    <ul class='apple'>
      <li><img src="src/assets/iphone.png"/><span>iPhone</span></li>
      <li><img src="src/assets/ipad.png"/><span>ipad</span></li>
    </ul>
    <p class="line"></p>
   </div> 
   <div class="logoWrap">
    <ul class='logoUl'>
      <li><img src="src/assets/huaweiLogo.jpg"/></li>
      <li><img src="src/assets/vivoLogo.jpg"/></li>
      <li><img src="src/assets/oppoLogo.jpg"/></li>
    </ul>
    <p class="line"></p>
   </div> 
   <div class="logoWrap">
    <ul class='logoUl'>
      <li><img src="src/assets/xiaomiLogo.jpg"/></li>
      <li><img src="src/assets/meizuLogo.jpg"/></li>
      <li><a class='more' href="#">更多型号<br/>请咨询客服</a></li>
    </ul>
    <p class="line"></p>
   </div> 
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
    .appleWrap{
        position:relative;
        .apple {
            display: flex;
            li {
              width: 50%;
              padding: .75rem /* 12/16 */ 0;
              text-align: center;
              border-bottom: 1px solid #dadada;
              img {
                height: 3.625rem /* 58/16 */;
                vertical-align: middle;
              } 
              span {
                vertical-align: middle;
                color:#808080;
              }
            }
        }
        .line { 
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 1px;
            height: 100%;
            background-color: #dadada;
        }
    }
    .logoWrap {
      position: relative;
      .logoUl {
        display: flex;
        li {
          width: 33.33%;
          height: 6.75rem /* 108/16 */;
          .more{
             display:block;
             padding: 2.125rem /* 34/16 */ 0 2.1875rem /* 35/16 */;
             text-align:center;
             line-height:1.1875rem /* 19/16 */;
             color:#808080;
             text-decoration:none;
             font-size:.875rem /* 14/16 */;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
</style>
