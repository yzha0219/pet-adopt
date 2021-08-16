import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import PetList from "../views/PetList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "home",
      component: PetList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pet-list',
      name: 'per-list',
      component: PetList
    }
  ]
})
