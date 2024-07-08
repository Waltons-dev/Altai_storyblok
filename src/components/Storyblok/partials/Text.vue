<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <strong>{{ blok.text }}</strong>
</template>

<style scoped lang="scss">
.article__published-date{
  font-family: "Formular", sans-serif;
  font-weight: 500 ;
  font-size: 16px;
  line-height: 24px;
}
</style>