
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
    .weather {
        background-color: rgba(70, 115, 136, .8);
        border-radius: 15px;
        padding: 20px;

        .header {
            display: flex;
        }

        .summary {
            display: flex;
            border-bottom: 2px solid white;
            line-height: 30px;
            padding-bottom: 10px;

            .conditions, .temperature {
                font-size: 28px;
                font-weight: 900;
            }
            .conditions {
                margin-left: 20px;
                text-align: right;
            }
        }

        .report {
            padding-top: 10px;
            font-weight: 300;
            text-align: left;
            margin: 0;
        }
    }
</style>