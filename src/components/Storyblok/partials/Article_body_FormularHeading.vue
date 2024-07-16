<script setup>
import { computed } from "vue";
import {renderRichText} from "@storyblok/vue";

const props = defineProps({ blok: Object })
const articleContent = computed(() => renderRichText(props.blok.head));
</script>

<template>
  <h3 class="article__body_rich-heading" v-html="articleContent"></h3>
</template>

<style lang="scss">
.article__body_rich-heading{
  margin-bottom: 0;
}
.article__body_rich-heading>p{
  font-size: 30px;
  line-height: 36px;
  font-family: "Formular", sans-serif;
  font-weight: bold;
  margin-bottom: 0;
}
u{
  color: #EF4444;
  font-weight: bold;
  text-decoration:none;
  position: relative;
  display: inline-block;
}
u::before{
  content: '';
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='157' height='10' viewBox='0 0 157 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M155 3.13333L141.525 6.53392C135.178 8.13554 128.485 7.65687 122.431 5.1684V5.1684C115.875 2.47358 108.586 2.14187 101.812 4.23009L95.9274 6.04416C89.7233 7.95675 83.0511 7.685 77.0231 5.27423L75.4924 4.66204C69.6201 2.31354 63.0639 2.34481 57.2143 4.74923L54.2822 5.95446C49.5792 7.88758 44.2664 7.67008 39.7372 5.35901L38.6785 4.81881C34.0186 2.4411 28.4658 2.61502 23.9639 5.27968V5.27968C19.9893 7.6322 15.1634 8.05891 10.8377 6.4403L2 3.13333' stroke='%23EF4444' stroke-width='4' stroke-linecap='round'/%3e%3c/svg%3e ");
  background-repeat: repeat-x;
  background-position-y: bottom;
  position: absolute;
  bottom: -9px;
  left: 1.62px;
  width: 100%;
  height: 10px;
}
u::after{
  content: '';
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='157' height='10' viewBox='0 0 157 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M155 3.13333L141.525 6.53392C135.178 8.13554 128.485 7.65687 122.431 5.1684V5.1684C115.875 2.47358 108.586 2.14187 101.812 4.23009L95.9274 6.04416C89.7233 7.95675 83.0511 7.685 77.0231 5.27423L75.4924 4.66204C69.6201 2.31354 63.0639 2.34481 57.2143 4.74923L54.2822 5.95446C49.5792 7.88758 44.2664 7.67008 39.7372 5.35901L38.6785 4.81881C34.0186 2.4411 28.4658 2.61502 23.9639 5.27968V5.27968C19.9893 7.6322 15.1634 8.05891 10.8377 6.4403L2 3.13333' stroke='%23EF4444' stroke-width='4' stroke-linecap='round'/%3e%3c/svg%3e ");
  background-repeat: repeat-x;
  background-position-y: bottom;
  position: absolute;
  bottom: -9px;
  left: 0;
  width: 100%;
  height: 10px;
}


</style>