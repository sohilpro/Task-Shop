<template>
  <Header />
  <div class="flex flex-col-reverse md:grid md:grid-cols-2 absolute reverse img">
    <div class="p-9 space-y-10">
      <h1 class="text-center md:text-left text-4xl">Home Page</h1>
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores
        officia nemo veniam voluptatibus ut excepturi nam soluta commodi,
        explicabo, quos iusto iste quod, repudiandae architecto doloribus
        adipisci neque deleniti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Modi asperiores officia nemo veniam voluptatibus ut
        excepturi nam soluta commodi, explicabo, quos iusto iste quod,
        repudiandae architecto doloribus adipisci neque deleniti. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Modi asperiores officia
        nemo veniam voluptatibus ut excepturi nam soluta commodi, explicabo,
        quos iusto iste quod, repudiandae architecto doloribus adipisci neque
        deleniti.
      </p>
      <div class="text-center md:text-left">
        <router-link class="btn btn-success text-slate-100" to="/tasks"
        >Task</router-link
      >
      <router-link class="btn btn-secondary" to="/products"
        >Product</router-link
      >
      </div>
    </div>
    <div class="p-9 flex flex-col items-center">
      <img
        src="../assets/img/man.png"
        alt="..."
        class="w-[300px] h-[300px]"
      />
      <h2 class="mt-4 font-semibold">@sohilpro</h2>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
</script>

<style>
.btn {
  margin-right: 25px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

body::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
  background-color: #570df8;
}

/** scroll theme 2  */
/* ::-webkit-scrollbar-track
{
	border: 5px solid white;
  border-color: transparent;
	background-color: #b2bec3;
}

::-webkit-scrollbar
{
	width: 15px;
	background-color: #dfe6e9;
}

::-webkit-scrollbar-thumb
{
	background-color: #570df8;
	border-radius: 10px;
} */
.img {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
