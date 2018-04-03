<template>
  <div class="hello">
    <home-header></home-header>
    <phone-detail-body></phone-detail-body>
  </div>
</template>

<script>
import phoneDetailBody from './phoneDetail-body'
import homeHeader from './home-header'
export default {
  name: 'phoneList',
  data () {
    return {
    }
  },
  components: {
    phoneDetailBody,
    homeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
