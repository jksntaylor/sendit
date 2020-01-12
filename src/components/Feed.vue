<template>
    <div class="feed">
        <h1 class="title">Recent Tweets</h1>
        <h2 class="username">@{{this.$store.state.resortInfo.twitter.user}}</h2>
        <article v-bind:key="index" v-for="(tweet, index) in this.$store.state.resortInfo.twitter.tweets" class="tweet">
            <span class="date">{{new Date(tweet.created_at).toLocaleDateString('en-US')}}</span>
            <p class="text">{{tweet.text}}</p>
            <img v-if="tweet.entities.media" v-bind:src="tweet.entities.media[0].media_url_https" v-bind:alt="tweet.text" class="media">
        </article>
    </div>
</template>

<script>
export default {
    name: 'Feed'
}
</script>

<style scoped lang="scss">

</style>