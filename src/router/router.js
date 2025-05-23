// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        redirect: "/login", // 🚀 默认跳转到登录页
    },
    {
        path: "/login",
        name: "登录",
        hidden: true,
        component: () => import("@/Views/LoginView.vue"),
    },
    {
        path: "/index",
        name: "首页",
        component: () => import("@/Views/IndexView.vue"),
        redirect: "/index/comic_out",
        children: [
            {
                path: "comic_out",
                name: "漫画生成",
                hidden: false,
                component: () => import("@/Views/COMICView.vue"),
            },
            {
                path: "plot_out",
                name: "剧情灵感",
                hidden: false,
                component: () => import("@/Views/PLOTView.vue"),
            },

        ],
    },

];

// 创建路由实例并传递 routes 配置
const router = createRouter({
    history: createWebHistory(), // 使用 history 模式
    routes, // 将 routes 数组传递给 Vue Router
});

export default router;