<template>
  <Header />
  <div v-if="loading" class="loader">
    <img src="../../assets/img/Infinity-1s-223px.gif" alt="..." class="loader1" />
  </div>
  <div v-else class="md:grid md:p-10 Task">
    <div class="md:flex md:justify-center md:items-center">
      <Create />
      <Filter />
    </div>
    <div class="grid md:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="card w-96 bg-base-100 mx-auto shadow-xl"
        :class="{ 'bg-slate-300': task.completed }"
      >
        <div class="card-body">
          <div class="card-actions justify-end">
            <button
              @click="DeleteTask(task.id)"
              class="btn btn-square btn-sm hover:bg-red-600 mr-[0px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Update :task="task" />
          </div>
          <div>
            <del v-if="task.completed">{{ task.title }}</del>
            <p v-else>{{ task.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTask } from "../../stores/task";
import Filter from "./Filter.vue";
import Create from "./Create.vue";
import Update from "./Update.vue";
import Header from "../../components/Header.vue";

const store = useTask();
const tasks = computed(() => store.allTask);
const loading = ref(false);

async function fetchTask() {
  loading.value = true;
  await store.fetchTask();
  loading.value = false;
}
async function DeleteTask(id) {
  loading.value = true;
  await store.deleteTask(id);
  loading.value = false;
}

fetchTask();
</script>

<style>
.loader1 {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
}
.Task,.loader{
  background-color: #fff;
  min-height: 100vh;
  background-size: cover;
}
</style>