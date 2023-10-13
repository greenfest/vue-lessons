<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Articles & News</h2>
      <p v-if="description" class="news__description">{{ description }}</p>
      <div class="news__cards">
        <div v-for="card in getThreeNews"
             :key="card.id"
             class="news__card">
          <div class="news__card-inner">
            <div class="news__card-img-wrapper">
              <img :src="require(`@/assets/${card.image}.jpg`)" alt="news1" class="news__card-img" />
              <div class="news__card-category">{{ card.category }}</div>
            </div>
            <h4 class="news__card-title">{{ card.title }}</h4>
            <div class="news__bottom-inner">
              <p class="news__card-date">{{ card.date }}</p>
              <router-link
                :to="`/blog-details/${card.id}`"

                class="news__card-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="news__pagination">
        <a href="#" class="news__pagination-item news__pagination-item--active"
          >01</a
        >
        <a href="#" class="news__pagination-item">02</a>
        <a href="#" class="news__pagination-item">03</a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle
              cx="26.5"
              cy="26"
              r="25.5"
              stroke="#CDA274"
              stroke-width="1.5"
            />
            <path
              d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: { description: String },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getNews: "getNews",
    }),
    getThreeNews() {
      return this.getNews.slice(0, 3);
    },
    getLink() {
      return (card) => {
        return `/blog-details/${card.id}`;
      };
    },
  },
};
</script>

<style scoped lang="scss">
.news {
  margin-top: 96px;
  &__title {
    color: $colorPrimary2;
    font-size: 50px;
    line-height: 125%;
    font-family: $dmSerif;
    letter-spacing: 1px;
    text-align: center;
  }
  &__description {
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    text-align: center;
    max-width: 812px;
    margin: 12px auto 0;
  }
  &__cards {
    display: flex;
    gap: 27px;
    margin: 52px auto 0;
    flex-wrap: wrap;
  }
  &__card {
    width: 382px;
    &-inner {
      border: 1px solid $colorPrimary3;
      border-radius: 62px;
      padding: 21px 21px 37px 21px;
      position: relative;
      height: calc(534px - 21px - 37px);
      &:hover {
        background-color: #f4f0ec;
      }
      &:hover svg circle {
        fill: #ffffff;
      }
    }
    &-img {
      border-radius: 45px 45px 0 0;
      object-fit: cover;
      object-position: bottom;
      &-wrapper {
        position: relative;
      }
    }
    &-category {
      position: absolute;
      width: 124px;
      height: 21px;
      left: 20px;
      bottom: 20px;
      border-radius: 8px 8px 8px 0;
      background: #ffffff;
      text-align: center;
      font-family: $Jost;
      font-size: 16px;
      padding: 10px 0;
    }
    &-title {
      font-family: $dmSerif;
      color: $colorPrimary2;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.5px;
      max-width: 289px;
      margin-top: 10px;
    }
    &-date {
      color: #4d5053;
      font-family: $Jost;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__bottom-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
  }
  &__pagination {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 51px;
    &-item {
      width: 52px;
      height: 52px;
      border: 1px solid #cda274;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: $colorPrimary2;
      font-family: $Jost;
      font-size: 16px;
      line-height: 50%;
      font-weight: 700;
      text-transform: capitalize;
      &--active {
        background-color: #f4f0ec;
        border: 1px solid #f4f0ec;
      }
    }
  }
}
</style>
