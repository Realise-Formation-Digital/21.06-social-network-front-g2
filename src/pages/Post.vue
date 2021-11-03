<template>
  <b-container class="dawit">
    <b-row class="">
      <b-col md="0" lg="3"></b-col>

      <b-col class="name"
        ><div class="file">
          <form enctype="multipart/from-data">
            <div class="fields">
              <b-form-input id="name" placeholder="Title"></b-form-input><br />
              <b-form-textarea
                id="textarea-rows"
                placeholder="Contents"
                rows="8"
              ></b-form-textarea
              ><br />
              <label>Upload image</label>
              <input type="file" /><br /><br />
              <b-col md="12">
              <b-button pill float-right>Button</b-button>
              </b-col>
            </div>
          </form>
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
      file: "",
      image: "",
    };
  },
  methods: {
    onSelect() {
      const file = this.$$refs.file.files[0];
      this.file = file;
    },
    async onPost() {
      const formData = new formData();
      formData.append("file", this.file);
      console.log(this.file);
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
  height: 430px;
}

</style>