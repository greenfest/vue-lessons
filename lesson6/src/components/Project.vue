<template>
  <div class="project">
    <div class="project__filter">
      <button
          v-for="tag in tagList"
          v-on:click="editTag(tag)"
          :class="{
            'project__filter-item': true,
            'project__filter-item--active': tag === activeTag,
             }"
      >
        {{ tag }}
      </button>
    </div>
    <div class="container">
      <div class="project__cards">
        <ProjectItem
            v-for="card in projectsList"
            :key="card.id"
            :card="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";
import {mapGetters} from "vuex";
export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      tagList: ["Bathroom", "Bed Room", "Kitchen", "Living Area"],
      activeTag: "",
    }
  },
  methods: {
    editTag(tag) {
      this.activeTag = tag;
    }
  },
  computed: {
    ...mapGetters({
      getProjects: "getProjects",
    }),
    projectsList() {
      if (!this.activeTag) return this.getProjects;
      else return this.getProjects.filter((project) => project.category === this.activeTag);
    },
  },
}
</script>

<style scoped lang="scss">
.project {
  &__filter {
    margin: 200px auto 0;
    height: 75px;
    border: 1px solid #CDA274;
    border-radius: 18px;
    max-width: 880px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    &-item {
      width: 219px;
      height: 75px;
      border: 0;
      background-color: transparent;
      color: $colorPrimary2;
      font-family: $Jost;
      font-size: 18px;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 0.36px;
      &--active {
        color: #FFFFFF;
        background-color: #CDA274;
        border-radius: 17px;
      }
    }
  }
  &__cards {
    margin-top: 60px;
  }
}

</style>