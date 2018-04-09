<template>
  <div class="box">
    <h1>填写信息</h1>
    <div>
      <span>姓名</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>手机</span><input type="text"  placeholder="请输入手机号" />
    </div>
    <div>
      <span>验证码</span><input type="text" class="code" placeholder="请输入验证码" /><input type="button" value="发送手机短信">
    </div>
    <div>
      <span>地址</span><v-distpicker class="dist-picker"></v-distpicker>
      <div class="addressDetail"><input type="text" placeholder="详细地址" /> </div>
    </div>
    <div>
      <span>预约日期</span><datetime class="date-time" v-model="date"></datetime>
    </div>
    <div>
      <span>预约时间</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>备注</span><textarea class="remarks"></textarea>
    </div>
    <div>
      <span>是否开发票</span><label for="yes"><input type="radio" name="invoice" id="yes" />是</label><label for="no"><input type="radio" id="no" name="invoice" />否</label>
    </div>
    <div><button class='btn'>提交订单</button></div>
  </div>
</template>

<script>
export default {
  name: 'personbody',
  data () {
    return {
      province: '',
      city: '',
      area: '',
      date: ''
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .box{
    padding: 0 .625rem;
    >div{
      margin-bottom: 1.125rem;
      span{
        display: inline-block;
        margin-right: 0.5rem;
        width: 5.5rem;
        text-align: right;
      }
      [type="text"]{
        padding: 0.3rem 0.375rem;
        width: 14rem;
        height: 1rem;
        outline:none;
        border-radius: 0.375rem;
        border: 1px solid #c5c5c7;
      }
      .code{
        width: 7.875rem;
      }
      [type="button"]{
        margin-left: 0.3125rem;
        width: 6rem;
        height: 1.6rem;
        color:white;
        outline:none;
        background-color: #6ac8ed;
        border: none;
        border-radius: 0.875rem;
        padding: 0 0.4rem;
        font-size: 0.875rem;
      }
      .dist-picker{
        display:inline-block;
        padding: 0;
        width: 14rem;
        height: 1.6rem;
      }
      .dist-picker /deep/ select{
        padding: 0;
        width: 4.25rem;
        height: 100%;
        font-size: 0.875rem;
      }
      .addressDetail{
        margin-top: 1.125rem;
        padding-left: 6rem;
      }
    }
    .date-time{
      display: inline-block;
      width: 14rem;
    }
    .date-time /deep/ input{
      padding: 0.3rem 0.375rem;
      width: 14rem;
      height: 1rem;
      outline:none;
      border-radius: 0.375rem;
      border: 1px solid #c5c5c7;
    }
    .remarks{
      width: 14rem;
      height: 4rem;
      border-radius: 0.375rem;
      border: 1px solid #c5c5c7;
      vertical-align:top;
    }
  }
  h1 {
    padding: 1.125rem 0;
    text-align:center;
    font-size: 1.125rem;
  }
  .btn{
    width: 100%;
    height: 2.8125rem;
    color: white;
    font-size: 1.25rem;
    background-color: #6ac8ed;
    border: none;
    border-radius: 2rem;
  }
</style>
