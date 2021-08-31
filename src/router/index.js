import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import PetList from "../views/PetList";
import CreatePet from "../views/CreatePet";

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/petList',
      name: 'petList',
      component: PetList
    },
    {
      path: '/createPet',
      name: 'createPet',
      component: CreatePet
    }
  ]
})
