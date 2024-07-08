<script setup>
import { computed } from "vue";
import {renderRichText} from "@storyblok/vue";
const props = defineProps({ blok: Object })
const articleContent = computed(() => renderRichText(props.blok.hero_text));
</script>

<script>
//костыль чтобы убрать <p>, так как сториблок зачем-то добавляет пустой <p> при добавлении richtext, а это кринж
export default {
  mounted() {
    const RichTextParent = document.querySelector(".article__description-text");
    const articleDescription=document.querySelector(".article__description");
    const richText = RichTextParent.firstChild;
    RichTextParent.firstChild.classList.add("article__description-text");
    RichTextParent.remove()
    articleDescription.prepend(richText)
  }
}
</script>
<template>
  <div class="article__description" v-editable="blok">
      <p class="article__description-text" v-html="articleContent"></p>
  </div>
</template>

<style lang="scss">
.article__description{
  width: 65%;
}
.article__description-text{
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
</style>