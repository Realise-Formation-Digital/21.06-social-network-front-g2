<template>
  <div id="navContainer">
    <div id="banner">
      <img src="../assets/icon.png" alt="moinoin" id="logo" />
    </div>

    <b-navbar toggleable="lg" type="dark" class="navColor">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/Profile">Profile</b-nav-item>
          <b-nav-item href="/Post">Post</b-nav-item>
          <b-nav-item href="/Search">Search</b-nav-item>
            <b-nav-item>Log In</b-nav-item>
            <b-nav-item>Log Out </b-nav-item>
            <b-nav-item>Sign In </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div></div>
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
}
#navContainer {
  height: 15vh;
}
.nav-link {
    padding : 0;
}


</style>