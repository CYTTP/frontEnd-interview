import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// constantRoutes  静态路由，主要是登录页、404页等不需要动态的路由
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    }
]

// asyncRoutes 动态路由
export const asyncRoutes = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true,
        name: 'Permission',
        meta: {
            title: 'Permission',
            icon: 'lock',
            // 核心代码，可以通过配的角色来进行遍历，从而是否展示
            // 这个意思就是admin、editor这两个角色，这个菜单是可以显示
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'page',
                component: () => import('@/views/permission/page'),
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    // 这个意思就是只有admin能展示
                    roles: ['admin']
                }
            }
        ]
    }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// 这个是重置路由用的，很有用，别看这么几行代码
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router