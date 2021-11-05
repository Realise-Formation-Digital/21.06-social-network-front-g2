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
          <b-button pill @click="newUser">Send</b-button>
        </div></b-col
      >
      <b-col md="0" lg="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

  name: "post",

  data() {
    return {
      image: null,
      title: "",
      content: "",
    };
  },

  methods: {

    newUser() {
      let img64 = this.getBase64(this.image);
      console.log(img64);
      let json = {
        title: this.title,
        content: this.content,
        img: img64,
        author: "placeholder",
        date: Date.now(),
        likes: 1,
      };
      console.log(json);
    },

    uploadImage(event) {
      this.image = event.target.files[0];
      console.log(this.image);
    },

    getBase64(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
      return reader.result;
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