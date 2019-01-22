<template>
    <div class="col-sm-6 col-md-5">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title"> {{stock.name}} 
                <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="numner"
                           class="form-control"
                           placeholder="Quantity" 
                           v-model="quantity"
                           :class="{danger: insuffcientQuantity}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                     @click="sellStock"
                    :disabled="insuffcientQuantity || quantity <= 0 || isNaN(quantity)">
                    {{insuffcientQuantity ? "Not Enough Quantity" : "Sell"}}</button>
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
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: Number(this.stock.price),
                quantity: Number(this.quantity)
            };
            this.$store.dispatch('sellStock_Action', order);
            this.quantity = 0;
        }
    },
    computed: {
        insuffcientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    }
}
</script>

<style scoped>
 .danger { border: 1px solid red}
</style>
