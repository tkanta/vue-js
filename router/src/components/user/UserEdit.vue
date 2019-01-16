<template>
<div>
    <h3>Edit the User : {{ $route.params.id }}</h3>
    <p>locale : {{$route.query.locale}}</p>
    <p>Analytics : {{$route.query.q}}</p>
    <hr>
    <button class="btn, btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 100px"></div>
    <p id="data">some extra data!!</p>
</div>
    
</template>

<script>
export default {
  data(){
      return {
          confirmed: false
      }
  },
  beforeRouteLeave(to, from, next){
      console.log('before route leave in Edit page')
      if(this.confirmed){
          next();
      }else{
          if(confirm('Are you sure ?')){
              next();
          }else{
              next(false);
          }
          
      }
  }
}
</script>
