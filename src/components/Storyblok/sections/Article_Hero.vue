<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";
</script>

<script>

</script>
<template>
  <div class="article__hero">
    <StoryblokComponent class="article__headline" v-editable="blok" v-for="inblok in blok.Headline" :key="inblok._uid" :blok="inblok" />
    <div class="article__hero-main">
      <StoryblokComponent class="article__description article__text" v-editable="blok" v-for="inblok in blok.columns.slice(0,1)" :key="inblok._uid" :blok="inblok" />
      <StoryblokComponent class="article__hero-activities" v-editable="blok" v-for="inblok in blok.columns.slice(1)" :key="inblok._uid" :blok="inblok" />
    </div>
  </div>

</template>
<style scoped lang="scss">
.article__hero{
  margin-bottom: 80px;
}
.article__hero-main{
  display: flex;
  justify-content: space-between;
}

</style>