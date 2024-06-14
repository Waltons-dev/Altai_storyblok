import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import {createHead} from "@unhead/vue";
import Headline from "./components/Storyblok/partials/Headline.vue";
import App from './App.vue'
import Page from "./components/Storyblok/sections/Page.vue";
import Grid from "./components/Storyblok/sections/Grid.vue";
import Feature from "./components/Storyblok/components/Feature.vue";

const app = createApp(App)
const head = createHead()
app.use(StoryblokVue, {
    accessToken: "PPIVLXyBpeVNfubBJM981Att",
    bridge: import.meta.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
});
app.component("Headline", Headline);
app.component("Grid", Grid);
app.component("Page", Page);

app.component("Feature", Feature);

app.use(head).mount("#app");