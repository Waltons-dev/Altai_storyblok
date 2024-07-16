<script setup>
import {StoryblokComponent} from "@storyblok/vue";

const props = defineProps({ blok: Object })
</script>

<template>
  <div>
    <div class="article__text-image">
      <div class="article__body-element-text">
        <StoryblokComponent class="article__text-heading" v-editable="blok" v-for="inblok in blok.columns.slice(0,1)" :key="inblok._uid" :blok="inblok" />
        <StoryblokComponent class="article__body-text" v-editable="blok" v-for="inblok in blok.columns.slice(1)" :key="inblok._uid" :blok="inblok" />
      </div>
      <img loading="lazy" class="article__body-text-image" :src=blok.img :alt=blok.alternative_text>
    </div>
  </div>
</template>

<style lang="scss">
.article__text-image{
  display: flex;
  align-items: center;
  gap: 10%;
}

.article__main-text{
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
.article__body-text-image{
  object-fit: cover;
  width: 45%;
  max-height: 600px;
  border-radius: 16px;
}

</style>