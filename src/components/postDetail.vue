<template>
  <div>
      <p>{{ commentaire }}</p>
  </div>
</template>

<script>
export default {
  name: "postDetail",
  props: {

    commentaire: {
      type: String,
      required: true,
      default: '',
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

#nav {
  text-align: right;
}
</style>