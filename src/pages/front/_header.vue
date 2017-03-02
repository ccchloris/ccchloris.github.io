<template>
  <!-- 头图 -->
  <div id="header-image"></div>
  <!-- 导航栏 -->
  <nav id="nav">
    <div class="header-nav" v-fixed-top>
      <div class="wrap">
        <ul class="list-unstyled menus-box">
          <li><a href="#">主页</a></li>
          <li>
            <a href="#">爱生活</a>
            <div class="sub-menus">
              <ul class="list-unstyled">
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'summer' } }">清爽夏日</a>
                </li>
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'foods' } }">一日之晨</a>
                </li>
              </ul>
            </div>
          </li>
          <li><a v-link="{ name: '文字生活', query: { name: 'text' } }">看世界</a></li>
          <li><a v-link="{ name: '文字生活', query: { name: 'video' } }">原创视频</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" rel="stylesheet/scss">
  #header-image {
    background: url("./index-images/5.pic.jpg") center center;
    background-size: auto 102%; // 防止底部出现白条
    height: 300px;
  }

  #nav {
    $height: 40px;
    height: $height;

    .header-nav {
      background: #f2f2f2;
      width: 100%;
      z-index: 9999;
    }

    .menus-box {
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $height;

      a {
        color: #7f7f7f;
        font-size: 16px;

        &:hover, &:active, &:visited, &:focus {
          text-decoration: none;
        }

        &:hover {
          color: #ef9781;
        }
      }

      .sub-menus {
        position: absolute;
        top: $height;
        left: 25%;
        width: 60%;

        ul {
          height: 0;
          overflow: hidden;
          transition: all 0.2s;
          position: relative;
          left: 10px;
        }

        li {
          text-align: left;
          background: #f9f9f9;

          &:hover {
            background: #f2f2f2;
          }

          a {
            display: block;
            padding-left: 20px;
            height: $height;
            line-height: $height;
          }
        }
      }

      > li {
        flex-grow: 1;
        text-align: center;
        position: relative;
        height: $height;
        line-height: $height;

        &:hover {
          .sub-menus ul {
            height: $height * 4;
          }
        }
      }
    }
  }
</style>
