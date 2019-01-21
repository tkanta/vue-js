<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <hr>
    <p v-if="email">your email id : {{ email}}</p>
    <p v-if="country">your country is : {{country}}</p>
  </div>
</template>

<script>
import axios  from 'axios';

export default {
    computed :{
       email () {
          return !this.$store.getters.getUser ? false : this.$store.getters.getUser.email
       },
       country(){
         return !this.$store.getters.getUser ? false : this.$store.getters.getUser.country ;
       }
    },
    created() {
      this.$store.dispatch('fetchUser');
    }
    /*data(){
      return {
        email: '',
        country: ''
      }
    },
    created() {
      axios.get('/users.json')
      .then(res => {
         const data = res.data;
         const users = [];
         for(let key in data){
           const user = data[key];
           user.id = key;
           users.push(user);
           console.log(users);
           this.email = users[0].email;
           this.country = users[0].country;
         }
      })
      .catch(err => console.log(err)); 

    }  */ 
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>