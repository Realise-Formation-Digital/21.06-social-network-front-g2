<template>
  <div>

    <!-- Display posts -->
    <div v-for="(post, index) in posts" :key="index">
      <post-card
        :author=post.author
        :content=post.content
        :date=post.date
        :img=post.img
        :likes=post.likes
        :title=post.title
        :comments=comments
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
    postCard,  //Card to display posts
  },
  mounted() {
    this.getPosts();  // On mount get posts data
  },
  data() {
    return {
      posts: [],
      comments : ["coucou", "salut", "pepo"]
    };
  },
  methods: {
    async getPosts() {
      const temp = await axios.get("http://localhost:3000/posts");
      this.posts = temp.data;
    },
  },
};
</script>

<style>
</style>