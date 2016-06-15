<template>
  <main class="container">
    <section id="index-one">
      <h1 class="text-center">———— 萌萌少女心 ————</h1>

      <div class="center-block img-box">
        <div>
          <div class="img" style="background-color: #A58D8D;">
            <div class="img-masker">
              <div>JILL STUART</div>
              <div>———— 唇膏 ————</div>
            </div>
          </div>
          <div class="img" style="background-color: #826FA0;">
            <div class="img-masker">x</div>
          </div>
        </div>
        <div>
          <div class="big-img" style="background-color: #AF8080;">
            <div class="img-masker">x</div>
          </div>
        </div>
        <div>
          <div class="img" style="background-color: #6AA774;">
            <div class="img-masker">x</div>
          </div>
          <div class="img" style="background-color: #97985C;">
            <div class="img-masker">x</div>
          </div>
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
    padding-top: 300px;

    & h1 {
      margin-bottom: 110px;
    }
  }

  #index-one {
    @extend %section;
    $imgW: 270px;
    $imgH: 200px;
    $space: 20px;

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
      }

      &:hover > div {
        transform: translateY($imgHeight - $maskHeight);
      }
    }

    .img {
      background-image: url(./index-images/1.jpg);
      @include img-item($imgH);
      &:first-child {
        margin-bottom: $space;
      }
    }

    .big-img {
      @include img-item($imgH * 2 + $space);
    }
  }
</style>
