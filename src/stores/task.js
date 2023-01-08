import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useTask = defineStore("task", {
  state: () => {
    return { tasks: [] };
  },
  getters: {
    allTask: (state) => state.tasks,
  },
  actions: {
    async fetchTask() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.tasks = response.data;
    },
    async filterTask(number) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${number}`
      );
      this.tasks = response.data;
    },
    async addTask(title) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          {
            title: title,
            completed: false,
          }
        );
        this.tasks.unshift(response.data);
        Swal.fire({
          icon: "success",
          title: "Task added!",
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
    async deleteTask(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        this.tasks = this.tasks.filter((task) => task.id != id);
        // console.log(id);
        Swal.fire({
          icon: "warning",
          title: "Task deleted!",
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
    async updateTask(updateTask) {
        try {
          const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updateTask.id}`,
            {
              id: updateTask.id,
              title: updateTask.title,
              completed: !updateTask.completed,
            }
          );
          const index = this.tasks.findIndex(task => task.id == response.data.id)
            if (index != -1) {
                this.tasks.splice(index,1,response.data)
            }
          Swal.fire({
            icon: "success",
            title: "Task updated!",
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
