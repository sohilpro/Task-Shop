import { createRouter, createWebHistory } from "vue-router";
// // Home
import Home from "./pages/Home.vue";
// ? Tasks
import Task from "./pages/Task/Task.vue";
//! Product
import Product from "./pages/Product/Product.vue";
//todo Cart
import Cart from "./pages/Cart/Cart.vue";
//* Not Found
import NotFound from './components/NotFound.vue'

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/tasks", name: "task", component: Task },
  { path: "/products", name: "product", component: Product },
  { path: "/cart", name: "cart", component: Cart },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;