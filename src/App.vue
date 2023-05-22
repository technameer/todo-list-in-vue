<template>
  <div class="taskslist">
    <div class="task-header">
      <h1>Todo List</h1>
      <div class="buttons-container">
        <button @click="list = 'favorites'">Favorites</button>
        <button @click="list = 'all'">All Tasks</button>
      </div>
    </div>
    <div class="task-stats">
      <p v-if="list === 'all'" class="task-stat">Total Tasks: {{ store.totalTasks() }}</p>
      <p v-if="list === 'favorites'" class="task-stat">Favorite Tasks: {{ store.favoriteTasks() }}</p>
    </div>
    <addtask></addtask>
    <div class="tasks-container">
      <tasksList v-if="list === 'all'" v-for="task in store.tasks" :key="task.id" :task="task"></tasksList>
      <tasksList v-if="list === 'favorites'" v-for="task in store.favs()" :key="task.id" :task="task"></tasksList>
    </div>
  </div>
</template>

<script>
import tasksList from "./components/tasksList.vue";
import addtask from "./components/addtask.vue";
import { useCounterStore } from "./stores/counter"
import { ref } from "vue";

export default {
  components: {
    tasksList,
    addtask
  },
  setup() {
    const store = useCounterStore()
    const list = ref("all")
    return { store, list }
  }
}
</script>

<style scoped>
.taskslist{
  margin: 20px auto;
  max-width: 700px;
  background-color: #F5F5F5;
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.5);
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.task-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-header h1{
  font-size: 36px;
  font-weight: bold;
  color: #444444;
  margin: 0;
}

.buttons-container{
  display: flex;
  gap: 10px;
}

.buttons-container button{
  background-color: #444444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.buttons-container button:hover{
  background-color: #333333;
}

.task-stats{
  margin: 10px 0;
}

.task-stat{
  color: #777777;
  margin: 0;
}

.tasks-container{
  margin-top: 20px;
}
</style>
