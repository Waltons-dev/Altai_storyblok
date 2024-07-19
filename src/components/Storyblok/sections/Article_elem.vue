<script setup>
import {StoryblokComponent} from "@storyblok/vue";

const props=defineProps({blok:Object})
</script>
<template>
  <template v-for="inblok in blok.columns">
    <StoryblokComponent class="article__body-element article__left-text-image" v-if="blok.orientation==='left'" :blok="inblok" />
    <StoryblokComponent class="article__body-element article__right-text-image" v-if="blok.orientation==='right'" :blok="inblok"/>
    <StoryblokComponent class="article__body-element article__top-text-image" v-if="blok.orientation==='top'" :blok="inblok" />
    <StoryblokComponent class="article__body-element article__bottom-text-image" v-if="blok.orientation==='bottom'" :blok="inblok"/>
  </template>
</template>
<style scoped lang="scss">

</style>