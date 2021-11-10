  <!-- Components Login with form -->
<template>
  <div class="vue-tempalte">
    <h3>Login</h3>
    <div class="form-group">
      <label>Email address</label>
      <input
        type="email"
        v-model="form.email"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        v-model="form.password"
        class="form-control form-control-lg"
      />
      <!-- Postmessage-->
      <div v-if="error">{{ error }}</div>
    </div>
    <div v-if="success" id="success">Logged in successfully</div>
    <button @click="postMessage()" class="btn btn-dark btn-lg btn-block">
      Login
    </button>
  </div>
</template>
  <script>

  //Get axios
const axios = require("axios").default;
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",    //Login with name and password in json array
        password: "",
      },
    };
  },
  methods: {
    postMessage() {

      //Post credentials
      axios.post("http://127.0.0.1:8000/api/signin", this.form).then(
        (res) => {

          //Get token
          localStorage.setItem("token", res.data.token);

          //Set user as logged in
          this.$store.commit("setLogged", true);

          //Welcome message
          alert("Success! Welcome!");
        },
        (err) => {
          console.log(err);
          alert(err);
        }
      );
    },
  },
};
</script>
<style scoped>
#test {
  margin: 20px;
}
form {
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}
.form-group > label {
  font-weight: 600;
}
</style>