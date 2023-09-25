<script setup>

</script>

<template>
  <div class="details">
    <h1 class="details__title">Let’s Get Solution for Building
      Construction Work</h1>
    <img src="../assets/details.jpg" alt="Details" class="details__img">
    <div class="details__date-wrapper">
      <div class="details__date">26 December,2022 </div>
      <div class="details__breadcrumbs">Interior / Home / Decore</div>
    </div>
    <div class="details__text">
      Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
    </div>
    <div class="details__text">
      Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/_fonts.scss';
@import '../scss/_variables.scss';

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
  }
  &__date-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    color: #4D5053;
    font-family: $Jost;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__text {
    margin-top: 40px;
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>