<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import { getTodo } from './api/api'
import './assets/css/common.css'
export default {
  name: 'app',
  components: {
    TodoList
  },
  mounted() {
    // getTodo()
    //   .then(res => {
    //     console.log(typeof res, res);
    //   });
  }
}
</script>

<style>

</style>
