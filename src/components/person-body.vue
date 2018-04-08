<template>
  <div class="box">
    <h1>填写信息</h1>
    <div>
      <span>姓名</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>手机</span><input type="text" placeholder="请输入手机号" />
    </div>
    <div>
      <span>验证码</span><input type="text" placeholder="请输入验证码" />
    </div>
    <div>
      <span>地址</span><v-distpicker class="dist-picker"></v-distpicker>
      <div><input type="text" placeholder="请输入姓名" /> </div>
    </div>
    <div>
      <span>预约日期</span><input type="text" placeholder="请输入预约日期" />
    </div>
    <div>
      <span>预约时间</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>备注</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>是否开发票</span><label for="yes"><input type="radio" name="invoice" id="yes" />是</label><label for="no"><input type="radio" id="no" name="invoice" />否</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personbody',
  data () {
    return {
        "province": "",
        "city": "",
        "area": ""
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
      input{
        padding: 0.3rem 0.375rem;
        width: 14rem;
        height: 1rem;
        outline:none;
        border-radius: 0.375rem;
        border: 1px solid #c5c5c7;
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
    }
  }
  h1 {
    padding: 1.125rem 0;
    text-align:center;
    font-size: 1.125rem;
  }
</style>
