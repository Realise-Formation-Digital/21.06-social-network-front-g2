<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <post-card
        :author=post.author
        :content=post.content
        :date=post.date
        :img=post.img
        :likes=post.likes
        :title=post.title
      />
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
import postCard from "../components/postCard.vue";
export default {
  name: "search",
  components: {
    postCard,
  },
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      const temp = await axios.get("http://localhost:3000/posts");
      this.posts = temp.data;
      console.log(this.posts);
    },
  },
};
</script>

<style>
</style>