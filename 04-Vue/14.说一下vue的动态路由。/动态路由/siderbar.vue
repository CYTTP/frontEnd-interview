<template>
    <div>
        <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
            :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText"
            :collapse-transition="false" mode="vertical">
            // 把取到的路由进行循环作为参数传给子组件
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
    </div>
</template>

<script>
// 获取有权限的路由
routes() {
    return this.$router.options.routes
}
</script>