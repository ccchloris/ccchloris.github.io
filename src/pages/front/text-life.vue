<template>
  <div class="wrap" id="text-life">
    <div class="boxes">
      <div class="box" v-for="list in $LIST">
        <a v-link="getLink(list.id)">
          <img :src="list.image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  const LIST = {
    text: [
      {
        image: require('./images-list/web_01.jpg'),
        id: '-KQphlf5tMPjfxLuv1hd'
      },
      {
        image: require('./images-list/wenz2.jpg'),
        id: '-KQproYSxDa13HjseOyG'
      },
      {
        image: require('./images-list/wenz3.jpg'),
        id: '-KQq2iPdo6MbSLEgwEU6'
      }
    ],
    mei: [
      {
        image: require('./images-list/201505291135588371388.jpg'),
        id: '-KQg7nU0Vodpk4c6xGLO'
      }
    ],
    video: [
      {
        image: require('./images-list/shi1.jpg'),
        id: '-KVLJQvl678vTyffuEcq'
      },
      {
        image: require('./images-list/shi2.jpg'),
        id: '-KeEo37jzG4G_kz0JA_l'
      },
      {
        image: require('./images-list/shi3.jpg'),
        id: '-KVLJhHyYnb6lXwKqdpb'
      }
    ]
  }
  export default {
    data () {
      this.$LIST = LIST[this.$route.query.name]
      return {}
    },
    methods: {
      getLink (id) {
        return {
          name: '文章详情',
          params: { id }
        }
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  #text-life {
    text-align: center;
    margin-top: 50px;

    .boxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .box {
      flex-basis: 30%;
      margin: 20px 0;

      img {
        width: 100%;
      }
    }
  }
</style>
