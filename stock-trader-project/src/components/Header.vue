<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <strong class="nav navbar-text navbar-right">Total Funds : {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End Day</a></li>
        <li class="dropdown" :class="{open: isDropDownOpen}"
                    @click="isDropDownOpen = !isDropDownOpen">
          <a href="#" class="dropdown-toggle" 
                    data-toggle="dropdown" 
                    role="button" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >Save & Load<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
      

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import axios from 'axios';

export default {
   data(){
     return {
       isDropDownOpen : false
     }
   },
   computed: {
     funds(){
       return this.$store.getters.funds;
     }
   },
   methods: {
     endDay(){
       this.$store.dispatch('randomStocks');
     },

     saveData(){
       const data = {
         funds: this.$store.getters.funds,
         stocksPortfolio: this.$store.getters.stocksPortfolio,
         stocks: this.$store.getters.stocks
       };

       axios.put('data.json', data)
       .then(res => {
         console.log("#### response #####")
         console.log(res)
       })
       .catch(err => console.log(err));
     },
     //-------------- Load Data ------------
     loadData(){
          this.$store.dispatch('loadData');
     }
   }
}
</script>
