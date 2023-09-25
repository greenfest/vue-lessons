const state = {
  tagList: [
    {
      id: 1,
      name: "Kitchen",
    },
    {
      id: 2,
      name: "Living Design",
    },
    {
      id: 3,
      name: "Interior Design",
    },
    {
      id: 4,
      name: "Architecture",
    },
    {
      id: 5,
      name: "Kitchen Planning",
    },
    {
      id: 6,
      name: "Bedroom",
    },
    {
      id: 7,
      name: "All News",
    },
  ],
  activeTag: "",
};

const mutations = {
  ADD_TAG(state, newTag) {
    state.tagList.push(newTag); // Исправлено с state.news на state.tagList
  },
  DELETE_TAG(state, index) {
    state.tagList.splice(index, 1); // Исправлено с state.news на state.tagList
  },
  EDIT_TAG(state, tag) {
    state.activeTag = tag;
  },
};

const actions = {
  addTag({ commit }, newTag) {
    commit("ADD_TAG", newTag);
  },
  deleteTag({ commit }, index) {
    commit("DELETE_TAG", index);
  },
  editTag({ commit }, tag) {
    commit("EDIT_TAG", tag);
  },
};

const getters = {
  getTags(state) {
    return state.tagList;
  },
  getActiveTag(state) {
    return state.activeTag;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
