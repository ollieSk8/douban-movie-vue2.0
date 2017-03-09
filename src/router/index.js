import Vue from 'vue'
import Router from 'vue-router'
const index= resolve => {
    require.ensure(['../view/index.vue'], () => {
        resolve(require('../view/index.vue'))
    })
}
const list= resolve => {
    require.ensure(['../view/list.vue'], () => {
        resolve(require('../view/list.vue'))
    })
}
const moviedetail= resolve => {
    require.ensure(['../view/movieDetail.vue'], () => {
        resolve(require('../view/movieDetail.vue'))
    })
}
Vue.use(Router)
///moviedetail/:id
export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list/:pageType',
      name: 'list',
      component: list
    },
    {
        path: '/moviedetail/:id',
        name: 'moviedetail',
        component: moviedetail
    }
  ]
})
