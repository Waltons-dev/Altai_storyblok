<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";
</script>

<script>
export default {
  mounted() {
    let allBodyEls = document.body.querySelectorAll(".article__body-element")
    for(let i of allBodyEls){
      if (i.tagName==="P"){
        i.classList.add("article__body-text")
      }
    }
  }
}
</script>

<template>
  <article class="article__body">
    <StoryblokComponent class="article__body-element" v-editable="blok" v-for="inblok in blok.columns" :key="inblok._uid" :blok="inblok" />
  </article>
</template>

<style scoped lang="scss">
.article__body{
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 4px solid #EF4444;
}
.article__body-element{
  margin-bottom: 40px;
}
</style>