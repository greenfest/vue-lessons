import { createStore } from 'vuex';
import news from './news';
import tags from "./tags";

export default createStore({
    modules: {
        news,
        tags,
    },
});