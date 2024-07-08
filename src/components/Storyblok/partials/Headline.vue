<script setup>
defineProps({ blok: Object })
</script>

<template>
  <h1 v-editable="blok">{{ blok.head }}</h1>
</template>

<style scoped lang="scss">
.article__headline{
  font-family: "SoyuzGroteskBold",sans-serif;
  font-size: 72px;
  line-height: 72px;
  margin-bottom: 28px;
  margin-top: 0;
}
</style>