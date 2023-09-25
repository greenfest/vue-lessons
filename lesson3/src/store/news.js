const state = {
    news: [
        {
            id: 1,
            title: "Let’s Get Solution For Building Construction Work",
            category: "Kitchan Design",
            image: "src/assets/news1.jpg",
            date: "26 December,2022 "
        },
        {
            id: 2,
            title: "Low Cost Latest Invented Interior Designing\n" +
                "Ideas.",
            category: "Living Design",
            image: "src/assets/news2.jpg",
            date: "22 December,2022 "
        },
        {
            id: 3,
            title: "Best For Any Office & Business Interior \n" +
                "Solution",
            category: "Interior Design",
            image: "src/assets/news3.jpg",
            date: "25 December,2022 "
        },
        {
            id: 4,
            title: "Let’s Get Solution For Building Construction Work",
            category: "Kitchan Design",
            image: "src/assets/news4.jpg",
            date: "26 December,2022 "
        },
        {
            id: 5,
            title: "Low Cost Latest Invented Interior Designing\n" +
                "Ideas.",
            category: "Living Design",
            image: "src/assets/news5.jpg",
            date: "22 December,2022 "
        },
        {
            id: 6,
            title: "Best For Any Office & Business Interior \n" +
                "Solution",
            category: "Interior Design",
            image: "src/assets/news6.jpg",
            date: "25 December,2022 "
        },
    ]
};

const mutations = {
    ADD_NEWS(state, newNews) {
        state.news.push(newNews);
    },
    DELETE_NEWS(state, index) {
        state.news.splice(index, 1);
    }
};

const actions = {
    addNews({ commit }, newNews) {
        commit('ADD_NEWS', newNews);
    },
    deleteNews({ commit }, index) {
        commit('DELETE_NEWS', index);
    }
};

const getters = {
    getNews(state) {
        return state.news;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};