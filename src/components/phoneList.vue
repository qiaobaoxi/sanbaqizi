<template>
  <div class="hello">
    <home-header></home-header>
    <phone-list-body></phone-list-body>
  </div>
</template>

<script>
import phoneListBody from './phoneList-body'
import homeHeader from './home-header'
export default {
  name: 'phoneList',
  data () {
    return {
    }
  },
  components: {
    phoneListBody,
    homeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
