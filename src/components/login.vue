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

  data() {
    return {
      form :
        {
          "email" : "",
          "password" : ""
        }
    }
  },
  methods: {
    postMessage() {
      axios.post("http://127.0.0.1:8000/api/signin", this.form)
        .then(
            (res)=>{
              localStorage.setItem('token', res.data.token)
              this.$store.commit('setLogged', true)
            },
            (err)=>{
              console.log(err);
            }
        )
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