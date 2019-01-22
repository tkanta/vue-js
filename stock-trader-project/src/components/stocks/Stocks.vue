<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"> </app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {

    /*data() {
        return {
            stocks: [
                {id: 1, name: 'BMW', price: 100},
                {id: 2, name: 'APPLE', price: 200},
                {id: 3, name: 'Google', price: 300},
                {id: 4, name: 'Twitter', price: 400}

            ]
        }
    },*/

    components: {
        appStock: Stock
    },
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script>
