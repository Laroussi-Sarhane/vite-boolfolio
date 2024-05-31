

<script>
import axios from 'axios';
export default {
  data(){
    return{
      'posts':[],
    }

  },
methods:{
  getApi(){
    console.log('get Api');
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(result=>{
      this.posts= result.data
      console.log(this.posts);
    })
    .catch(error=>{
      console.log(error);
    })
  }
},
mounted(){
  this.getApi()
}
}
</script>

<template>
 <div class="main-wrapper">
  <h1>vite-boolfolio</h1>
  <h2>i miei post </h2>
  <div class="">
    <ul>
    <li v-for="post in posts" :key="post.response">{{ post.response }}</li>
    

  </ul>
  </div>
 </div>
  
</template>

<style>

</style>