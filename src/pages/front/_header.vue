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
            <a href="#">寻找生活</a>
            <div class="sub-menus">
              <ul class="list-unstyled">
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'videos' } }">视频</a>
                </li>
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'summer' } }">夏日</a>
                </li>
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'clothing' } }">穿衣</a>
                </li>
                <li>
                  <a v-link="{ name: '图片列表', query: { name: 'foods' } }">美食</a>
                </li>
              </ul>
            </div>
          </li>
          <li><a href="#">文字生活</a></li>
          <li><a href="#">美丽生活</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" rel="stylesheet/scss">
  #header-image {
    background: url("./index-images/5.pic.jpg") center center;
    background-size: cover;
    height: 300px;
  }

  #nav {
    $height: 45px;
    height: $height;

    .header-nav {
      background: url(./index-images/4.pic.jpg) center center;
      width: 100%;
      z-index: 9999;

      .menus-box {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: $height;

        > li {
          flex-grow: 1;
          text-align: center;
          position: relative;
          height: $height;
          line-height: $height;

          &::after,
          &::before {
            $lineHeight: 2px;
            display: block;
            position: absolute;
            top: ($height - $lineHeight) / 2;
            content: '';
            opacity: 0;
            width: 20px;
            height: $lineHeight;
            background-color: #fff;
            transition: all 0.2s;
          }

          $m: 65px;
          &:after {
            right: $m;
          }

          &:before {
            left: $m;
          }

          a {
            color: #fff;
            font-size: 18px;

            &:hover, &:active, &:visited {
              text-decoration: none;
            }
          }

          $liHeight: 44px;
          .sub-menus {
            position: absolute;
            top: $height;
            left: 25%;
            width: 50%;

            ul {
              height: 0;
              overflow: hidden;
              transition: all 0.2s;

              li {
                height: $liHeight;
                line-height: $liHeight;
                background-color: #000;
                color: #fff;
              }
            }
          }

          &:hover {
            .sub-menus ul {
              height: $liHeight * 4;
            }

            &:after,
            &:before {
              opacity: 1;
            }

            &:before {
              left: 50px;
            }
            &:after {
              right: 50px;
            }
          }
        }
      }
    }
  }
</style>
