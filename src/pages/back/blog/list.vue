<template>
  <ol class="breadcrumb">
    <li class="active">文章管理</li>
  </ol>
  <button type="button" class="btn" v-link="{name:'写文章'}">写文章</button>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>标题</th>
        <th>创建日期</th>
        <th>最后修改日期</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles">
        <td>
          <a v-text="article.title" v-link="{name: '编辑文章', params: {id: article['.key']}}"></a>
        </td>
        <td v-text="article.createTime"></td>
        <td v-text="article.lastModifyTime"></td>
        <td>
          <a href="#" @click.prevent="del(article['.key'])">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import api from '../../../services/api'
  export default {
    wilddog: {
      articles: api.blogs
    },
    methods: {
      /**
       * 删除文章
       * @param {String} key
       */
      del (key) {
        if (confirm('确定要删除这篇文章吗?此操作不可恢复。')) {
          api.deleteBlog(key).then(() => {
            alert('成功删除')
          })
        }
      }
    }
  }
</script>
