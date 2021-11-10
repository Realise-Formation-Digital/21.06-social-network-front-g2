<template>
  <b-container>
    <b-row class="">
      <b-col md="0" lg="3"></b-col>
      <b-col class="name"
        ><div class="file">
          <form enctype="multipart/from-data">
            <div class="fields">
              <b-form-input v-model="title" placeholder="Title"></b-form-input
              ><br />
              <b-form-textarea
                id="textarea-rows"
                placeholder="Contents"
                rows="8"
                v-model="content"
              ></b-form-textarea
              ><br />
              <input
                type="file"
                accept="image/*"
                id="file-input"
                @change="uploadImage($event)"
              />
            </div>
          </form>
          <b-button pill @click="newPost">Send</b-button>
        </div></b-col
      >
      <b-col md="0" lg="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "post",

  data() {
    return {
      base64Image: null,
      title: "",
      content: "",
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.getLogged;
    },
  },
  mounted() {
    if (!this.isLogged) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    async newPost() {
      try {
        let d = new Date();
        let fullDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
        let json = {
          title: this.title,
          content: this.content,
          img: this.base64Image && this.base64Image.base64Image,
          author: "placeholder",
          date: fullDate,
          likes: 1,
        };
        let config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
        const response = await axios.post("http://localhost:8000/api/posts", json, config);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    uploadImage(event) {
      const uploadedImage = event.target.files[0];
      let image = {
        base64Image: null,
      };
      let reader = new FileReader();
      reader.readAsDataURL(uploadedImage);
      reader.onload = function () {
        image.base64Image = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
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