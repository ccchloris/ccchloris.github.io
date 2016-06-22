<!-- 后台管理的根组件 -->

<template>
  <div id="back-root">
    <div class="left-nav">
      <div class="list-group">
        <a class="list-group-item" v-link="{name:'后台首页', exact: true, activeClass: 'active'}">首页</a>
        <a class="list-group-item" v-link="{name:'后台文章列表', activeClass: 'active'}">文章管理</a>
      </div>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="sass" rel="stylesheet/scss">
  #back-root {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;

    .left-nav {
      height: 100%;
      width: 200px;
      flex-shrink: 0;
    }

    .right-content {
      flex-grow: 99; // 让右侧总是占满
      height: 100%;
      padding: 15px;
    }
  }
</style>
