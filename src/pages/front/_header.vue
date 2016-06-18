<template>
  <!-- 头图 -->
  <div id="header-image"></div>
  <!-- 导航栏 -->
  <nav id="header-nav" v-fixed-top>
    <div class="wrap">
      <ul class="list-unstyled">
        <li><a href="#">主页</a></li>
        <li><a href="#">发现美</a></li>
        <li><a href="#">联系我</a></li>
        <li><a href="#">售卖甜品</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass" rel="stylesheet/scss">
  #header-image {
    height: 300px;
  }

  #header-nav {
    background-color: #2a2a2a;
    left: 0;
    width: 100%;

    ul {
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:60px;

      li {
        flex-grow: 1;
        text-align: center;
        $height: 60px;

        a {
          color: #dfcfbe;
          font-size: 18px;
        }
      }
    }
  }
</style>
