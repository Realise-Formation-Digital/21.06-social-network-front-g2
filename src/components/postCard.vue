<template>
  <div>
    <div id="container">
      <img class="cardImg" :src="img" />
      <div>
        <h1>{{ title }}</h1>
        <h6>
          <i>Written by {{ author }} the {{ date }}</i>
        </h6>
      </div>
    </div>
    <div>
      <p>{{ content }}</p>
      <p id="righto">{{likes}}</p>
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
  },
};
</script>

<style scoped>
div {
  margin: 10px;
}
#container {
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