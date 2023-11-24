1.缓存所有页面
在 App.vue 里面
<template>
<div id="app">
	<keep-alive>
    <router-view/>
  </keep-alive>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

2.根据条件缓存页面
在 App.vue 里面
<template>
  <div id="app">
      // 1. 将缓存 name 为 test 的组件
      <keep-alive include='test'>
      <router-view/>
    </keep-alive>
    
    // 2. 将缓存 name 为 a 或者 b 的组件，结合动态组件使用
    <keep-alive include='a,b'>
        <router-view/>
    </keep-alive>
    
    // 3. 使用正则表达式，需使用 v-bind
    <keep-alive :include='/a|b/'>
        <router-view/>
    </keep-alive>	
    
    // 5.动态判断
    <keep-alive :include='includedComponents'>
        <router-view/>
    </keep-alive>
    
    // 5. 将不缓存 name 为 test 的组件
    <keep-alive exclude='test'>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

3.结合Router，缓存部分页面
在 router 目录下的 index.js 文件里import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/components/home/home'], resolve)
const Goods = resolve => require(['@/components/home/goods'], resolve)
const Ratings = resolve => require(['@/components/home/ratings'], resolve)
const Seller = resolve => require(['@/components/home/seller'], resolve)

Vue.use(Router)

export default new Router({
mode: 'history',
routes: [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'goods',
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: Goods,
        meta: {
      	keepAlive: false // 不需要缓存
    	  }
      },
      {
        path: 'ratings',
        name: 'ratings',
        component: Ratings,
        meta: {
      	keepAlive: true  // 需要缓存
    	  }
      },
      {
        path: 'seller',
        name: 'seller',
        component: Seller,
        meta: {
      	keepAlive: true  // 需要缓存
    	  }
      }
    ]
  }
]
})

在 App.vue 里面
<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>