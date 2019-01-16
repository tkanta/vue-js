<template>
<div>
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded with ID : {{ $route.params.id}}</p>
    <router-link :to="link" tag="button"  class="btn btn-primary">Edit User</router-link>
</div>
    
</template>

<<script>
export default {
  data (){
      return {
          link: {
              name: 'userEdit', 
              params : {id : this.$route.params.id}, 
              query: {locale: 'en', q: 100},
              hash: '#data'
            }
      }
  },
  beforeRouteEnter(to, from, next){
      if(true){
          console.log("inside User detail page ");
          next();
      }else{
          next(false);
      }
  }
}
</script>
