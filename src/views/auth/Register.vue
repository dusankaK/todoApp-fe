<template>
  <div class="container py-5">
    <div
      v-for="(error, index) in registerErrors"
      :key="index"
      class="alert alert-danger mt-3"
      style="width: 50vw; margin: 10px auto"
    >{{ error[0] }}</div>
    
    <div class="card rounded-0 smaller">
      <div class="card-header">
        <h3 class="mb-0">Register</h3>
      </div>
        <div class="card-body">
          <form @submit.prevent="submit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input v-model="newUser.name" type="text" class="form-control form-control-lg rounded-0" required />
            </div>
            <div class="form-group">
              <label for="name">E-mail</label>
              <input v-model="newUser.email" type="email" class="form-control form-control-lg rounded-0" required />
            </div>
            <div class="form-group">
              <label for="name">Password</label>
              <input v-model="newUser.password" type="password" class="form-control form-control-lg rounded-0" required />
            </div>
            <div class="form-group">
              <label for="name">Confirm password</label>
              <input
                v-model="newUser.password_confirmation"
                type="password"
                class="form-control form-control-lg rounded-0"
                required
              />
            </div>
            <button class="btn btn-primary btn-lg float-right" type="submit">Register</button>
          </form>
        </div>
     </div>   
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Register",
  computed: {
    ...mapGetters({
      registerErrors: "registerErrors"
    })
  },
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    }
  },
  methods: {
    ...mapActions({
      registerUser: "registerUser"
    }),
    submit() {
      
      this.registerUser(this.newUser)
        .then(() => {
          this.$router.push({name: 'todos'})
        })
    }
  }
}
</script>

<style>
form {
  width: 30vw;
  margin: 40px auto;
}
.smaller {
  width: 50vw;
  margin: auto;
}
</style> 