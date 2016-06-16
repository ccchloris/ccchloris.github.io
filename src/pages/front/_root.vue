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
