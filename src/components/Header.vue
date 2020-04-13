<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/todos"
              >Todo App<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
//import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Header',
    // methods: {
    //     ...mapActions(['fetchCurrentUser', 'loginUser']),
    // },
    // computed: mapGetters(['getUser']),
    // created() {
    //     this.fetchCurrentUser({});
    // }
}
</script>