import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import {createHead} from "@unhead/vue";
import Headline from "./components/Storyblok/partials/Headline.vue";
import App from './App.vue'
import Page from "./components/Storyblok/sections/Page.vue";
import Textarea from "./components/Storyblok/partials/Textarea.vue";
import Article_Tags from "./components/Storyblok/components/Article_Tags.vue";
import Article_Text_Img from "./components/Storyblok/components/Article_Text_Img.vue";
import Article_Info from "./components/Storyblok/components/Article_Info.vue";
import Article_HeroActivities from "./components/Storyblok/components/Article_HeroActivities.vue";
import Article_Hero from "./components/Storyblok/sections/Article_Hero.vue";
import Article_Body from "./components/Storyblok/sections/Article_Body.vue";
import Article_Image from "./components/Storyblok/partials/Article_Image.vue";
import Button from "./components/Storyblok/partials/Button.vue";
import Article_body_heading from "./components/Storyblok/partials/Article_body_heading.vue";
import Article_RightText_Img from "./components/Storyblok/components/Article_RightText_Img.vue";
import Article_body_FormularHeading from "./components/Storyblok/partials/Article_body_FormularHeading.vue";



const app = createApp(App)
const head = createHead()
app.use(StoryblokVue, {
    accessToken: "PPIVLXyBpeVNfubBJM981Att",
    bridge: import.meta.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
});
app.component("Headline", Headline);
app.component("Article_Hero", Article_Hero);
app.component("Article_Body", Article_Body);
app.component("Page", Page);
app.component("Textarea", Textarea);
app.component("Article_Tags", Article_Tags);
app.component("Article_Text_Img", Article_Text_Img);
app.component("Article_Info", Article_Info);
app.component("Article_HeroActivities", Article_HeroActivities);
app.component("Button", Button);
app.component("Article_Image", Article_Image);
app.component("Article_body_heading",Article_body_heading)
app.component("Article_RightText_Img",Article_RightText_Img)
app.component("Article_body_FormularHeading",Article_body_FormularHeading)

app.use(head).mount("#app");