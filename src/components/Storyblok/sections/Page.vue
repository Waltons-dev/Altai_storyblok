<script setup>

defineProps({ blok: Object })
import {StoryblokComponent} from "@storyblok/vue";

</script>

<template>
  <main v-editable="blok">
    <StoryblokComponent
        v-for="inblok in blok.body"
        :blok="inblok"
        :key="inblok._uid"
    />
  </main>
</template>
<style scoped lang="css">

</style>
