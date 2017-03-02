<template>
  <div class="wrap" id="images-list">
    <h2 class="text-center two-lines">{{ config.title }}</h2>
    <div class="images">
      <div
          class="image"
          v-for="image in config.images"
          :style="{ backgroundImage: 'url('+ image +')' }">
      </div>
    </div>
  </div>
</template>

<script>
  const IMAGES_MAP = {
    summer: {
      title: '夏日晚风里',
      images: [
        require('./images-list/summer/1.jpg'),
        require('./images-list/summer/2.jpg'),
        require('./images-list/summer/3.jpg'),
        require('./images-list/summer/4.jpg'),
        require('./images-list/summer/5.jpg'),
        require('./images-list/summer/6.jpg'),
        require('./images-list/summer/7.jpg'),
        require('./images-list/summer/8.jpg'),
        require('./images-list/summer/9.jpg')
      ]
    },
    foods: {
      title: '认真吃早餐',
      images: [
        require('./images-list/foods/1.jpeg'),
        require('./images-list/foods/2.jpeg'),
        require('./images-list/foods/3.jpeg'),
        require('./images-list/foods/4.jpeg'),
        require('./images-list/foods/5.jpeg'),
        require('./images-list/foods/6.jpeg'),
        require('./images-list/foods/7.jpeg'),
        require('./images-list/foods/8.jpeg'),
        require('./images-list/foods/9.jpeg')
      ]
    }
  }

  export default {
    route: {
      data () {
        const { name } = this.$route.query
        return {
          config: IMAGES_MAP[name] || {},
          isVideos: false
        }
      }
    },
    data () {
      return {
        config: {}
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  #images-list {
    margin-bottom: 100px;

    h2 {
      margin: 100px 0;
    }

    .images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .image {
        flex-basis: 32%;
        height: 400px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }

    .videos > div {
      margin: 20px 0;
    }
  }
</style>
