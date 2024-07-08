<script setup>
import { computed } from "vue";
import {renderRichText} from "@storyblok/vue";
const props = defineProps({ blok: Object })
const articleContent = computed(() => renderRichText(props.blok.text));
</script>

<script>
//костыль чтобы убрать <p>, так как сториблок зачем-то добавляет пустой <p> при добавлении richtext, а это кринж
export default {
  mounted() {
    // const RichTextParent = document.querySelector(".article__main-text");
    // const articleDescription=document.querySelector(".article__body-element");
    // const richText = RichTextParent.firstChild;
    // RichTextParent.firstChild.classList.add("article__main-text");
    // RichTextParent.remove()
    // articleDescription.prepend(richText)
  }
}
</script>

<template>
  <div class="article__body-element">
    <p class="article__main-text" v-html="articleContent"></p>

    <img class="article__body-text-image" :src=blok.img :alt=blok.alternative_text>
  </div>
</template>

<style lang="scss">
.article__body-element{
  display: flex;
  gap: 151px;
}

.article__main-text{
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
.article__body-text-image{
  object-fit: cover;
  width: 100%;
  max-height: 600px;
  border-radius: 16px;
}
</style>