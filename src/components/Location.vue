<template>
    <div class="location">
        <h1 class="my-resort">My Resort: {{resort}}</h1>
        <button @click="edit" class="change">change</button>
    </div>
</template>

<script>
export default {
    name: 'Location',
    data() {
        return {
            resort: this.$cookie.get('resort'),
            edit: false
        }
    },
    methods: {
        edit() {

        },
        cancel() {
            
        },
        confirm() {

        }
    }
}
</script>

<style scoped lang="scss">
    .my-resort {
        text-transform: capitalize;
    }
</style>