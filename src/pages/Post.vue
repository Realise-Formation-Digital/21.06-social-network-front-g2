<template>
  <b-container>
    <b-row class="">
      <b-col md="0" lg="3"></b-col>
      <b-col class="name">
        <div class="file">
          <form enctype="multipart/from-data">
            <div class="fields">
              <!--------------- input for title on the pape post--->
              <b-form-input v-model="title" placeholder="Title"></b-form-input
              ><br />
              <!----------content for the post---->
              <b-form-textarea
                id="textarea-rows"
                placeholder="Contents"
                rows="8"
                v-model="content"
              ></b-form-textarea
              ><br />
              <!------------ uploading image on the page post----->
              <input
                type="file"
                accept="image/*"
                id="file-input"
                @change="uploadImage($event)"
              />
            </div>
          </form>
          <!------------button for sending the post on the page post -------->
          <b-button pill @click="newPost">Send</b-button>
        </div></b-col
      >
      <b-col md="0" lg="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>

//Import axios
const axios = require("axios").default;
export default {
  name: "post",

  data() {
    return {
      base64Image: null, //base64 image
      title: "",         //post title
      content: "",       //Post content
    };
  },
  computed: {
    isLogged() {
      //Get if user is logged from store
      return this.$store.getters.getLogged;
    },
  },
  mounted() {

    //if user not logged, return to home
    if (!this.isLogged) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {

    //Function creates and pushes new post to DB
    async newPost() {
      try {

        //Make date to YYYY-MM-DD format
        let d = new Date();
        let fullDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();

        //Post json format
        let json = {
          title: this.title,
          content: this.content,
          img: this.base64Image && this.base64Image.base64Image,
          author: "placeholder",
          date: fullDate,
          likes: 1,
        };

        //Token
        let config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };

        //Do post request
        await axios.post("http://localhost:8000/api/posts", json, config);
        alert('Success, post created!')
      } catch (error) {
        //Else nope
        console.error(error);
      }
    },

    //Function to upload image & change it to base 64
    uploadImage(event) {

      //get image from image picker
      const uploadedImage = event.target.files[0];

      //Temp image array (It's a scope thing)
      let image = {
        base64Image: null,
      };

      //File reader will put base64 image in image array
      let reader = new FileReader();
      reader.readAsDataURL(uploadedImage);
      reader.onload = function () {
        image.base64Image = reader.result;
      };

      //Catch error if there is
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };

      //Put result in global base64Image
      this.base64Image = image;
    },
  },
};
</script>

<style scoped>
.name {
  background-color: #c30000;
  padding-top: 10px;
  margin-top: 10vh;
  padding-bottom: 10px;
}
.button-color {
  background-color: cornflowerblue;
}
.file {
  height: 400px;
}
</style>