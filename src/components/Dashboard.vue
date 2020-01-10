<template>
    <!-- rendered if cookie needs user data -->
    <div class="onboarding" v-if="this.$store.state.onboard">
        <h1 class="welcome">Welcome to SendIT</h1>
        <h2>We just need a tiny bit of information</h2>
        <div class="name-container">
            <h3 class="name-label">Name</h3>
            <input v-model="name" class="name-input" v-bind:class="{ missing: noName }"/>
        </div>
        <div class="resort-container">
            <h3 class="resort-label">Resort</h3>
            <select v-model="resort " class="resort-input" v-bind:class="{ missing: noResort }">
                <option value=""/>
                <option value="Alta">Alta</option>
                <option value="Snowbird">Snowbird</option>
                <option value="Brighton">Brighton</option>
                <option value="Solitude">Solitude</option>
            </select>
        </div>
        <button @click="submit" class="submit-button">SEND IT</button>
        <button @click="clearCookie" class="clearCookie">Clear Cookie (DEV ONLY)</button>
    </div>
    <!-- rendered if cookie has user data -->
    <div v-else class="dashboard">
        <header>
            <h1>Good Morning, {{name}}</h1>
            <h2 class="time">It is {{time}} on {{date}}</h2>
            <Location/>
        </header>
        <section class="left">
            <Weather/>
            <Webcams/>
        </section>
        <Feed/>
        <Lifts/>
        
    </div>
</template>

<script>
import Lifts from "./Lifts.vue";
import Location from "./Location.vue";
import Weather from "./Weather.vue";
import Webcams from "./Webcams.vue";
import Feed from './Feed.vue';

export default {
    name: 'Dashboard',
    data() {
        return {
            name: this.$cookie.get('name') || '', // if the cookie doesn't exist, it should set it to "" instead of undefined
            resort: this.$cookie.get('resort') || '',
            time: new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"}), // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
            date: new Date().toLocaleDateString([], {weekday: "long", month: "long", day: "numeric", year:"numeric"}),
            noResort: false,
            noName: false
        }
    },
    mounted: function () {
        // Sets the cookies to data when the component is mounted
        this.$data.onboard = this.$store.state.hasData;
        this.$data.name = this.$cookie.get('name');
        this.$data.resort = this.$cookie.get('resort');
    },
    components: {
        Lifts,
        Location,
        Weather,
        Webcams,
        Feed
    },
    methods: {
        submit() {
            let {name, resort, noResort, noName} = this.$data;
            noResort = resort ? false : true; // checking to see if the input is truthy
            noName = name ? false : true;

            if (name&&resort) { // if both are truthy, it sets cookies that expire in 5 years, might be overkill but whatever
                this.$cookie.set('name', name, {expires: '5Y'});
                this.$cookie.set('resort', resort, {expires: '5Y'});
                this.$store.commit('update', {name: name, resort: resort, onboard: false})
            }
        },
        clearCookie() { // ONLY FOR DEV, DELETE IN PRODUCTION
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