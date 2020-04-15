<template>
  <div class="row"
      style="width:40vw; margin:10px auto;">
    <div class="col-md-12 mt-3">
      <div class="card bg-gradient-secondary mt-3">
        <form class="card-body" @submit.prevent="updateExistingTodo()">
          <h2 class="mb-3">Update Todo</h2>
          <div class="form-group">
              <input
                class="form-control"
                placeholder="Update title.."
                name="title"
                type="text"
                v-model="updatedTodo.title"
              />
          </div>
          <br />
          <div class="form-group">
              <input
                class="form-control"
                placeholder="Update Todo Description..."
                name="description"
                type="text"
                v-model="updatedTodo.description"
              />
          </div>
          <div class="form-group">
            <label for="priority">Set Priority</label>
            <select class="form-control" id="priority" v-model="updatedTodo.priority">
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
            >Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "UpdateTodo",
  props: ["updatedTodo"],

  computed: {
    isDisabled() {
      return this.newTodo.title ? false : true;
    }
  },
  methods : {
    ...mapActions(["updateTodo", "showUpdateForm"]),

    updateExistingTodo() {
      let updatedTodo = {
        title: this.updatedTodo.title,
        description: this.updatedTodo.description,
        priority: this.updatedTodo.priority,
        id: this.updatedTodo.id
      };
      this.updateTodo(updatedTodo);
    }
  }
}
</script>