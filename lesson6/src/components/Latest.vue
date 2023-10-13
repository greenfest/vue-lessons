<template>
  <div class="container">
    <h2 class="latest__title">Latest Post</h2>
    <div class="latest__wrapper">
      <img
        src="../assets/latest-post.jpg"
        alt="Latest Post"
        class="latest__image"
      />
      <div class="latest__info">
        <p class="latest__subtitle">
          Low Cost Latest Invented Interior Designing Ideas
        </p>
        <p class="latest__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
          dignissim maximus.posuere in.Contrary to popular belief.
        </p>
        <p class="latest__text">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classica.
        </p>
        <div class="latest__inner">
          <p class="latest__date">26 December, 2022</p>
          <router-link :to="getPathToLastPost" class="latest__open"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
            >
              <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
              <path
                d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      getNews: "getNews",
    }),
    getPathToLastPost() {
      return `/blog-details/${this.getNews.length}`
    }
  }
}
</script>

<style lang="scss" scoped>


.latest {
  &__title {
    margin-top: 200px;
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__wrapper {
    padding: 20px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
    display: flex;
    gap: 60px;
    align-items: center;
    position: relative;
    margin-top: 30px;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__image {
    border-radius: 50px;
  }
  &__subtitle {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
    max-width: 469px;
  }
  &__text {
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-top: 22px;
    max-width: 469px;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }
  &__date {
    color: #4d5053;
    font-family: $Jost;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
  }
}
</style>
