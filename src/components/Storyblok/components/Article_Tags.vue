<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";

</script>

<template>
    <div class="article__tags">
      <StoryblokComponent class="article__tag" v-editable="blok" v-for="inblok in blok.columns" :key="inblok._uid" :blok="inblok" />
    </div>
</template>

<style scoped>
.article__tags{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  align-items: center;
  flex-direction: row;
}

</style>