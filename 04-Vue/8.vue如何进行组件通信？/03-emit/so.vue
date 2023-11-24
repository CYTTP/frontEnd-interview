<template>
    <div>
        <p>子组件</p>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$emit('getMsg', '我从子组件过来的')
    }
}
</script>