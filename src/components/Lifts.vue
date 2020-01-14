<template>
    <div class="lifts">
        <h1 class="title">Lifts</h1>
        <ul class="lifts">
            <li class="lift" v-bind:key="index"  v-for="(lift, name, index) in this.$store.state.resortInfo.lifts.status">
                <h2 class="name">{{name}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Lifts'
}
</script>

<style scoped lang="scss">

</style>