<template>
  <div id="maxContainer">
    <div class="content">
      <Nav />
      <div id="container">
        <router-view></router-view>
      </div>

      <Foot />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Foot from "./components/Foot";

export default {
  name: "App",
  components: {
    Foot,
    Nav,
  },
};
</script>

<style>
#maxContainer {
  background-image: url("./assets/backImg.jpeg");
  background-repeat: no-repeat;
  background-size:cover ;
}
.content {
  width: 74vw;
  margin-left: 13vw;
  opacity: 0.95;
}
#container {
  height: 80vh;
  background-color: #ff7539;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 2vh;
  overflow: auto;
}
@media screen and (max-width: 990px) {
  .content {
    width: 100vw;
    margin-left: 0;
  }
  #container {
    height: 80vh;
    padding-top: 4vh;
  }
}
</style>
