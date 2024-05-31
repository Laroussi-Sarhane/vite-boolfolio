

<script>
import axios from 'axios';
export default {
methods:{
  getApi(){
    console.log('get Api');
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(result=>{
      console.log(result.data);
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
 </div>
  
</template>

<style>

</style>