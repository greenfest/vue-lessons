<template>
  <div>
    <Navbar />
    <Heading image="top-news.jpg" title="Articles & News" />
    <Latest />
    <News />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Heading from "@/components/Heading.vue";
import Footer from "@/components/Footer.vue";
import Latest from "@/components/Latest.vue";
import News from "@/components/News.vue";

export default {
  components: {
    Latest,
    News,
    Navbar,
    Heading,
    Footer,
  },
};
</script>

<style scoped></style>
