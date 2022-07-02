<template>
  <div>
    <appleftAside></appleftAside>
<!--    <cardAside></cardAside>-->
  </div>
</template>

<script>
import appleftAside from '@/components/leftAside/index'
// import cardAside from '@/components/Card/Card'
export default {
  components: {
    appleftAside
    // cardAside
  },
  name: 'FrameWork',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
