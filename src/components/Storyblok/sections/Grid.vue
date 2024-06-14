<script setup>
defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";

</script>

<template>
  <div v-editable="blok">
    <div v-for="inblok in blok.columns" :key="inblok._uid">
      <StoryblokComponent :blok="inblok" />
    </div>
  </div>
</template>
<style scoped>

</style>