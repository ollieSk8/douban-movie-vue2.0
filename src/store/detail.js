/**
 * Created by XD on 2017/3/13.
 */
export default {
    state: {
        movie:{}
    },
    mutations: {
        mergeDeatil (state,data) {
            state.movie=data;
        },
        clearDeatil(state,data) {
            state.movie={};
        }
    },
    actions: {
        mergeDeatil ({commit},data) {
            commit('mergeDeatil',data)
        },
        clearDeatil({commit}) {
            commit('clearDeatil')
        }
    },
    getters: {
        movie: state => {
            return state.movie;
        },
        getMeta: state => {
            var cast = state.movie.casts.reduce((name,value)=>{
                return name ? name +' / '+ value.name : value.name;
            }, '');
            return state.movie.countries.join(' / ') + ' / '+state.movie.genres.join(' / ') + ' / '+state.movie.directors[0].name +'(导演) / ' + cast;
        }
    }
};