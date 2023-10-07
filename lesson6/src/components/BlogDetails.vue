<template>
  <div class="details">
    <h1 class="details__title">
      {{ newsItem.title }}
    </h1>
    <img :src="imageUrl" alt="Details" class="details__img" />
    <div class="details__date-wrapper">
      <div class="details__date">{{ newsItem.date }}</div>
      <div class="details__breadcrumbs">Interior / Home / Decore</div>
    </div>
    <div class="details__text">
      Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
      turpmaximus.posuere in.Contrary to popular belief.There are many
      variations of passages of Lorem Ipsum available, but the majority have
      suffered alteration in some form, by injecthumour, or randomised words
      which don't look even slightly believable.
    </div>
    <div class="details__text">
      Embarrassing hidden in the middle of text. All the Lorem Ipsum generators
      on the Internet tend to repeat predefined chunks as necessary.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      imageUrl: null,
    };
  },
  computed: {
    ...mapGetters(["getNews"]),
    newsItem() {
      const newsId = this.$route.params.id;
      const item = this.getNews.find((item) => {
        return item.id === Number(newsId);
      });
      return item || null;
    },
  },
  methods: {
    loadNewsImage() {
      if (this.newsItem) {
        const image = new Image();
        image.src = require(`@/assets/${this.newsItem.image}`);
        this.imageUrl = image.src;
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.loadNewsImage();
    next();
  },
  created() {
    this.loadNewsImage();
  },
};
</script>

<style scoped lang="scss">
.details {
  margin-top: 96px;
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__img {
    border-radius: 50px;
    margin-top: 21px;
    width: 750px;
  }
  &__date-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    color: #4d5053;
    font-family: $Jost;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__text {
    margin-top: 40px;
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>
