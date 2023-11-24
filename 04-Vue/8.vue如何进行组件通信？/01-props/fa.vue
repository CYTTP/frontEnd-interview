<template>
    <div class="so">
        <TodoItem :msg="a + b"></TodoItem>
        <TodoItem v-bind:msg="msg"></TodoItem>
    </div>
</template>
<script>
import TodoItem from "so";
export default {
    components: {
        TodoItem
    },
    data() {
        return {
            a: '我是组件1',
            b: '我是组件2',
            msg: '我是组件' + Math.random()
        }
    }
}
</script>

<style scoped>
.so {
    margin: 20px auto 20px 20px;
}
</style>