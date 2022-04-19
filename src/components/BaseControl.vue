<template>
  <button class="mx-1 d-block">
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
.mx-1{
margin: 0 7.5px;
}
</style>