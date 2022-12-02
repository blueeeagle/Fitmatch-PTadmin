import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/views/LayoutView.vue'
import Page404View from '@/views/Page404View.vue'
import AthletesView from '@/views/AthletesView.vue'
import CoursesView from '@/views/CoursesView.vue'
import ExercisesView from '@/views/ExercisesView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'

import { getToken } from '@/services/user.service';

function isAuthenticated() {
  return  !!getToken();
}

function authGaurd(to, from, next) {
  if (isAuthenticated()) {
    next()
    return;
  } else {
    next('/login')
  }
}
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
        component: AthletesView,
        beforeEnter: authGaurd

      },
      {
        path: '/courses',
        name: 'courses',
        component: CoursesView,
        beforeEnter: authGaurd

      },
      {
        path: '/courses/:id',
        name: 'courses detail',
        component: CourseDetailView,
        beforeEnter: authGaurd

      },
      {
        path: '/exercises',
        name: 'exercises',
        component: ExercisesView,
        beforeEnter: authGaurd

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
