<template>
  <button class="mx-1 d-block" style="">
    <i :class="'icofont-' + icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
     
    },
  },
};
</script>

<style scoped>

</style>