<template>
  <div></div>
</template>

<script>
export default {
  
  computed: {
    isLogged() {
      return this.$store.getters.getLogged
    }
  },
  mounted() {
    if (!this.isLogged) {
      this.$router.push({ name: 'home' })
    }
  },
};
</script>

<style>
</style>