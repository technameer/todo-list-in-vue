<template>
    <div class="task">
      <div class="task-details">
        <p class="task-text">{{ task.details }}</p>
        <div class="task-actions">
          <button @click="store.deleteTask(task.id)" class="action delete">Delete</button>
          <button @click="store.toggleFave(task.id)" class="action favorite">{{ isFave?"unfavorite":"favorite" }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { computed } from "vue"
import { useCounterStore } from "../stores/counter"
  export default {
    props: {
      task: {
        required: true
      }
    },
    setup(props) {
      const task = props.task
      const store = useCounterStore()
      const isFave = computed(()=>store.tasks.find((el)=> el.id == task.id).isFave)
      return {
        task,
        store,
        isFave
      }
    }
  }
  </script>
  <style>
  .task {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
  }
  
  .task-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .task-text {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin: 0;
  }
  
  .task-actions {
    display: flex;
    align-items: center;
  }
  
  .action {
    background-color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #666;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin: 0 5px;
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
  }
  
  .action:hover {
    background-color: #f0f0f0;
  }
  
  .delete {
    color: #e74c3c;
  }
  
  .favorite {
    color: #f1c40f;
  }
  </style>
  