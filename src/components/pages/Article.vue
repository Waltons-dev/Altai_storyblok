<script setup>
import {onMounted, reactive} from "vue";
import {useStoryblokBridge, useStoryblokApi} from "@storyblok/vue";

const storyblokApi = useStoryblokApi();
const {data} = await storyblokApi.get("cdn/stories/home", {version: "published"});
const state = reactive({story: data.story});

onMounted(() => {
  useStoryblokBridge(state.story.id, story => (state.story = story));
});
</script>

<template>
  <StoryblokComponent class="article__page_container _container" v-if="state.story" :blok="state.story.content"/>
</template>


<style scoped lang="scss">

</style>