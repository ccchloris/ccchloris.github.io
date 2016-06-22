<template>
  <main class="wrap">
    <section id="index-one">
      <h1 class="text-center">———— 萌萌少女心 ————</h1>

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
              <div>牛仔背心裙</div>
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
          <div class="img img4" v-link="{name:'文章详情',params:{id:'-KKMYA08pfLAKefyDGBK'}}">
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
        <!--<img src="" alt="">-->
        <div style="height:500px;background: gray">placeholder</div>
      </div>
      <div class="bb"></div>
    </section>
    <section id="index-3">
      <h1>
        News & Events
      </h1>
      <div class="list">
        <div class="item">
          <div class="img">
            <img src="./index-images/1.jpg" alt="">
          </div>
          <h4>标题</h4>
          <div>日期</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="./index-images/1.jpg" alt="">
          </div>
          <h4>标题</h4>
          <div>日期</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="./index-images/1.jpg" alt="">
          </div>
          <h4>标题</h4>
          <div>日期</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script type="text/babel">
  export default {}
</script>

<style lang="sass" rel="stylesheet/scss">
  %section {
    padding-top: 130px;

    & h1 {
      margin-bottom: 110px;
      text-align: center;
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

    @mixin img-item($imgHeight) {
      cursor: pointer;
      background-size: cover;
      background-position: center center;
      overflow: hidden;
      height: $imgHeight;
      $maskHeight: 60px;
      .img-masker {
        height: $maskHeight;
        background-color: #000;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        transition: transform 0.2s;
        transform: translateY($imgHeight);
        padding-top: 3px;

        div:first-child {
          font-size: 24px;
          font-family: "Open Sans", sans-serif;
          letter-spacing: 5px;
        }
        div:last-child {
          font-size: 12px;
        }
      }

      &:hover > div {
        transform: translateY($imgHeight - $maskHeight);
      }
    }

    .img {
      @include img-item($imgH);
      &:first-child {
        margin-bottom: $space;
      }
    }

    .big-img {
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
      background-image: url("./index-images/5.jpg");
    }
  }

  #index-two {
    @extend %section;
    $border: 2px solid #000;

    h1 {
      font-size: 30px;
      padding: 15px 0;
      border-top: $border;
      border-bottom: $border;
      margin-bottom: 0;
    }

    .img-box {
      padding: 70px 20px;

      img {
        width: 100%;
      }
    }

    .bb {
      border-bottom: $border;
    }
  }

  #index-3 {
    @extend %section;
    padding-bottom: 200px;
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
</style>
