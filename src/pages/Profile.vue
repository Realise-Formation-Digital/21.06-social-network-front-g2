<template>
  <div>
    <!-- Display posts -->
    <div v-for="(post, index) in posts" :key="index">
      <post-card
        :author="post.author"
        :content="post.content"
        :date="post.date"
        :img="post.img"
        :likes="post.likes"
        :title="post.title"
        :idPost="post.id"
        @clicked="clickPost"
      />
    </div>
    
    <b-modal id="postDetail" :hide-footer=true scrollable>
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
import PostDetail from "../components/postDetail.vue";
export default {
  name: "search",
  components: {
    postCard,
    PostDetail, //Cards to display posts
  },
  computed: {
    isLogged() { //Get if user is logged 
      return this.$store.getters.getLogged
    }
  },
  mounted() {
    if (!this.isLogged) {   //If not, return to home
      this.$router.push({ name: 'home' })
    }
    this.getPosts();        // On mount get posts data
  },
  data() {
    return {
      posts: [],            //Post array
      comments: ["coucou", "salut", "pepo"],   //Temp comment array
      singlePost: null,
    };
  },
  methods: {

    //Function to get all posts from DB
    async getPosts() {

      //Token
      let config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
      
      //Request
      const temp = await axios.get("http://localhost:8000/api/posts", config);

      //Put request response into posts array
      this.posts = temp.data.data;
    },
    clickPost(val) {
      console.log(val);
      this.singlePost = this.posts[val];
      console.log(this.singlePost);
      //Show modal
      this.$bvModal.show("postDetail");
    },
  },
};
</script>

<style>
</style>