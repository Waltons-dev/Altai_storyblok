<script setup>
import {StoryblokComponent} from "@storyblok/vue";

const props = defineProps({ blok: Object })
</script>

<template>
  <div>
    <div class="article__text-image">
      <img class="article__body-text-image" :src=blok.img :alt=blok.alternative_text>
      <div class="article__body-element-text">
        <StoryblokComponent class="article__text-heading" v-editable="blok" v-for="inblok in blok.columns.slice(0,1)" :key="inblok._uid" :blok="inblok" />
        <StoryblokComponent class="article__body-text" v-editable="blok" v-for="inblok in blok.columns.slice(1)" :key="inblok._uid" :blok="inblok" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article__body-element-text{
  width: 45%;
}
</style>