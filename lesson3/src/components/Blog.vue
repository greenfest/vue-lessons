<script setup>
defineProps({
      card: Object,
    }
)
</script>

<template>
  <div class="news__card">
    <div class="news__card-inner">
      <div class="news__card-img-wrapper"><img :src="card.image" alt="news1" class="news__card-img">
        <div class="news__card-category">{{ card.category }}</div>
      </div>
      <h4 class="news__card-title">{{ card.title }}</h4>
      <div class="news__bottom-inner">
        <p class="news__card-date">{{ card.date }}</p>
        <a href="#" class="news__card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/_fonts.scss';
@import '../scss/_variables.scss';

.news {
  &__card {
    width: 320px;
    &-inner {
      border: 1px solid $colorPrimary3;
      border-radius: 62px;
      padding: 21px 21px 37px 21px;
      position: relative;
      height: calc(454px - 21px - 37px);
      &:hover {
        background-color: #F4F0EC;
      }
      &:hover svg circle{
        fill: #ffffff;
      }
    }
    &-img {
      border-radius: 45px 45px 0 0;
      width: 275px;
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
      height: 80px;
    }
    &-date {
      color: #4D5053;
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