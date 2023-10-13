const state = {
    projects: [
        {
            id: 1,
            name: "Minimal Bedroom",
            image: "project-1",
            category: "Bed Room",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo."
        },
        {
            id: 2,
            name: "Classic Minimal Bedroom",
            image: "project-2",
            category: "Bed Room",
            info: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
        },
        {
            id: 3,
            name: "Minimal Bedroom table",
            image: "project-3",
            category: "Bed Room",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "
        },
        {
            id: 4,
            name: "Modern Medroom",
            image: "project-4",
            category: "Bathroom",
            info: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
        },
        {
            id: 5,
            name: "Minimal Bedroom",
            image: "project-5",
            category: "Kitchen",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "
        },
        {
            id: 6,
            name: "Modern Bedroom",
            image: "project-6",
            category: "Kitchen",
            info: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
        },
        {
            id: 7,
            name: "System Table",
            image: "project-7",
            category: "Living Area",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "
        },
        {
            id: 8,
            name: "Modern Bedroom",
            image: "project-8",
            category: "Living Area",
            info: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
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
