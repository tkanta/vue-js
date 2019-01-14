<template>
    
    <div>
               <h1>Filters & Mixins</h1>
                <input type="text" v-model='fruitText'>
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
    
    </div>
         
</template>

<script>
    import {FruitMixins} from './FruitMixins';
    export default {
        mixins: [FruitMixins]
    }
</script>

<style>

</style>
