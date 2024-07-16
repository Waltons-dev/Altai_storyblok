<script setup>
defineProps({ blok: Object })

</script>

<template>
  <img loading="lazy" class="article__body-big-image" :src=blok.img :alt=blok.alternative_text>
</template>

<style lang="scss">
.article__body-big-image{
  object-fit: cover;
  width: 100%;
  max-height: 600px;
  border-radius: 16px;
}
</style>