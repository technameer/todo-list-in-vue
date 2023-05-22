import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const tasks = ref(useLocalStorage("store", [
    { details: "lorem ipsum", isFave: true, id: 1234 },
    { details: "take breakfast", isFave:false, id: 35454 },
  ]))
  function favs() {
    return tasks.value.filter((el) => el.isFave == true)
  }
  function totalTasks() {
    return tasks.value.length
  }
  function favoriteTasks() {
    return tasks.value.reduce((acc, el) => {
      return el.isFave ? acc + 1 : acc
    }, 0)
  }
  function addnewTask(task) {
    tasks.value.push(task)
  }
  function deleteTask(id) {
    tasks.value = tasks.value.filter((el) => el.id !== id)
  }
  function toggleFave(id) {
    tasks.value.find(el => el.id == id).isFave = !tasks.value.find(el => el.id == id).isFave
  }
  return { tasks, favs, totalTasks, favoriteTasks, addnewTask, deleteTask, toggleFave }
})
