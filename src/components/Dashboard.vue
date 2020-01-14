<template>
    <!-- rendered if cookie needs user data -->
    <div class="onboarding" v-if="this.$store.state.onboard">
        <h1 class="welcome">Welcome to SendIT</h1>
        <h2 class="explanation">We just need a tiny bit of information</h2>
        <div class="name-container">
            <h3 class="name-label">Name</h3>
            <input v-model="name" class="name-input" v-bind:class="{ missing: noName }"/>
        </div>
        <div class="resort-container">
            <h3 class="resort-label">Resort</h3>
            <select v-model="resort " class="resort-input" v-bind:class="{ missing: noResort }">
                
            </select>
        </div>
        <button @click="submit" class="submit-button">SEND IT</button>
    </div>
    <!-- rendered if cookie has user data -->
    <div v-else class="dashboard">
        <header>
            <h1>Good Morning, {{name}}</h1>
            <h2 class="time">It is {{time}} on {{date}}</h2>
            <Location @update="changeResort"/>
        </header>
        <div class="info" v-if="api">
            <section class="left">
                <Weather/>
                <Webcams/>
            </section>
            <Feed/>
            <Lifts/>
            <button @click="clearCookie" class="clearCookie">Clear Cookie (DEV ONLY)</button>
        </div>
        <div v-else class="skeleton"> <!-- CHANGE LATER TO HAVE SKELETON LOADERS -->
            <section class="left">
                <div>Weather</div>
                <div>Webcams</div>
            </section>
            <div>TwitterFeed</div>
            <div>Lift Status</div>
            <button @click="clearCookie" class="clearCookie">Clear Cookie (DEV ONLY)</button>
        </div>
    </div>
</template>

<script>
import Lifts from "./Lifts.vue";
import Location from "./Location.vue";
import Weather from "./Weather.vue";
import Webcams from "./Webcams.vue";
import Feed from './Feed.vue';
import axios from 'axios';

export default {
    name: 'Dashboard',
    data() {
        return {
            name: this.$cookie.get('name') || '', // if the cookie doesn't exist, it should set it to "" instead of undefined
            resort: this.$cookie.get('resort') || '',
            time: new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"}), // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
            date: new Date().toLocaleDateString([], {weekday: "long", month: "long", day: "numeric", year:"numeric"}),
            noResort: false,
            noName: false,
            api: false
        }
    },
    mounted: function () {
        if (this.$data.name&&this.$data.resort) {
            this.$store.commit('hasCookie');
            this.getInfo();
        }
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
                this.$store.commit('submitOnboard', {name: name, resort: resort})
                this.getInfo();
            }
        },
        getInfo() {
            axios.get(`https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/${this.$data.resort}`).then(res => {
                this.$store.commit('resortInfo', res.data);
                this.$data.api = true;
            })
        },
        changeResort() {
            this.$data.resort = this.$cookie.get('resort');
            this.getInfo();
        }
    }
}
</script>

<style scoped lang="scss">
    .onboarding {
    //    width: 700px;
    //    height: 450px;
       background-color: rgba(70, 115, 136, .6);
       border-radius: 20px;
       padding: 50px;
       color: white;

       .welcome {
           font-size: 60px;
           font-weight: 900;
       }

       .explanation {
           font-size: 32px;
           font-weight: 200;
       }

       .name-container, .resort-container {
           display: flex;
           width: 70%;
           justify-content: space-between;
           margin-left: 15%;
           margin-top: 20px;

           .name-label, .resort-label {
               width: 30%;
               text-align: right;
               margin: 0;
           }

           .name-input, .resort-input {
               width: 60%;
               background: none;
               border: none;
               outline: none;
               color: white;
               font-size: 28px;
               border-bottom: 1px solid white;
               border-radius: 0;
           }
       }
    }
</style>