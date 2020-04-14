<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link" to="/todos">Todo App<span class="sr-only">(current)</span></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div 
      v-if="!isUserLoggedIn"
      class="collapse navbar-collapse" 
      id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
        <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
      </div>
    </div>
    <div 
      v-else
      class="collapse navbar-collapse" 
      id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <a class="nav-link" href="#" @click.prevent="logoutUser()">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Header',
    computed: {
      ...mapGetters({
        isUserLoggedIn: "isUserLoggedIn"
      })
    },
    methods: {
      ...mapActions({
        logout: "logout"
      }),
      logoutUser() {
        this.logout()
          .then(() => {
            this.$router.push({ name: "login" })
          })
      }
    }
}
</script>

<style>  
</style>