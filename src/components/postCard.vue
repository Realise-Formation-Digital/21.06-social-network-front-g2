<template>
  <div>

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
    <div>
      <p>{{ content }}</p>
      <p id="righto">{{likes}}</p>
    </div>

    <!-- If comments are set, display them -->
    <div v-if="commentaire !== []">
      <div v-for="(comment, index) in comments" :key="index">
        {{comment}}
      </div>
    </div>
  </div>
</template>

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
    }
  }
};
</script>

<style scoped>
div {
  margin: 10px;
}
#postContainer {
  display : flex;
}
.cardImg {
  display: block;
  width: 200px;
  height: 150px;
  object-fit: cover;
  padding-right: 10px;
}

#righto {
  text-align: right;
}
</style>