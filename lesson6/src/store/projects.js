const state = {
    projects: [
        {
            id: 1,
            name: "Minimal Bedroom",
            image: "project-1",
            category: "Bed Room"
        },
        {
            id: 2,
            name: "Classic Minimal Bedroom",
            image: "project-2",
            category: "Bed Room"
        },
        {
            id: 3,
            name: "Minimal Bedroom table",
            image: "project-3",
            category: "Bed Room"
        },
        {
            id: 4,
            name: "Modern Medroom",
            image: "project-4",
            category: "Bathroom"
        },
        {
            id: 5,
            name: "Minimal Bedroom",
            image: "project-5",
            category: "Kitchen"
        },
        {
            id: 6,
            name: "Modern Bedroom",
            image: "project-6",
            category: "Kitchen"
        },
        {
            id: 7,
            name: "System Table",
            image: "project-7",
            category: "Living Area"
        },
        {
            id: 8,
            name: "Modern Bedroom",
            image: "project-8",
            category: "Living Area"
        },
    ],
};

const mutations = {
    ADD_PROJECT(state, newProject) {
        state.projects.push(newProject); // Исправлено с state.news на state.tagList
    },
    DELETE_PROJECT(state, index) {
        state.projects.splice(index, 1); // Исправлено с state.news на state.tagList
    },
};

const actions = {
    addProject({ commit }, newProject) {
        commit("ADD_PROJECT", newProject);
    },
    deleteProject({ commit }, index) {
        commit("DELETE_PROJECT", index);
    },
};

const getters = {
    getProjects(state) {
        return state.projects;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
