<template>
   <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{quote}}</app-quote>
   </div>   
</template>

<script>
        import Quote from './Quote.vue'
        export default {
            props: ['quotes'],
            methods: {
                deleteQuote(index){
                    console.log("********"+index);
                    this.$emit('delete-quote-event', index);
                }
            },
            components:{
                'app-quote': Quote
            }

        }
</script>

<style>
    
</style>
