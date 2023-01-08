import { defineStore } from "pinia";
import Swal from "sweetalert2";

function UpdateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export const useCart = defineStore("cart", {
  state: () => {
    return {
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    };
  },
  getters: {
    allProductInTheCart: (state) => state.cart,
    countProduct: (state) => state.cart.length,
    totalAmount: (state) => {
      return state.cart.reduce((total, p) => {
        return total + p.priceInt * p.number;
      }, 0);
    },
  },
  actions: {
    addToCart(product) {
      try {
        const item = this.cart.find((p) => p.id == product.id);
        if (!item) {
          this.cart.push({
            ...product,
            number: 1,
          });
        } else {
          item.number++;
        }
        console.log(this.cart.length);
        UpdateLocalStorage(this.cart);
        Swal.fire({
          icon: "success",
          title:"Product Added To Cart!",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    increament(id) {
      try {
        const item = this.cart.find((p) => p.id == id);
        if (item) {
          item.number++;
        }
        UpdateLocalStorage(this.cart);
        Swal.fire({
          icon: "success",
          title:"Cart updated!",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    decreament(id) {
      try {
        const item = this.cart.find((p) => p.id == id);
        if (item) {
          if (item.number > 1) {
            item.number--;
          }
        }
        UpdateLocalStorage(this.cart);
        Swal.fire({
          icon: "success",
          title:"Cart updated!",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    remove(id) {
      try {
        this.cart = this.cart.filter((p) => p.id != id);
        UpdateLocalStorage(this.cart);
        Swal.fire({
          icon: "success",
          title:"Cart updated!",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  },
});