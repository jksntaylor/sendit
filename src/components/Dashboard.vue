<template>
    <div class="dashboard">
        <h1>Good Morning, {{name}}</h1>
        <h2 class="time">It is {{time}} on {{date}}</h2>
        <Lifts/>
        <Location/>
        <Weather/>
        <Webcams/>
        <input v-model="name" class="name"/>
        <select v-model="resort " class="resort">
            <option value="Alta">Alta</option>
            <option value="Snowbird">Snowbird</option>
            <option value="Brighton">Brighton</option>
            <option value="Solitude">Solitude</option>
        </select>
        <button @click="submit" class="submit">SEND IT</button>
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
            name: this.$cookie.get('name'),
            resort: '',
            time: new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"}),
            date: new Date().toLocaleDateString([], {weekday: "long", month: "long", day: "numeric", year:"numeric"})
        }
    },
    mounted: function () {
        $data.name = this.$cookie.get('name');
        $data.resort = this.$cookie.get('resort');
        console.log(name, resort);
    },
    components: {
        Lifts,
        Location,
        Weather,
        Webcams
    },
    methods: {
        submit() {
            this.$cookie.set('name', this.$data.name, {expires: '5Y'});
            this.$cookie.set('resort', this.$data.resort, {expires: '5Y'});
        }
    }
}
</script>

<style scoped lang="scss">

</style>