<template>
    <div class="col-sm-6 col-md-5">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title"> {{stock.name}} <small>(Price: {{stock.price}})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="numner"
                           class="form-control"
                           placeholder="Quantity" 
                           v-model="quantity"
                           :class="{danger: insuffcientFunds}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                     @click="buyStock"
                    :disabled="insuffcientFunds || quantity <= 0 || isNaN(quantity)">
                    {{insuffcientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: Number(this.stock.price),
                quantity: Number(this.quantity)
            };
            this.$store.dispatch('buyStock', order);
            console.log(order);

        }
    },
    computed: {
        insuffcientFunds(){
            return this.quantity * this.stock.price > this.$store.getters.funds;
        }
    }
}
</script>

<style scoped>
    .danger { border: 1px solid red }
</style>
