<template>
    <div class="item">
        <TodoItem ref="msg"></TodoItem>
        <p ref="dom"></p>
    </div>
</template>
<script>
import TodoItem from "./components/TodoItem.vue";
export default {
    components: {
        TodoItem
    },
    mounted() {
        console.log(this.$refs)
        this.$refs.msg.getmsg("我是fw");
        this.$refs.dom.innerHTML = "我是普通元素哦";
    }
}
</script>

<style scoped>
.item {
    margin: 20px auto 20px 20px;
}
</style>