<template>
  <div id="container">

    <div id="banner">
      <img src="../assets/icon.png" alt="moinoin" id="logo" />
    </div>

    <b-navbar toggleable="lg" type="dark" class="navColor">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Profile</b-nav-item>
          <b-nav-item href="#">Post</b-nav-item>
          <b-nav-item href="#">Search</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form> </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<!-- Script components. David-->
<script>
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
}
.navColor {
  background-color: #c30000;
}
#logo {
  width: 120px;
  height: auto;
}
#banner {
  background-color: #ff3d00;
  padding: 5px;
}
#container {
    height : 15vh;
}
.navbar {
    padding : 0;
}
</style>