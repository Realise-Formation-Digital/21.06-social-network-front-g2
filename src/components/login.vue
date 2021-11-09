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
const axios = require("axios").default;
export default {
  name: "Login",

  data: () => ({
    form: {
      email: "",
      password: "",
      error: null,
      success: false,
    },
  }),
  methods: {
    postMessage() {
      if (this.form.email === "" || this.form.password === "") {
        alert("something in worrg!");
        return;
      }

      if (this.form.email !== this.form.password) {
        alert("The passwords don't match!");
        return;
      }

      axios.post("http://localhost:3000/message", this.form),
        (this.success = false),
        (this.error = null
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          }));
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