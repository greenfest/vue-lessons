<template>
  <div id="app">
    <Navbar />
    <ProductDetails />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import ProductDetails from "./components/ProductDetails.vue";
export default {
  name: "App",
  components: {
    Navbar,
    ProductDetails,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
