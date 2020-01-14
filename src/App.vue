<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  background-position: top center;
}
</style>
