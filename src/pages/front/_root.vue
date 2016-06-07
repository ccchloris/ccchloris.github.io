<template>
  <a-header></a-header>
  <router-view></router-view>
</template>

<script type="text/babel">
  export default {
    components: {
      'a-header': require('./_header.vue')
    }
  }
</script>
