<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        getmsg(s) {
            this.msg = s;
        }
    }
}
</script>