<template>
  <main class="wrap">
    <section id="index-one">
      <!--<h1 class="text-center two-lines">萌萌少女心</h1>-->

      <div class="center-block img-box">
        <div>
          <div class="img img1" v-link="{name:'文章详情',params:{id:'-KKI-iXJtjxL7AgkGoKc'}}">
            <div class="img-masker">
              <div>JILL STUART</div>
              <div>———— 唇膏 ————</div>
            </div>
          </div>
          <div class="img img2" v-link="{name:'文章详情',params:{id:'-KKMYF18FW8DoIHmQHHK'}}">
            <div class="img-masker">
              <div>LINE FRIENDS</div>
              <div>———— 咖啡店 ————</div>
            </div>
          </div>
        </div>
        <div>
          <div class="big-img img5" v-link="{name:'文章详情',params:{id:'-KKMXm8mObPh8zlCBktu'}}">
            <div class="img-masker">
              <div>紫色连衣裙</div>
              <div>———— 服装 ————</div>
            </div>
          </div>
        </div>
        <div>
          <div class="img img3" v-link="{name:'文章详情',params:{id:'-KKMCULBuYa1-VXlJkBT'}}">
            <div class="img-masker">
              <div>DIY棉花糖机</div>
              <div>———— 小物 ————</div>
            </div>
          </div>
          <div class="img img4" v-link="{ name: '文章详情', params: { id: '-KKMYA08pfLAKefyDGBK' } }">
            <div class="img-masker">
              <div>CHLOE</div>
              <div>———— 香水 ————</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="index-two">
      <h1>还你水当当的婴儿肌</h1>
      <div class="img-box">
        <div class="need-masker big-img">
          <a v-link="{ name: '文章详情', params: { id: '-KKMYOuxM8iDThhOfOF3' } }">
            <img src="./index-images/3.pic.jpg" alt="">
          </a>
          <div class="img-masker">
            <div>FRESH</div>
            <div>———— 护肤 ————</div>
          </div>
        </div>
        <div class="second-box">
          <div>
            <img src="./index-images/1.pic.png" alt="">
          </div>
          <div class="need-masker">
            <a v-link="{ name: '文章详情', params: { id: '-KNBjrZlDPvTMfAZghwd' } }">
              <img src="./index-images/2.pic.jpg" alt="">
            </a>
            <div class="img-masker">
              <div>L'OCCITANE</div>
              <div>———— 护肤 ————</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="index-3">
      <h1 class="two-lines">午后时光</h1>
      <div class="list">
        <div class="item">
          <a v-link="{ name: '图片', query: { name: 'dt' } }">
            <div class="img">
              <div></div>
              <img src="./index-images/web_01.jpg" height="178">
            </div>
          </a>
        </div>
        <div class="item">
          <a v-link="{ name: '图片', query: { name: 'rl' } }">
            <div class="img">
              <div></div>
              <img src="./index-images/web_02.jpg">
            </div>
          </a>
        </div>
        <div class="item">
          <a v-link="{ name: '图片', query: { name: 'bg' } }">
            <div class="img">
              <div></div>
              <img src="./index-images/web_03.jpg" v-link="{ name: '图片', query: { name: 'bg' } }">
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="index-4">
      <h1 class="two-lines">follow on instagram</h1>
      <div class="dsn-images">
        <a href="https://www.instagram.com/p/BO2RP7cF-G_/" target="_blank">
          <div></div>
          <img src="./index-images/n0.jpeg">
        </a>
        <a href="https://www.instagram.com/p/BR2z7zCFrLh/" target="_blank">
          <div></div>
          <img src="./index-images/n1.jpeg">
        </a>
        <a href="https://www.instagram.com/p/BL_0e09BVVY/" target="_blank">
          <div></div>
          <img src="./index-images/n3.jpeg" height="222">
        </a>
        <a href="https://www.instagram.com/p/BD0vWLxtmiQ/" target="_blank">
          <div></div>
          <img src="./index-images/n2.jpeg">
        </a>
      </div>
    </section>
  </main>
</template>

<style lang="sass" rel="stylesheet/scss">
  %section {
    padding-top: 100px;

    & h1 {
      margin-bottom: 110px;
      text-align: center;
      font-weight: normal;
    }
  }

  $maskHeight: 60px;
  %img-masker {
    overflow: hidden;

    & .img-masker {
      height: $maskHeight;
      background-color: rgba(0, 0, 0, 0.32);
      color: #fff;
      text-align: center;
      transition: all 0.2s;
      padding-top: 3px;

      div:first-child {
        font-size: 24px;
        font-family: sans-serif;
        letter-spacing: 5px;
      }
      div:last-child {
        font-size: 12px;
      }
    }
  }

  #index-one {
    @extend %section;
    /*<!--$imgW: 270px;-->*/
    $imgH: 200px;
    $space: 20px;
    $imgW: (900px - ($space * 2)) / 3;

    // 五格图片
    .img-box {
      display: flex;
      justify-content: space-between;
      width: $imgW * 3 + $space * 2;

      > div {
        width: $imgW;
      }
    }

    // 五格图片的公用样式
    %img {
      cursor: pointer;
      background-size: cover;
      background-position: center center;
    }

    // 五格图片的 img-masker 的动效
    @mixin img-item($imgHeight) {
      height: $imgHeight;
      .img-masker {
        transform: translateY($imgHeight);
      }

      &:hover > div {
        transform: translateY($imgHeight - $maskHeight);
      }
    }

    .img {
      @extend %img;
      @extend %img-masker;
      @include img-item($imgH);
      &:first-child {
        margin-bottom: $space;
      }
    }

    .big-img {
      @extend %img;
      @extend %img-masker;
      @include img-item($imgH * 2 + $space);
    }

    .img1 {
      background-image: url("./index-images/1.jpg");
    }
    .img2 {
      background-image: url("./index-images/2.jpg");
    }
    .img3 {
      background-image: url("./index-images/3.jpg");
    }
    .img4 {
      background-image: url("./index-images/4.jpg");
    }
    .img5 {
      background-image: url("./index-images/zhuyeyfx.jpg");
    }
  }

  #index-two {
    @extend %section;
    $border: 1px solid #000;

    .big-img {
      width: 60%;
      margin-right: 5%;
    }

    h1 {
      font-size: 30px;
      padding: 15px 0;
      border-top: $border;
      border-bottom: $border;
      margin-bottom: 35px;
    }

    .img-box {
      padding: 70px 20px 0 20px;
      display: flex;
      justify-content: space-between;

      .second-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .need-masker {
        @extend %img-masker;
        position: relative;

        .img-masker {
          position: absolute;
          bottom: -$maskHeight;
          left: 0;
          width: 100%;
        }

        &:hover .img-masker {
          bottom: 0;
        }
      }

      img {
        width: 100%;
      }
    }
  }

  #index-3 {
    @extend %section;
    padding-bottom: 100px;
    padding-top: 0;

    h1 {
      font-size: 30px;
      margin: 100px 0;
    }

    a {
      font-weight: bold;
      font-size: 24px;
      color: #000;

      &:hover {
        text-decoration: none;
        color: #eacdc4;
      }
    }

    .img {
      margin-bottom: 10px;
      position: relative;

      div {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        opacity: 0;
        transition: all 0.2s;
      }

      &:hover div {
        opacity: 0.3;
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 32%;

        img {
          width: 100%;
        }
      }
    }
  }

  #index-4 {
    @extend %section;
    padding-top: 0;

    h1 {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 30px;

      &:after,
      &:before {
        width: 100px;
      }
    }

    .dsn-images {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a {
        flex-basis: 25%;
        margin: 0 2px;
        position: relative;

        div {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: #fff;
          opacity: 0;
          transition: all 0.2s;
        }

        &:hover div {
          opacity: 0.3;
        }

        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }

      img {
        width: 100%;
      }
    }
  }
</style>
