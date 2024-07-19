<script setup>
import {StoryblokComponent} from "@storyblok/vue";

const props = defineProps({ blok: Object })
</script>


<template>
    <div>
      <div class="article__body-element-text">
        <template v-for="inblok in blok.columns">
          <StoryblokComponent class="article__body-text" v-if="inblok.component==='Textarea'" :blok="inblok" />
          <StoryblokComponent class="article__text-Soyuz-heading" v-if="inblok.component==='Article_body_heading'" :blok="inblok" />
        </template>
      </div>
      <img loading="lazy" class="article__body-text-image" :src=blok.img :alt=blok.alternative_text>
    </div>
</template>

<style lang="scss">
.article__left-text-image{
  display: flex;
  align-items: center;
  gap: 10%;
}
.article__right-text-image{
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 10%;
  .article__body-element-text{
    width: 45%;
  }
}
.article__top-text-image{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10%;
}
.article__bottom-text-image{
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 10%;
}

.article__main-text{
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
.article__body-text-image{
  object-fit: cover;
  width: 45%;
  max-height: 600px;
  border-radius: 16px;
}

</style>