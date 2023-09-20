<script setup>
import { computed, defineExpose } from "vue";

const props = defineProps({
  image: String,
  title: String,
});

const style = computed(() => {
  if (props.image) {
    return { background: `url(src/assets/${props.image}), lightgray 50% / cover no-repeat` };
  } else {
    return "";
  }
});

defineExpose({
  image: props.image,
  title: props.title,
  style,
});
</script>

<template>
  <div class="heading" :style="style">
    <div class="container">
      <div class="heading__inner">
        <div class="heading__block">
          <h1 class="heading__title">{{ title }}</h1>
          <p class="heading__breadcrumbs">Home / Blog</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/_fonts.scss';

$colorPrimary2: #292F36;
$dmSerif: 'DM Serif Display', serif;
$Jost: 'Jost', sans-serif;

.heading {
  height: 356px;
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
    background: #FFF;
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
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>