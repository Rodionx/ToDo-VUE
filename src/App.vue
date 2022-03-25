<template>
  <div class="container">
    <div class="titulo">
      <img
        src="./assets/event_available_black_24dp.svg"
        class="titleItem"
        alt="logo"
      />
      <h1 class="titleItem">Basic To do list</h1>
    </div>
    <hr />
    <div class="tareas">
      <div class="tools">
        <input id="todo" v-model="todo" @keypress.enter="addTodo" />
        <button @click="addTodo">Insert</button>
        <button @click="deleteall">Reset</button>
      </div>
      <hr />
      <div class="datos">
        <ul>
          <li v-for="(t, index) in todos" :key="index">
            <span class="X" @click="deleteTodo(index)">X</span>
            {{ t }}
            <span class="fecha">f.inicio: {{ dateTime }}</span>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import useTodos from "./composables/useTodos";

export default {
  name: "App",

  setup() {
    const { todo, todos, addTodo, deleteTodo, dateTime, deleteall } =
      useTodos();
    return { todo, todos, addTodo, deleteTodo, dateTime, deleteall };
  },
};
</script>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e7d5ff;
}

ul {
  list-style: none;
  margin-right: 4%;
}

.container {
  margin-right: 1%;
  margin-left: 1%;
  background-color: #f5f5f5;
  border-radius: 10px;
  min-height: 520px;
}

.titulo {
  display: flex;
}

.titleItem {
  margin-left: 3%;
}

.tools {
  padding: 2%;
}
.data {
  padding-right: 5%;
}

.X:hover {
  color: red;
  background-color: black;
}

button {
  margin-left: 1%;
}

.fecha {
  margin-left: 50%;
}
</style>
