<template>
  <div class="box">
     <ul>
       <li>
         <dl>
            <dt>
              故障
            </dt>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕></router-link></dd>
            <dd><router-link to=""><img src="src/assets/screen.png" />屏幕</router-link></dd>
         </dl>
       </li>
       <li>
          <dl>
            <dt>
               维修方案
            </dt>
            <dd class="name">
              <span>
                 iPhone x
              </span>
            </dd>
            <dd class="other">
              <input type="radio" name="select" id="select1">
              <label for="select1">
                <i></i>
                <span>
                  外屏碎（显示正常）
                </span>
              </label>
              <em>980.00</em>
            </dd>
            <dd class="other">
              <input type="radio" name="select" id="select2">
              <label for="select2">
                <i></i>
                <span>
                  液晶环（显示异常）
                </span>
              </label>

              <em>
                1998.00元
              </em>
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
            height: 4.875rem /* 78/16 */;
            line-height: 4.875rem /* 78/16 */;
            color: #666;
            border-bottom: .0625rem /* 1/16 */ solid #dadada;
            img{
              margin-right: 1rem /* 16/16 */;
              width:1.875rem /* 30/16 */;
              height: 3.125rem /* 50/16 */;
              vertical-align: middle;
            }
          }
        }
      }
      >li:nth-child(2){
        flex: 1;
        border-left:.0625rem /* 1/16 */ solid #dadada;
        .name{
          font-size: 1.125rem /* 18/16 */;
          height: 1.875rem /* 30/16 */;
          line-height: 1.875rem /* 30/16 */;
          text-align:center;
        }
        .other{
          height: 1.875rem /* 30/16 */;
          line-height:1.875rem /* 30/16 */;
          input{
            display:none;
          }
          label>i{
            display:inline-block;
            width: 1.25rem /* 20/16 */;
            height: 1.25rem /* 20/16 */;
            background: url(../assets/noselect.png) 0 0 no-repeat;
            background-size: 100% 100%;
            vertical-align: middle;
          }
          input:checked+label>i{
            display:inline-block;
            width: 1.25rem /* 20/16 */;
            height: 1.25rem /* 20/16 */;
            background: url(../assets/select.png) 0 0 no-repeat;
            background-size: 100% 100%;
            vertical-align: middle;
          }
        }
      }
  }
</style>
