<template>
  <!-- Header with button. David-->
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      ADL Gaming
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item to="/">Home</mdb-nav-item>
        <mdb-nav-item to="/result">Profile</mdb-nav-item>
        <mdb-nav-item to="/contact">Post</mdb-nav-item>
        <mdb-nav-item to="/about">Search</mdb-nav-item>
        <mdb-nav-item to="/recherche">Log Out/ In</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<!-- Script components. David-->
<script>
  import {  mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'Pills',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
    }
  }
</script>

<style scoped>

</style>