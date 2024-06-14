<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    {{ blok.head }}
  </div>
</template>

<style scoped lang="scss">

</style>