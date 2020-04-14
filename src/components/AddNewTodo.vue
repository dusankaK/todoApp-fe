<template>
  <div class="row"
      style="width:40vw; margin:10px auto;">
    <div class="col-md-12 mt-3">
      <div class="card bg-gradient-secondary mt-3">
        <form class="card-body" @submit.prevent="addNewTodo()">
          <h2 class="mb-3">Create a new Todo</h2>
          <div class="form-group">
              <input
                class="form-control"
                placeholder="Todo title.."
                name="title"
                type="text"
                v-model="newTodo.title"
              />
          </div>
          <br />
          <div class="form-group">
              <input
                class="form-control"
                placeholder="Todo Description..."
                name="description"
                type="text"
                v-model="newTodo.description"
              />
          </div>
          <div class="form-group">
            <label for="priority">Set Priority</label>
            <select class="form-control" id="priority" v-model="newTodo.priority">
              <option selected>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div class="form-group">
            <button
              :disabled="isDisabled"
              type="submit"
              class="btn btn-primary btn-block"
            >Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddNewTodo",

  data() {
    return {
      newTodo: {
        title: "",
        description: "",
        priority: "High",
      }
    }
  },
  computed: {
    isDisabled() {
      return this.newTodo.title ? false : true;
    }
  },  
  methods: {
    ...mapActions({
      addTodo: "addTodo"
    }),
    addNewTodo() {
      let newTodo = {
        title: this.newTodo.title,
        description: this.newTodo.description,
        priority: this.newTodo.priority,
        completed: false
      };
      this.addTodo(newTodo);
      this.clearForm();
    },
    clearForm() {
      this.newTodo.title = "",
      this.newTodo.description = "",
      this.newTodo.priority = "High"
    }
  }
}
</script>
