<template>
  <div class="wrap" id="image-detail">
    <img :src="image">
  </div>
</template>

<script>
  const MAP = {
    dt: require('./images-list/dt.jpg'),
    rl: require('./images-list/rl.jpg'),
    bg: require('./images-list/bg.jpg')
  }
  export default {
    route: {
      data () {
        const { name } = this.$route.query
        return {
          image: MAP[name]
        }
      }
    },
    data () {
      return {
        image: ''
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  #image-detail {
    text-align: center;
  }
</style>
