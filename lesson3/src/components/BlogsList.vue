<script setup>
import Blog from "./Blog.vue";
import { useStore } from "vuex";
import {computed} from "vue";

const store = useStore();
const activeTag = computed(() => store.getters['tags/getActiveTag']);
const newsList = computed(() => {
  const tag = activeTag.value;
  if (!tag || tag === "All News") return store.getters['news/getNews'];
  else return store.getters['news/getNews'].filter(news => news.category === tag);
});
</script>

<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Articles & News</h2>
      <div class="news__cards">
        <Blog v-for="card in newsList" :key="card.id" :card="card" class="news__card" />
      </div>
      <div class="news__pagination">
        <a href="#" class="news__pagination-item news__pagination-item--active">01</a>
        <a href="#" class="news__pagination-item">02</a>
        <a href="#" class="news__pagination-item">03</a>
        <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" stroke-width="1.5"/>
          <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../scss/_fonts.scss';
@import '../scss/_variables.scss';

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
    color: #4D5053;
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
      border: 1px solid #CDA274;
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
        background-color: #F4F0EC;
        border: 1px solid #F4F0EC;
      }
    }
  }
}
</style>