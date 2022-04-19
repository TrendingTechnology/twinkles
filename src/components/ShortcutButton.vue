<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  font-size: 1.25rem;
  padding: 2px;
  margin: 0 5px;
  font-family: "Times New Roman", Times, serif;
}

button.bold {
  font-weight: 300;
  font-family: unset;
}

button.italic {
  font-style: italic;
}
</style>