<template>
  <div>
    <button v-if="loading" class="btn btn-square btn-sm">
        <div  class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </button>
    <button v-else-if="task.completed" class="btn btn-square btn-sm mr-[-5px]">
      <span @click="updateTask(task)" class="bi bi-check2"></span>
    </button>
    <button v-else class="btn btn-square btn-sm hover:bg-success mr-[-5px]">
      <span @click="updateTask(task)" class="bi bi-check2-all"></span>
    </button>
  </div>
</template>

<script setup>
import { useTask } from "../../stores/task";
import { defineProps, ref } from "vue";

defineProps(["task"]);
const store = useTask();
const loading = ref(false);

async function updateTask(task) {
  loading.value = true;
  await store.updateTask(task);
  loading.value = false;
}
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 29px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fafafa transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
