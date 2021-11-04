  <!-- Components postCard.vue -->
<template>
  <div :id="idPost" @click="cardClick">

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
  },
  methods : {
    //Emits this child id to parent for more detailed display
    cardClick() {
      this.$emit("clicked", this.idPost);
      console.log('saldlasdlaslsakgkmdfbpmidbbdifdbebiebiobesniobesnikodbfnio')
    }
  }
};
</script>

  <!-- CSS -->
<style scoped>
div {
  margin: 10px;
}
#postContainer {
  display: flex;
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
.retour {
  word-break: break-all;
}
</style>