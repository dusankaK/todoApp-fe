<template>
  <div class="container py-5">
    <div 
      v-if="loginErrors"
      class="alert alert-danger mt-3"
      style="max-width: 50vw; margin-left: 40px;">
    {{ loginErrors }}
    </div>
    <div class="card rounded-0 smaller">
      <div class="card-header">
        <h3 class="mb-0">Login</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submit()">
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" 
            v-model="credentials.email"
            class="form-control form-control-lg rounded-0" required/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password"
            v-model="credentials.password"
            class="form-control form-control-lg rounded-0" required />
          </div>
          <button class="btn btn-success btn-lg float-right" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Login",
  computed: {
    ...mapGetters({
      loginErrors: "loginErrors"
    })
  },
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions({
      login: "login"
    }),
    submit() {
      this.login(this.credentials)
      .then(() => {
        this.$router.push({ name: 'todos'})
      });
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