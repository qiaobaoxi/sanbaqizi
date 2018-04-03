<template>
  <div class="hello">
    <home-header></home-header>
    <person-body></person-body>
  </div>
</template>

<script>
import personBody from './person-body'
import homeHeader from './home-header'
export default {
  name: 'phoneList',
  data () {
    return {
    }
  },
  components: {
    personBody,
    homeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
