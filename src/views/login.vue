<template>
  <div id="login">
    <h2 >Students Administration</h2>
    <h3>System:</h3>
    
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col cols="auto">
          <h5>
            <img src="../assets/logo2.jpeg" style="width: 400px">
          </h5>
          <h1>Login</h1>
          <input type="text" name="username" v-model="input.username" placeholder="Username" />
          <input type="password" name="password" v-model="input.password" placeholder="Password" />
          <button type="button" v-on:click="login()">Login</button>
        </b-col>
      </b-row>

    </b-container>
    <br />
    <br />
    
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
  h2 {
    position: absolute;
    padding-top: 15px;
    font-size: 35px;
    font-family: cursive;
    left: 420px;
    top: 15px;
    font-weight: bold;
  }
  h3 {
    position: absolute;
    padding-top: 15px;
    font-size: 35px;
    font-family: cursive;
    left: 550px;
    top: 80px;
    font-weight: bold;
  }
  .col-auto {
    position: absolute;
    background-color: #d2cfcf;
    padding-bottom: 15px;
    padding-top: 15px;
    top: 220px;
    width:500px
  }
  h1{
    font-size:x-large;
    margin-bottom: 1rem;
  }
  #login {
    background-color: #F2F2F2;
    height: 100vh;
    padding-left: 15px;
    padding-right: 15px
  }
  h4 {
    position: absolute;
    top: 15px;
    right: 250px;
    width: 250px;
  }
  h5 {
    padding-bottom: 15px;
    text-align: center;
    
  }

  img {
    
  }

</style>
