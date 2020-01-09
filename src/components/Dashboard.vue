<template>
    <div class="dashboard">
        <h1>{{hello}}</h1>
        <Lifts/>
        <Location/>
        <Weather/>
        <Webcams/>
    </div>
</template>

<script>
import Lifts from "./Lifts.vue";
import Location from "./Location.vue";
import Weather from "./Weather.vue";
import Webcams from "./Webcams.vue";

export default {
    name: 'Dashboard',
    data() {
        return {
            hello: 'HelloDashboard'
        }
    },
    components: {
        Lifts,
        Location,
        Weather,
        Webcams
    }
}
</script>

<style scoped lang="scss">

</style>