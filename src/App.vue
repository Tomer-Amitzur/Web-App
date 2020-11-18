<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
  import pictures from './components/pictures.vue';

  export default {
    name: 'App',
    components: {
      pictures,
    },
    data() {
      return {
        authenticated: false,
        mockAccount: {
          username: "tomer",
          password: "1234"
        }
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({ name: "login" });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
</script>

<style>
  body {
    
  }

  #app {
    
  }

  a {
    float: right;
    color: white;
  }
</style>
