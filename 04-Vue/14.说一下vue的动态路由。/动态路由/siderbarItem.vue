<template slot="title">
    <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
</template>
        <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child"
            :base-path="resolvePath(child.path)" class="nest-menu" />

props: {
    // route object
    item: {
        type: Object,
            required: true
    },
    isNest: {
        type: Boolean,
      default: false
    },
    basePath: {
        type: String,
      default: ''
    }
}