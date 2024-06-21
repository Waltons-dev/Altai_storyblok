<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";
</script>

<script>

</script>
<template>
  <div class="article__hero_container">
    <StoryblokComponent class="article__headline" v-editable="blok" v-for="inblok in blok.Headline" :key="inblok._uid" :blok="inblok" />
    <div class="article__hero-main">
      <StoryblokComponent v-editable="blok" v-for="inblok in blok.columns" :key="inblok._uid" :blok="inblok" />
    </div>
  </div>


</template>
<style scoped lang="scss">
.article__hero-main{
  display: flex;
  justify-content: space-between;
}
</style>