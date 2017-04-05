<template>
  <footer id="footer">
    <div class="wrap">
      <p class="one">HI RAYNA</p>
      <p><a v-link="'/'">www.raynatsai.cn</a></p>
      <p class="icons">
        <a href="https://www.instagram.com/hiraynacc/" class="icon-instagram"></a>
        <a href="http://weibo.com/u/5742369515" class="icon-weibo"></a>
      </p>
      <p>Copyright &copy; 2017 Rayna</p>
      <p>Maintain by <a href="http://www.limingkai.cn">Mike Lee</a></p>
    </div>
  </footer>
</template>

<style lang="sass" rel="stylesheet/scss">
  #footer {
    .wrap {
      border-top: 1px solid #000;
      margin-top: 50px;
      padding: 50px 0;
      text-align: center;

      .one {
        font-size: 32px;
      }

      a {
        text-decoration: none;
        color: #000;
        transition: color 0.2s;

        &:hover {
          color: #999;
        }
      }

      .icons a {
        font-size: 26px;
      }
    }
  }
</style>
