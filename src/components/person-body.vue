<template>
  <div class="box">
    <h1>填写信息</h1>
    <div>
      <span>姓名</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>手机</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>验证码</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>地址</span><input type="text" placeholder="请输入姓名" />
    </div>
    <div>
      <span>预约日期</span><input type="text" placeholder="请输入姓名" />
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
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
