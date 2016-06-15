<template>
  <ul>
    <li v-for="blog in blogs">
      <h2 v-text="blog.title"></h2>
      <div v-html="blog.content"></div>
    </li>
  </ul>
</template>

<script type="text/babel">
  import api from '../../services/api'
  export default {
    route: {
      data () {
        return api.queryBlog().then(blogs => ({ blogs }))
      }
    },
    data () {
      return {
        blogs: {}
      }
    }
  }
</script>
