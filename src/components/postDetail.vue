  <!-- Components postCard.vue -->
<template>
  <div :id="idPost">

    <!-- Container of the post card -->
    <div id="postContainer">
      

      <!-- image on top left of card -->
      <img class="cardImg" :src="img" />
      
      <!-- Title and author next to image -->
      <div>
        <h1>{{ title }}</h1>
        <h6>
          <i>Written by {{ author }} the {{ date }}</i>
        </h6>
      </div>
    </div>

    <!-- Content under image and author -->
    <div class="retour">
      <p>{{ content }}</p>
      <p id="righto">{{ likes }}</p>
    </div>

    <!-- If comments are set, display them -->
    <div v-if="comments !== []">
      <div v-for="(comment, index) in comments" :key="index">
        {{comment}}
      </div>
    </div>

  <b-container class="">
    <b-row class="">
      <b-col md="0" lg="3"></b-col>

      <b-col class="name"
        ><div class="file">
          <form enctype="multipart/from-data">
            <div class="fields">
              <b-form-textarea
                id="textarea-rows"
                placeholder="Contents"
                rows="8"
              ></b-form-textarea
              ><br />
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


  </div>
</template>

  <!-- Script -->
<script>
export default {
  name: "post",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    author: {
      type: String,
      required: true,
      default: "",
    },
    content: {
      type: String,
      required: true,
      default: "",
    },
    date: {
      type: String,
      required: true,
      default: "",
    },
    img: {
      type: String,
      required: true,
      default: "",
    },
    likes: {
      type: Number,
      required: true,
      default: 0,
    },
    comments : {
      type : Array,
      required : false,
      default: () => []
    },
    idPost : {
      type : Number,
      required : true,
      default : -1
    }
  }
};
</script>

  <!-- CSS -->
<style scoped>
div {
  margin: 10px;
}

.cardImg {
  display: block;
  width: 450px;
  height: 250px;
  object-fit: cover;
  padding-right: 10px;
}

#righto {
  text-align: right;
}
.retour {
  word-break: break-all;
}

.name {
  background-color: #c30000;
  padding-top: 10px;
  margin-top: 10vh;
  padding-bottom: 0px;
}
.button-color {
  background-color: rgb(#ff7439);
}
.file {
  height: 430px;
}
</style>