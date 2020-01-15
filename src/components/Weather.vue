
<template>
    <div class="weather">
        <header class="header">
            <div class="icon"></div>
            <div class="summary">
                <h1 class="temperature">{{this.$store.state.resortInfo.weather.temperature.max}}°F</h1>
                <h1 class="conditions">{{this.$store.state.resortInfo.weather.conditions}}</h1>
            </div>
        </header>
        <p class="report">{{this.$store.state.resortInfo.weather.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'Weather'
}
</script>

<style scoped lang="scss">

</style>