  <!-- Nav + navbar-->
<template>
  <div id="navContainer">
    <b-modal id="modal-sign" :hide-footer="true"><signin /></b-modal>
    <b-modal id="modal-login" :hide-footer="true"><login /></b-modal>
    <div id="banner">
      <img src="../assets/icon.png" alt="moinoin" id="logo" />
    </div>

    <b-navbar toggleable="lg" type="dark" class="navColor">
      <b-navbar-toggle
        target="nav-collapse"
        class="navCollapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-if="isLogged" to="/Profile">Profile</b-nav-item>
          <b-nav-item v-if="isLogged" to="/Post">Post</b-nav-item>
          <b-nav-item v-if="isLogged" to="/Search">Search</b-nav-item>
          <b-nav-item v-if="!isLogged" v-b-modal.modal-login>Log In</b-nav-item>
          <b-nav-item v-if="isLogged" @click="logOut">Log Out </b-nav-item>
          <b-nav-item v-if="!isLogged" v-b-modal.modal-sign>Sign In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div></div>
  </div>
</template>

  <!-- Import pages to components-->
<script>
import login from "../components/login.vue";
import signin from "../components/signin.vue";
export default {
  name: "nav",
  components: {
    login,
    signin,
  },
  computed: {
    isLogged() {
      return this.$store.getters.getLogged;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$store.commit("setLogged", false);
      this.$router.push({ name: "home" });
    },
  },
};
</script>

  <!-- CSS -->
<style scoped>
div {
  padding: 0;
  margin: 0;
}
.navColor {
  background-color: #c30000;
  height: 5vh;
}
#logo {
  max-height: 10vh;
}
#banner {
  background-color: #ff3d00;
}
#navContainer {
  height: 15vh;
}
.nav-link {
  padding: 0;
  color: yellow !important;
}
@media screen and (max-width: 990px) {
  .navColor {
    height: 7vh;
  }

  .nav-link {
    font-size: 2rem;
    -webkit-text-stroke: 1px black;
    border: solid;
    border-color: black;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }

  .nav-link:hover {
    background-color: #ff7539 !important;
  }

  .navbar-collapse {
    background-color: #c30000;
    text-align: center;
  }

  .navbar-toggler {
    height: 100%;
    border: none;
    padding-top: 0;
    padding-bottom: 5vh;
  }
}
</style>