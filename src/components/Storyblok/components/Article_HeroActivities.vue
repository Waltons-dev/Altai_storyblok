<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";
</script>

<template>
    <div class="article__hero-activities">
      <StoryblokComponent v-editable="blok" v-for="inblok in blok.columns" :key="inblok._uid" :blok="inblok" />
    </div>
</template>

<style scoped lang="scss">
.article__hero-activities{
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 16px;
}
</style>