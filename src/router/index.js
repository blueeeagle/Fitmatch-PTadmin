import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/views/LayoutView.vue'
import Page404View from '@/views/Page404View.vue'
import AthletesView from '@/views/AthletesView.vue'
import CoursesView from '@/views/CoursesView.vue'
import ExercisesView from '@/views/ExercisesView.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: LayoutView,
    redirect: '/athletes',
    children: [
      {
        path: '/athletes',
        name: 'athletes',
        component: AthletesView
      },
      {
        path: '/courses',
        name: 'courses',
        component: CoursesView
      },
      {
        path: '/exercises',
        name: 'exercises',
        component: ExercisesView
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/404',
    name: '404',
    component: Page404View
  },

  { path: "/:catchAll(.*)", redirect: '/404' }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
