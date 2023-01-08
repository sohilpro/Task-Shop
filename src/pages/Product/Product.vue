<template>
  <Header />
  <div class="grid md:grid-cols-3 2xl:grid-cols-4 md:p-10 gap-4 img-product space-y-6 md:space-y-0 py-8">
    <div
      v-for="product in products"
      :key="product.id"
      class="card w-96 bg-base-100 mx-auto shadow-xl"
    >
      <figure>
        <img :src="product.img" alt="..." />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ product.name }}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{{ product.description }}</p>
        <div class="flex justify-between items-end card-actions">
          <div>
            <button @click="addedToCart(product)" class="btn btn-primary mt-2">
              ADD to Cart
            </button>
          </div>
          <div>
            <span class="font-semibold">$ {{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProduct } from "../../stores/product";
import { useCart } from "../../stores/cart";
import Header from "../../components/Header.vue";
const store = useProduct();
const CartStore = useCart();
const products = computed(() => store.allProduct);

function addedToCart(product) {
  CartStore.addToCart(product);
}
</script>

<style>
.img-product {
  background: url("../../assets/img/2.jpg") no-repeat;
  background-size: cover;
  object-fit: cover;
}
</style>