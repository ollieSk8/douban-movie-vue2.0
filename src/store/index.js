/**
 * Created by XD on 2017/3/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import list from './list'
import detail from './detail'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        list:list,
        detail:detail
    }
})