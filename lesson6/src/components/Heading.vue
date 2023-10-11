<template>
  <div class="heading" :style="style">
    <div class="container">
      <div v-if="title" class="heading__inner">
        <div class="heading__block">
          <h1 class="heading__title">{{ title }}</h1>
          <p class="heading__breadcrumbs">Home / {{ $route.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
  },
  data() {
    return {
      imageUrl: null,
    };
  },
  computed: {
    style() {
      if (this.imageUrl) {
        return {
          background: `url(${this.imageUrl}), lightgray 50% / cover no-repeat`,
        };
      } else {
        return "";
      }
    },
  },
  created() {
    const image = new Image();
    image.src = require(`@/assets/${this.image}`);
    this.imageUrl = image.src;
  },
};
</script>

<style scoped lang="scss">
//@import "../scss/fonts";
//@import "../scss/variables";

.heading {
  height: 350px;
  margin-top: 45px;
  &__inner {
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    height: 356px;
  }
  &__block {
    width: 347px;
    border-radius: 37px 37px 0 0;
    background: #fff;
    padding: 41px 78px;
    text-align: center;
  }
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 50px;
    line-height: 125%;
  }
  &__breadcrumbs {
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>
