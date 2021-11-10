import { createRouter, createWebHistory } from 'vue-router';
import list from '../components/list/list.vue';
import NotFound from '../components/NotFound.vue';
import LoginBox from '../components/login/LoginBox.vue';
import userdata from '../components/userdata/userdata.vue';

const router = createRouter({ 
  history: createWebHistory(), 
  routes: [
    {
        path: "/list",
        component: list,
    },
    {
        path: "/",
        redirect: "/list",
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: '/userdata',
        component: userdata
    },
    {
        path: '/login', 
        component: LoginBox,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem("token"); 
            if (token) 
              next('/list');
            else 
              next();
          }
    },
  ],
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (!token && to.path !== '/login') 
      next('/login'); 
    else 
      next();
  });

export default router;