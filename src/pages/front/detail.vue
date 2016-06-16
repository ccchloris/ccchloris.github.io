<template>
  <div class="wrap" id="article-detail">
    <div v-if="article">
      <h1 v-text="article.title"></h1>
      <div>
        创建时间: <span v-text="article.createTime | toDate"></span><br>
        最后修改时间: <span v-text="article.lastModifyTime | toDate"></span>
      </div>
      <div class="content" v-html="article.content"></div>
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
    .content {
      margin-top: 20px;
      margin-bottom: 50px;
    }
  }
</style>
