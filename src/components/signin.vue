  <!-- Page with Form for signin -->
¨<template>
  <div class="vue-tempalte">
    <h3>sign in</h3>

    <div class="form-group">
      <label> Name</label>
      <input
        type="text"
        v-model="form.name"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group">
      <label>Full Name</label>
      <input
        type="text"
        v-model="form.fullname"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group">
      <label>Nickname</label>
      <input
        type="text"
        v-model="form.nickname"
        class="form-control form-control-lg"
      />
    </div>

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
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        v-model="form.confirmpassword"
        class="form-control form-control-lg"
      />
    </div>

    <!-- Button -->
    <button @click="postUser()" class="btn btn-dark btn-lg btn-block">
      sign in
    </button>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "signin",
  data: () => ({
    form: {
      name: "",
      fullname: "",
      nickname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  }),

  methods: {
    postUser() {
      if (
        this.form.name === "" ||
        this.form.fullname === "" ||
        this.form.nickname === "" ||
        this.form.email === "" ||
        this.form.password === "" ||
        this.form.confirmpassword === ""
      ) {
        alert("Please fill all the fields!");
        return;
      }
      if (this.form.password !== this.form.confirmpassword) {
        alert("The passwords don't match!");
        return;
      }
      axios
        .post("http://localhost:3000/users", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
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