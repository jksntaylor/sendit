<template>
    <div class="cams">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="8000"
        indicators
        img-height="224px"
        img-width="400px"
        background="#ababab"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
            <b-carousel-slide v-bind:key="index" v-for="(item, index) in this.$store.state.resortInfo.webcams">
                <h1 class="name">{{item.name}}</h1>
                <a v-bind:href="item.source" class="webcam-link" target="_blank" rel="noopener noreferrer">
                    <img v-bind:src="item.image" v-bind:alt="item.name" class="webcam-still">
                </a>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'Webcams',
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style scoped lang="scss">
    .webcam-still {
        height: 112px;
        width: 200px;
    }
</style>