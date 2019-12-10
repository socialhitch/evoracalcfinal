<template>
  <div id="app">
    <img width=50% alt="Cartoon logo" src="./assets/dividing-amoeba.png">
    <Form/>
    <History v-if="$store.state.history.length"/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import History from './components/History.vue'

export default {
  name: 'app',
  components: {
    Form,
    History
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
