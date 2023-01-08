<template>
  <div class="p-5 md:p-10 flex md:w-1/2 justify-between md:justify-center items-end">
    <form  class="w-9/12 md:w-full 2xl:w-1/2">
      <input
        type="text"
        v-model="title"
        placeholder="Add Task ..."
        class="input input-bordered input-info w-full max-w-xs m-auto"
      />
    </form>
    <div class="w-20 md:w-[55%]">
      <button v-if="loading" class="btn ml-auto">
        <div class="flex space-x-2">
  <div aria-label="Loading..."  role="status">
    <svg class="h-4 w-4 animate-spin stroke-slate-50" viewBox="0 0 256 256">
      <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="195.9"
        y1="60.1"
        x2="173.3"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="195.9"
        y1="195.9"
        x2="173.3"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="60.1"
        y1="195.9"
        x2="82.7"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="60.1"
        y1="60.1"
        x2="82.7"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
    </svg>
  </div>
  </div>
      </button>
      <button v-else @click="AddTask" class="btn btn-active md:ml-auto">create</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTask } from "../../stores/task";

const store = useTask();
const title = ref("");
const loading = ref(false);

async function AddTask() {
  loading.value = true;
  await store.addTask(title.value);
  loading.value = false;
}
</script>

<style scoped></style>
