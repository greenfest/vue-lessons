<template>
  <div class="project__card">
    <div class="project__card-inner">
      <div class="project__card-img-wrapper">
        <img :src="require(`@/assets/${card.image}.jpg`)" alt="news1" class="project__card-img" />
        <div class="project__card-category">{{ card.category }}</div>
      </div>
      <h4 class="project__card-title">{{ card.title }}</h4>
      <div class="project__bottom-inner">
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

</style>