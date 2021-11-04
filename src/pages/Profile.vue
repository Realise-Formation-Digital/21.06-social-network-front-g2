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
        :idPost=post.id
        @clicked="clickPost"
      />
    </div>
    
    <b-modal id="onePost" hide-footer="true" scrollable>
      <post-detail
        :author="singlePost && singlePost.author"
        :content="singlePost && singlePost.content"
        :date="singlePost && singlePost.date"
        :img="singlePost && singlePost.img"
        :likes="singlePost && singlePost.likes"
        :title="singlePost && singlePost.title"
        :idPost="singlePost && singlePost.id"
        :comments="comments"
      />
    </b-modal>
  </div>
</template>

<script>
const axios = require("axios").default;
import postCard from "../components/postCard.vue";
import PostDetail from '../components/postDetail.vue';
export default {
  name: "search",
  components: {
    postCard,
    PostDetail,  //Card to display posts
  },
  mounted() {
    this.getPosts();  // On mount get posts data
  },
  data() {
    return {
      posts: [],
      comments : ["coucou", "salut", "pepo"],
      singlePost : null,
    };
  },
  methods: {
    async getPosts() {
      const temp = await axios.get("http://localhost:3000/posts");
      this.posts = temp.data;
    },
    clickPost(val) {
      this.singlePost = this.posts[val-1];
      //Show modal
      this.$bvModal.show("onePost");
      
    }
  },
};
</script>

<style>
</style>