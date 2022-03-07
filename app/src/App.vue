<script setup>
import { ref } from "vue";
import axios from "axios";
let todolist = ref([]);
axios({
  method: "post",
  url: "todolist"
}).then(res => {
  todolist.value = res.data.list;
  // console.log(todolist);
});
</script>

<template>
  <div>
    <p v-for="todo in todolist" :key="todo.id">名称：{{todo.name}}</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
