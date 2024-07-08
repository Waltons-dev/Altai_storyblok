<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";
</script>

<template>
  <article class="article__body">
    <StoryblokComponent v-editable="blok" v-for="inblok in blok.columns" :key="inblok._uid" :blok="inblok" />
  </article>
</template>

<style scoped lang="scss">
.article__body{
  margin-bottom: 80px;
}
</style>