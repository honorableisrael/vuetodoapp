<template>
  <div id="app">
    <!-- <TodoList msg=""/> -->
    <Home />
  </div>
</template>

<script>
import Home from './components/Home/Home';

export default {
  name: 'app', 
  components: {
    Home
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
}
</style>
 