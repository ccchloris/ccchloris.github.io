<template>
  <div class="wrap" id="text-life">
    <div class="boxes">
      <a v-link="getLink(list.id)" class="box" v-for="list in lists">
        <img :src="list.image">
        <div class="overlay" v-if="list.text">
          {{ list.text }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  const LIST = {
    text: [
      {
        image: require('./images-list/web_01.jpg'),
        id: '-KQphlf5tMPjfxLuv1hd',
        text: '提升幸福感'
      },
      {
        image: require('./images-list/wenz2.jpg'),
        id: '-KQproYSxDa13HjseOyG',
        text: '成为有趣的人'
      },
      {
        image: require('./images-list/wenz3.jpg'),
        id: '-KQq2iPdo6MbSLEgwEU6',
        text: '多见人，少交友'
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
    route: {
      data () {
        return {
          lists: LIST[this.$route.query.name]
        }
      }
    },
    data () {
      return {
        lists: []
      }
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
      display: block;
      flex-basis: 30%;
      margin: 20px 0;
      position: relative;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(68, 68, 68, 0.4);
        opacity: 0;
        transition: opacity 0.2s;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: sans-serif;
        letter-spacing: 5px;

        &:hover {
          opacity: 1;
        }
      }

      img {
        width: 100%;
      }
    }
  }
</style>
