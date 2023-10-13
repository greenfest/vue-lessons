<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Heading from "@/components/Heading.vue";

export default {
  name: "NotFoundView",
  components: {Heading, Footer, Navbar}
}
</script>

<template>
  <div>
    <Navbar />
    <Heading image="top-news.jpg" title="Not Found" />
    <div class="not-found">
      <h1 class="not-found__title">
        404
      </h1>
      <h2 class="not-found__subtitle">
        The requested path could not be found <br>
        You can go to <router-link class="not-found__link" :to="{ name: 'Home' }">Home Page</router-link>
      </h2>

    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.not-found {
  text-align: center;
  margin-bottom: 100px;
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 200px;
    line-height: 125%;
  }
  &__subtitle {
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__link {
    color: $colorPrimary2;
  }
}
</style>