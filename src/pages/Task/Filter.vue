<template>
  <div class="flex flex-col justify-center items-center p-10 md:w-1/2">
    <h4>Filter Task ↓</h4>
    <select 
    placeholder="select"
    class="select select-bordered select-info select-sm w-full max-w-xs"
    @change="filterTask"
    v-model="number"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTask } from "../../stores/task";

const store = useTask()
const number = ref()

function filterTask() {
    store.filterTask(number.value)
}
</script>

<style scoped></style>
