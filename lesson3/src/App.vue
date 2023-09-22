<script setup>
import Navbar from "./components/Navbar.vue";
import Heading from "./components/Heading.vue";
import Latest from "./components/Latest.vue";
import News from "./components/News.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navbar />
  <Heading image="top-news-post.jpg" />
  <div class="grid-container">
    <div class="grid-left"></div>
    <div class="grid-right"></div>
  </div>
  <Latest />
  <News />
  <Footer />
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas:
    ". .";
}
</style>
