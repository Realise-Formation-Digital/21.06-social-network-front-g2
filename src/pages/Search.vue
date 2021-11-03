<template>
  <div>
    <post-card
      author="dawit"
      content="salut a tous"
      date="blabla"
      img="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
      likes="2"
      title="Dawit le boss"
    />
  </div>
</template>

<script>
import postCard from "../components/postCard.vue";
export default {
  name: "search",
  components: {
    postCard,
  },
};
</script>

<style>
</style>