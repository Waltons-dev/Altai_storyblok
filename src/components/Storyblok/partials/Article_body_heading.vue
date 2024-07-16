<script setup>
defineProps({ blok: Object })
</script>

<template>
  <h3 v-editable="blok">{{ blok.head }}</h3>
</template>

<style scoped lang="scss">
.article__text-heading{
  font-family: "SoyuzGroteskBold", sans-serif;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 0;
}
</style>