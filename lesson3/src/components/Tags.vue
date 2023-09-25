<script setup>
import { useStore } from "vuex";
import {computed} from "vue";

const store = useStore();
const tagList = computed(() => store.getters['tags/getTags']);
const activeTag = computed(() => store.getters['tags/getActiveTag']);
function editTag(tagName) {
  store.dispatch("tags/editTag", tagName);
}
</script>

<template>
<div class="tags">
  <h3 class="tags__title">Tags</h3>
  <button v-for="tag in tagList" :key="tag.id" v-on:click="editTag(tag.name)" :class="{'tags__item': true, 'tags__item--active': tag.name === activeTag}">{{ tag.name }}</button>
</div>
</template>

<style scoped lang="scss">
@import '../scss/_fonts.scss';
@import '../scss/_variables.scss';

.tags {
  position: sticky;
  top: 20px;
  margin-top: 96px;
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }
  &__item {
    border-radius: 10px;
    background: #F4F0EC;
    color: $colorPrimary2;
    text-align: center;
    font-family: $Jost;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border: 0;
    margin: 0 10px 11px 0;
    &--active {
      background: $colorPrimary2;
      color: #FFF;
    }
  }
}
</style>