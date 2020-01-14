<template>
    <div class="lifts">
        <h1 class="title">Lifts</h1>
        <ul class="lifts">
            <li class="lift" v-bind:key="index"  v-for="(lift, name, index) in this.$store.state.resortInfo.lifts.status">
                <h2 class="name">{{name}}</h2>
                <!-- <b-icon-check v-if="lift==='open'" class="open"></b-icon-check>
                <b-icon-x v-else-if="lift==='closed'" class="closed"></b-icon-x>
                <b-icon-clock v-else class="scheduled"></b-icon-clock> -->
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