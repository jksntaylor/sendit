<template>
    <div class="cams">
        <v-carousel>
            <v-carousel-item v-bind:key="index" v-for="(slide, index) in this.$store.state.resortInfo.webcams">

            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: 'Webcams',
    data() {
        return {
            
        }
    },
    methods: {
       
    }
}
</script>

<style scoped lang="scss">
    .cams {
        flex-grow: 1;
        height: calc(100% - 300px);
    }
</style>