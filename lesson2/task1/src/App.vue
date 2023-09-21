<script setup>
import Navbar from "./components/Navbar.vue";
import Heading from "./components/Heading.vue";
import Latest from "./components/Latest.vue";
import News from "./components/News.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navbar />
  <Heading image="top-news.jpg" title="Articles & News" />
  <Latest />
  <News />
  <Footer />
</template>

<style scoped>

</style>
