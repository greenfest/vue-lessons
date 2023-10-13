<template>
  <div class="project-details">
    <Navbar />
    <Heading image="top-news-project-details.jpg" />
    <div class="container">
      <div class="project-details__info">
        <h1 class="project-details__title">{{ project.name }}</h1>
        <p class="project-details__text">{{ project.info }}</p>
      </div>
      <agile class="agile-carousel" :dotClass="'dot-agile'" :options="options">
        <div class="slide">
          <img :style="{ borderRadius: '70px' }" src="@/assets/project-details-photo.jpg" alt="Project Photo">
        </div>
        <div class="slide">
          <img :style="{ borderRadius: '70px', width: '1200px', height: '800px' }" :src="require(`@/assets/${project.image}.jpg`)" alt="Project Photo">
        </div>
      </agile>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Heading from "@/components/Heading.vue";
import { VueAgile } from 'vue-agile'

export default {
  data() {
    return {
      project: {},
      options: {
        navButtons: false,
        autoplay: true,
      },
    }
  },
  components: {Heading, Footer, Navbar, agile: VueAgile},
  created() {
    const projects = this.$store.getters.getProjects;
    this.project = projects.filter(el => el.id === Number(this.$route.params.id))[0];
  }

}
</script>

<style scoped lang="scss">
.project-details {
  &__info {
    margin: 200px auto 0;
    max-width: 658px;
  }
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__text {
    margin-top: 20px;
    color: $colorPrimary4;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
.agile-carousel {
  margin-top: 100px;
}
.dot-agile {
  width: 20px;
  height: 20px;
}
</style>