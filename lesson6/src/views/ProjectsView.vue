<template>
    <div>
      <Navbar />
      <Heading image="top-news-project.jpg" title="Our Project"/>
      <Project />
      <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Heading from "@/components/Heading.vue";
import Project from "@/components/Project.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Heading,
    Project,
    Footer,
  },
  data() {
    return {

    }
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">

</style>
