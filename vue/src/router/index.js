import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
     {
       path: '/listaDeTareas',
       name: 'Lista de tareas',
       component: () => import('../components/NotificationForm.vue'),
     },
  ],
})

export default router
