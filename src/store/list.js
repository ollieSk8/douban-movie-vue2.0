/**
 * Created by XD on 2017/3/3.
 */
export default {
    state: {
        movies:[]
    },
    mutations: {
        mergeData (state,data) {
            state.movies=state.movies.concat(data);
        },
        clearMovies(state){
            state.movies=[];
        }
    },
    actions: {
        mergeData ({commit},data) {
            commit('mergeData',data)
        },
        clearMovies({commit}){
            commit('clearMovies')
        }
    },
    getters: {
        getMovies: state => {
            return state.movies;
        }
    }
};