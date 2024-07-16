<script setup>
import { computed } from "vue";
import {renderRichText} from "@storyblok/vue";
const props = defineProps({ blok: Object })
const articleContent = computed(() => renderRichText(props.blok.text));
</script>

<template>
  <p v-html="articleContent"></p>
</template>

<style lang="scss">
.article__description{
  width: 65%;
}
.article__text >p{
  font-family: "Formular",sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
}
.article__description-text > i{
  font-style: italic;
  font-weight:normal;
}

.article__body-text>p{
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
</style>