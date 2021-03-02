<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Posts :wpisy="data" />
    <Comments :komentarze="dComment" />
    <Todos :todo="todo" />
  </div>
</template>

<script>
import get from "../service/get.service";
import Posts from "./Post";
import Comments from "./Comment";
import Todos from "./Todo";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Posts,
    Comments,
    Todos,
  }, 
  data(){
    return{
      opis: "To jest moja pierwsza zmienna w vue.js",
      passengers : [
    {
    name : "Jan",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "xd",
    isDog :  true,
    sex :  "xd"   
    }
    ],
    data: [],
    dComment: [],
    todo: [],
    };
  },
  created(){
    this.start();
  },
  destroyed(){
  },
  methods:{
    async  start(){
      await this.getData();
      await this.getUserNames();
    },
    async getData(){
      let respons = await get.getPosts();
      this.data = respons.data;
      let comment = await get.getComments();
      this.dComment = comment.data;
      let todo = await get.getTodos();
      this.todo = todo.data;
    },
    getUserNames(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.women {

  color: red;

}

.xd {

  color: rgb(0, 38, 255);

}

</style>
