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
      <div class="project__pagination">
        <a href="#" class="project__pagination-item project__pagination-item--active"
        >01</a
        >
        <a href="#" class="project__pagination-item">02</a>
        <a href="#" class="project__pagination-item">03</a>
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 3250px;
    gap: 30px;
    align-items: center;
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