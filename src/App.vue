<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Home />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Home/Todo'
export default {
  name: 'app', 
  components: {
    HelloWorld,
    Todo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 