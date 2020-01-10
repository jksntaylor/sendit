<template>
    <div class="dashboard">
        <h1>Good Morning, {{name}}</h1>
        <h2 class="time">It is {{time}} on {{date}}</h2>
        <Lifts/>
        <Location/>
        <Weather/>
        <Webcams/>
        <input v-model="name" class="name" v-bind:class="{ missing: noName }"/>
        <select v-model="resort " class="resort" v-bind:class="{ missing: noResort }">
            <option value=""/>
            <option value="Alta">Alta</option>
            <option value="Snowbird">Snowbird</option>
            <option value="Brighton">Brighton</option>
            <option value="Solitude">Solitude</option>
        </select>
        <button @click="submit" class="submit">SEND IT</button>
        <button @click="clearCookie" class="clearCookie">Clear Cookie</button>
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
            name: this.$cookie.get('name') || '',
            resort: this.$cookie.get('resort') || '',
            time: new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"}),
            date: new Date().toLocaleDateString([], {weekday: "long", month: "long", day: "numeric", year:"numeric"}),
            noResort: false,
            noName: false
        }
    },
    mounted: function () {
        this.$data.name = this.$cookie.get('name');
        this.$data.resort = this.$cookie.get('resort');
    },
    components: {
        Lifts,
        Location,
        Weather,
        Webcams
    },
    methods: {
        submit() {
            this.$data.noResort = this.$data.resort ? false : true;
            this.$data.noName = this.$data.name ? false : true;

            if (this.$data.name&&this.$data.resort) {
                this.$cookie.set('name', this.$data.name, {expires: '5Y'});
                this.$cookie.set('resort', this.$data.resort, {expires: '5Y'});
            }
        },
        clearCookie() {
            this.$cookie.delete('name');
            this.$cookie.delete('resort');
        }
    }
}
</script>

<style scoped lang="scss">
    .missing {
        border: 2px solid red;
    }
</style>