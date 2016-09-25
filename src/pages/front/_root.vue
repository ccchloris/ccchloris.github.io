<template>
  <a-header></a-header>
  <router-view></router-view>
  <a-footer></a-footer>
</template>

<script type="text/babel">
  export default {
    components: {
      'a-header': require('./_header.vue'),
      'a-footer': require('./_footer.vue')
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  .two-lines {
    $margin: 20px;

    &:after,
    &:before {
      content: '';
      width: 80px;
      height: 1px;
      background-color: #000;
      display: inline-block;
      vertical-align: middle;
    }

    &:after {
      margin-left: $margin;
    }

    &:before {
      margin-right: $margin;
    }
  }
</style>
