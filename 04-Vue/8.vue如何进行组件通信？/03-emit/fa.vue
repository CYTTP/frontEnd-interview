<template>
    <div class="item">
        <TodoItem @getMsg="showMsg"></TodoItem>
        {{ title }}
    </div>
</template>
<script>
import TodoItem from "so.vue";
export default {
    components: {
        TodoItem
    },
    data() {
        return {
            title: ''
        }
    },
    methods: {
        showMsg(title) {
            this.title = title;
        }
    }
}
</script>

<style scoped>
.item {
    margin: 20px auto 20px 20px;
}
</style>