<template>
  <div class="navbar bg-primary text-neutral-content">
    <div class="navbar-start">
      <router-link
        active-class="active"
        class="btn btn-ghost normal-case text-xl"
        to="/"
        >@sohil-dev</router-link
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">Home</router-link></li>
        <li tabindex="0">
          <router-link to="/tasks">Tasks</router-link>
        </li>
        <li><router-link to="/products">Product</router-link></li>
      </ul>
    </div>
    <router-link
      active-class="active"
      to="/cart"
      class="navbar-end md:navbar-end"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 relative h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <span
        class="badge badge-primary absolute top-8 right-14 md:top-8 md:right-5"
        >{{ countProduct }}</span
      >
    </router-link>
    <div class="md:hidden -mr-8">
      <div class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 mr-7 p-2 shadow bg-base-100 text-slate-900 rounded-box w-52"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/tasks">Task</router-link></li>
          <li><router-link to="/products">Product</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "../stores/cart";
import { computed } from "vue";

const store = useCart();
const countProduct = computed(() => store.countProduct);
</script>

<style>
.router-link-active {
  border-bottom: 2px solid rgba(255, 253, 253, 0.562) !important;
  border-left: 0.2px solid rgba(255, 253, 253, 0.562) !important;
  border-right: 0.2px solid rgba(255, 253, 253, 0.562) !important;
  /* border-top: .001px solid rgba(255, 253, 253, 0.562) !important; */
  opacity: 0.8;
}
</style>
