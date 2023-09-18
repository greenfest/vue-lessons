<template>
  <div class="top-app">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="flex items-center mt-2 justify-center">
     1. <va-button
          preset="secondary"
          border-color="primary"
          class="mr-2"
          @click="reverseText"
      >
        {{ reversedText }}
      </va-button>

      <va-list class="mt-4">
        <va-list-label> 2. Список элементов </va-list-label>

        <va-list-item
            v-for="(item, index) in list"
            :key="index"
            class="list__item"
            @click="removeFromList(index)"
        >
          <va-list-item-section>
            <va-list-item-label>
              {{ item }}
            </va-list-item-label>
          </va-list-item-section>
        </va-list-item>
      </va-list>
      <va-button
          preset="secondary"
          border-color="primary"
          class="mr-2 mt-2"
          @click="addToList"
      >
        Добавить
      </va-button>
    </div>
    <va-alert
        description="3. Нажмите на элемент списка для удаления!"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const reversedText = ref('⚡️ Перевернуть');
    const list = ref(["Элемент 1", "Элемент 2", "Элемент 3"])
    const reverseText = () => {
      reversedText.value = reversedText.value.split('').reverse().join('');
    };
    const addToList = () => {
      list.value.push("Новый элемент списка");
    }

    const removeFromList = (index) => {
      list.value.splice(index, 1);
    }

    return {
      reversedText,
      reverseText,
      list,
      addToList,
      removeFromList
    };
  }
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.top-app {
  display: flex;
  flex-direction: column;
  gap:30px;
  margin: 0 auto;
}
</style>