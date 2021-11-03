<template>
  <div>
    <post-card
      title="Ayyy"
      likes="12"
      img="https://pbs.twimg.com/media/EV_nVyLWsAEJZ9t.jpg"
      date="MAIS YO"
      content="TAMER GIGEWIN GWEOING EIWNGOWE INIEOGW NEWOING WEOINGOIWENG OIEWNOI EWNGOEWINNIOG ENEWOIG NEWOGN OEWINGOIENW OIGEWNOIEW NOGENWIOGN EWOIGN IOEWNGOEWNG OIEWNGOI NEWOIGN OIWENGOI WENOIGENWIO GNEIOWNG IOEWNGIEOWN GIEOWNGOI EWNEOIWGN EWION GEWONGEOEIWN"
      author="TONPER"
    />
    <post-detail commentaire="Dawit"/>
    <b-form-input v-model="text" placeholder="commentaire"></b-form-input>
    <b-button variant="primary">Primary</b-button>

  </div>
</template>

<script>
import PostCard from "../components/postCard.vue";
import PostDetail from "../components/postDetail.vue";


export default {
  name: "post",
  components: {
    PostCard,
    PostDetail
  },
  data(){
    return{
      commentires: [
        'a',
        'b',
        'v'
      ]
    }
  }
};
</script>

<style scoped>

.form-input {
  margin : 30px;
  padding: 20x;
  display: block;
}



</style>