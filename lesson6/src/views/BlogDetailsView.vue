<template>
  <div>
    <Navbar></Navbar>
    <Heading :image="`top-news-post.jpg`"></Heading>
    <div class="container">
      <div class="grid-container">
        <div class="grid-left">
          <BlogDetails></BlogDetails>
          <BlogsList></BlogsList>
        </div>
        <div class="grid-right">
          <Tags></Tags>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Heading from "../components/Heading.vue";
import Footer from "../components/Footer.vue";
import BlogsList from "../components/BlogsList.vue";
import BlogDetails from "../components/BlogDetails.vue";
import Tags from "../components/Tags.vue";

export default {
  components: {
    Navbar,
    Heading,
    Footer,
    BlogsList,
    BlogDetails,
    Tags,
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr;
  gap: 50px;
  grid-template-areas: ". .";
}
</style>
