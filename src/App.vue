<script setup lang="js">
import {useHead} from "@unhead/vue";
import Home from "./components/pages/Home.vue"

useHead({
  "link": [
    {
      "rel": "preconnect",
      "href": "https://fonts.googleapis.com",
    },
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "crossOrigin": "crossOrigin"
    },
    {
      "rel": "stylesheet",
      "href": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    },
    {
      "rel": "stylesheet",
      "href":"_normalize.scss"
    }
  ]
})


</script>

<template>
  <Suspense>
    <template #default>
      <div class="articlePage _container">
        <Home />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style lang="scss">
._container{
  max-width: 1448px;
  margin: 0 auto;
  padding: 0 15px;
}
* {
  border: 0;
  box-sizing: border-box;
  font-family:  "Lato", sans-serif;
}


</style>
