<template>
  <ol class="breadcrumb">
    <li class="active">文章管理</li>
  </ol>
  <button type="button" class="btn btn-primary" style="margin-bottom: 15px;" v-link="{name:'写文章'}">写文章</button>
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
        <td v-text="article.createTime | toDate"></td>
        <td v-text="article.lastModifyTime | toDate"></td>
        <td>
          <a target="_blank" v-link="{name:'文章详情',params:{id:article['.key']}}">查看</a>
          <a v-link="{name: '编辑文章', params: {id: article['.key']}}">编辑</a>
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
        if (window.confirm('确定要删除这篇文章吗?此操作不可恢复。')) {
          api.deleteBlog(key).then(() => {
            window.alert('成功删除')
          })
        }
      }
    }
  }
</script>
