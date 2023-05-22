<template>
    <form @submit.prevent="wrapnewTask">
        <input v-model="newTask" autocomplete="off" type="text" name="newtask" placeholder="Enter a new task...">
        <button>Add</button>
    </form>
</template>

<script>
import { useCounterStore } from "../stores/counter"
import { ref } from "vue";

export default {
    setup() {
        const store = useCounterStore()
        const newTask = ref('')
        const wrapnewTask = () => {
            if (newTask.value.length > 0) {
                store.addnewTask({
                    details: newTask.value,
                    isFave: false,
                    id: Math.floor(Math.random() * 1000000)
                })
                newTask.value = ""
            }
        }
        return { newTask, store, wrapnewTask }
    }
}
</script>

<style scoped>
form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

input[type="text"] {
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 8px 10px;
    font-size: 16px;
    margin-right: 10px;
    transition: border-color 0.3s ease-in-out;
    width: 100%;
    color: #555;
    font-weight: 400;
    letter-spacing: 1px;
    background: transparent;
}

input[type="text"]::placeholder {
    color: #aaa;
    font-weight: 300;
    letter-spacing: 1px;
}

input[type="text"]:focus {
    outline: none;
    border-bottom-color: #8C54FF;
}

button {
    border: none;
    background-color: #8C54FF;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #7041A6;
}

button:active {
    background-color: #4E2B6D;
}
</style>
