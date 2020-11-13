import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../components/Login.vue'
import Project from '@/components/Project.vue'
import Cores from '../components/Cores.vue'
import Scourses from '../components/Scourses.vue'
import Students from '../components/Students.vue'
import Password from '@/components/Password.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/main/password',
        name: 'Password',
        component: Password
      },
      {
        path: '/main/project',
        name: 'Project',
        component: Project
      },
      {
        path: '/main/students',
        name: Students,
        component: Students
      },
      {
        path: '/main/cores',
        name: Cores,
        component: Cores
      },
      {
        path: '/main/scourses',
        name: Scourses,
        component: Scourses
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
