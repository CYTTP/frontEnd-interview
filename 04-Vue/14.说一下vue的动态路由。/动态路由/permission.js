router.beforeEach((to, from, next) => {
    if (store.getters.token) { // 判断是否有token
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            // 判断当前用户是否已拉取完user_info信息
            if (store.getters.roles.length === 0) {
                store.dispatch('GetInfo').then(res => { // 拉取info
                    const roles = res.data.role;
                    // 把获取到的role传进去进行匹配，生成可以访问的路由
                    store.dispatch('GenerateRoutes', { roles }).then(() => {
                        // 动态添加可访问路由表（核心代码，没有它啥也干不了）
                        router.addRoutes(store.getters.addRouters)

                        // hack方法 确保addRoutes已完成
                        next({ ...to, replace: true })
                    })
                }).catch(err => {
                    console.log(err);
                });
            } else {
                next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next();
        } else {
            next('/login'); // 否则全部重定向到登录页
        }
    }
})