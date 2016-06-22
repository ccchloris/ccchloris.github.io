<template>
  <div class="wrap" id="article-detail">
    <div v-if="article" class="article">
      <h1 v-text="article.title"></h1>
      <!--<div>-->
        <!--创建时间: <span v-text="article.createTime | toDate"></span><br>-->
        <!--最后修改时间: <span v-text="article.lastModifyTime | toDate"></span>-->
      <!--</div>-->
      <div class="content" v-html="article.content"></div>

      <!-- 片段一 点击购买 -->
      <!--<div class="buy-it">-->
      <!--<div class="info">-->
      <!--<div class="value">￥63.00</div>-->
      <!--<div class="likes">2345人喜欢</div>-->
      <!--</div>-->
      <!--<div>-->
      <!--<a target="_blank" href="#">查看详情</a>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script type="text/babel">
  import api from '../../services/api'
  export default {
    data () {
      return { article: null }
    },
    ready () {
      this.$bindAsObject('article', api.blogs.child(this.$route.params.id))
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  #article-detail {

    .article {
      width: 600px;
      margin: 0 auto;

      .content {
        margin-top: 20px;
        margin-bottom: 50px;

        img {
          width: 100%;
          height: auto !important;
        }
      }

      .buy-it {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        position: relative;

        &:before {
          content: '';
          display: block;
          background: #d8d8d8;
          width: 2px;
          height: 88%;
          position: absolute;
          top: 5%;
        }

        .info {
          padding-left: 10px;
        }

        .value {
          color: #f84e4e;
        }

        .likes {
          color: #999;
        }

        a {
          display: inline-block;
          width: 100px;
          text-align: center;
          font-size: 16px;
          border: solid thin #ff897d;
          height: 32px;
          line-height: 30px;
          border-radius: 2px;
          color: #f7554d;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
