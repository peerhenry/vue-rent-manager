import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VehicleDetails from './components/vehicle/VehicleDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('./components/vehicle/VehicleOverview.vue')
    },
    {
      path: '/vehicle/:id',
      name: 'vehicle',
      // component: VehicleDetails,
      component: () => import('./components/vehicle/VehicleDetails.vue'),
      props: true
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: () => import('./components/rental/RentalOverview.vue')
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: () => import('./components/reservation/ReservationOverview.vue')
    }
  ]
})
