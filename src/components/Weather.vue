
<template>
    <div v-if="weather.conditions" class="weather">
        <header class="header">
            <div class="icon"></div>
            <div class="title">
                <h1 class="temperature">{{weather.temperature.max}}°F</h1>
                <h1 class="conditions">{{weather.conditions}}</h1>
            </div>
        </header>
        <p class="summary">{{weather.text}}</p>
    </div>
    <div v-else class="lazy">

    </div>
</template>

<script>
export default {
    name: 'Weather',
    data() {
        return {
            weather: this.$store.state.resortInfo.weather
        }
    }
}
</script>

<style scoped lang="scss">

</style>