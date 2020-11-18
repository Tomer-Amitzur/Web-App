<template>
  <div id="login">
    <h2 style="font-size: 50px">welcome</h2>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col cols="auto">
          <h1>Login</h1>
          <input type="text" name="username" v-model="input.username" placeholder="Username" />
          <input type="password" name="password" v-model="input.password" placeholder="Password" />
          <button type="button" v-on:click="login()">Login</button>
        </b-col>
      </b-row>
      
    </b-container>
    <br />
    <br />
    <pictures></pictures>
  </div>
</template>

<script>
  import pictures from '../components/pictures.vue';

  export default {
        name: 'Login',
        components: {
          pictures,
        },
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                      this.$router.replace({ name: "secure", params: { username: this.input.username } });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
  .row{
    justify-content:center;
  }
  h2{
    padding-bottom: 15px
  }
  .col-auto {
    background-color: white;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  h1{
    font-size:x-large;
    margin-bottom: 1rem;
  }
  #login {
    background-color: #818c9d;
    height: 100vh;
    padding-left: 15px;
    padding-right: 15px
  }
</style>
