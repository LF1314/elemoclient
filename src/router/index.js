import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/goods'
    }, {
      path: '/seller',
      component: () =>
        import('@/components/seller/seller')

    },
    {
      path: '/goods',
      component: () =>
        import('@/components/goods/goods')

    },
    {
      path: '/ratings',
      component: () =>
        import('@/components/ratings/ratings')

    },
    {
      path: '/test',
      component: () =>
        import('@/components/test/senddata')

    }

  ]

})
