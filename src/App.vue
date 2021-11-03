<template>
  <div class="content">
    <Nav/>
      <div id="container">
        <router-view></router-view>
      </div>
    <Foot/>
   
  </div>
</template>

<script>

import Nav from "./components/Nav";
import Foot from "./components/Foot";

export default {
  name: 'App',
  components: {
    Foot,
    Nav,

  }
}
</script>

<style>
  .content {
    width : 74vw;
    margin-left : 13vw;
  }
  #container {
    height : 80vh;
    background-color: #ff7539;
    padding-left : 2vw;
    padding-top : 2vh;
  }
  @media screen and (max-width: 420px) {
  .content {
    width : 100vw;
    margin-left : 0;
  }
}
</style>
