<script setup>
const props = defineProps({ blok: Object })
console.log(props)
</script>

<template>
  <div v-editable="blok">
    <h1>{{ blok.name }}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>