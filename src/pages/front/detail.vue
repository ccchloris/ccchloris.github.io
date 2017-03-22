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
    padding-top: 50px;

    .article {
      width: 600px;
      margin: 0 auto;

      h1 {
        font-family: sans-serif;
        text-align: center;
      }

      .content {
        margin-top: 20px;
        margin-bottom: 50px;
        font-size: 16px;
        color: #666;
      }

      .buy-it {
        text-align: center;
        margin-top: 30px;
        a {
          display: inline-block;
          width: 140px;
          text-align: center;
          font-size: 16px;
          border: 1px solid #000;
          height: 32px;
          line-height: 30px;
          border-radius: 2px;
          color: #000;
          text-decoration: none;

          &:hover {
            border-color: #999;
            color: #999;
          }
        }
      }
    }
  }
</style>
