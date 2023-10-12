<template>
  <div class="project__card">
    <div class="project__card-inner">
      <div class="project__card-img-wrapper">
        <img :src="require(`@/assets/${card.image}.jpg`)" alt="news1" class="project__card-img" />
      </div>
      <div class="project__bottom-inner">
        <div class="project__bottom-left">
          <h4 class="project__card-title">{{ card.name }}</h4>
          <p class="project__card-subtitle">Decor / Artchitecture</p>
        </div>
        <router-link :to="/projects/" class="project__card-icon">
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
</template>

<script>
export default {
  props: {
    card: {},
  }
}
</script>

<style scoped lang="scss">
.project {
  &__card {
    width: 585px;
    &-title {
      font-family: $dmSerif;
      color: $colorPrimary2;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
    &-subtitle {
      margin-top: 10px;
      color: #4D5053;
      font-family: $Jost;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
  &__bottom {
    &-inner {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>