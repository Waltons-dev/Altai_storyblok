<script setup lang="js">
import {useHead} from "@unhead/vue";
import Home from "./components/pages/Article.vue"
import Calendar from "./components/Storyblok/components/Calendar.vue";

useHead({
  "link": [
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
      <div class="article_Page _container">
        <Home />
        <Calendar></Calendar>

      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style lang="scss">
@font-face {
  font-family: 'SoyuzGroteskBold';
  font-style: normal;
  font-weight: bold;
  src: local('SoyuzGroteskBold'),
  url('fonts/SoyuzGroteskBold.woff2') format('woff2'),
  url('fonts/Soyuz Grotesk Bold.woff') format('woff'),
  url('fonts/Soyuz Grotesk Bold.otf') format('otf')
}


@font-face {
  font-family: 'Formular';
  src: url('fonts/Formular-Italic.eot');
  src: local('Formular Italic'), local('Formular-Italic'),
  url('fonts/Formular-Italic.eot?#iefix') format('embedded-opentype'),
  url('fonts/Formular-Italic.woff2') format('woff2'),
  url('fonts/Formular-Italic.woff') format('woff'),
  url('fonts/Formular-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Formular';
  src: url('fonts/Formular-Light.eot');
  src: local('Formular Light'), local('Formular-Light'),
  url('fonts/Formular-Light.eot?#iefix') format('embedded-opentype'),
  url('fonts/Formular-Light.woff2') format('woff2'),
  url('fonts/Formular-Light.woff') format('woff'),
  url('fonts/Formular-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Formular';
  src: url('fonts/Formular.eot');
  src: local('Formular'),
  url('fonts/Formular.eot?#iefix') format('embedded-opentype'),
  url('fonts/Formular.woff2') format('woff2'),
  url('fonts/Formular.woff') format('woff'),
  url('fonts/Formular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Formular';
  src: url('fonts/Formular-Medium.eot');
  src: local('Formular Medium'), local('Formular-Medium'),
  url('fonts/Formular-Medium.eot?#iefix') format('embedded-opentype'),
  url('fonts/Formular-Medium.woff2') format('woff2'),
  url('fonts/Formular-Medium.woff') format('woff'),
  url('fonts/Formular-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Formular';
  src: url('fonts/Formular-Bold.eot');
  src: local('Formular Bold'), local('Formular-Bold'),
  url('fonts/Formular-Bold.eot?#iefix') format('embedded-opentype'),
  url('fonts/Formular-Bold.woff2') format('woff2'),
  url('fonts/Formular-Bold.woff') format('woff'),
  url('fonts/Formular-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}


._container{
  max-width: 1448px;
  margin: 0 auto;
  padding: 0 15px;
}
* {
  border: 0;
  box-sizing: border-box;
  font-family:  "Formular",sans-serif;
  font-weight: 500;
}


</style>
