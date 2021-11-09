<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col
        ><img
          src="../assets/homebackground.jpg"
          class="img-fluid"
          alt="Sample"
        />
      </b-col>
      <b-col>
        A mysterious force has seized you, it pushes you to meet other people
        with superhuman skills. Join now, learn to develop your skills buried in
        you and access a world that suits you.
      </b-col>
      <b-btn @click="startSession()">start session</b-btn>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  methods : {
    startSession() {
      sessionStorage.setItem("token", "asdf");
    }
  }
};
</script>

<style scoped>
</style>