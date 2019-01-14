<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpper | toLower}}</p>
                <p>{{ upperText | toLower }}</p>
                <input type="text" v-model='fruitText'>
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {FruitMixins} from './FruitMixins';

    export default {
        mixins: [FruitMixins],
        data() {
            return {
                text: 'A text to test upper case',
                upperText: 'A TEXT TO TEST LOWER CASE',
            };
        },
        filters: {
            toUpper(value) {
                return value.toUpperCase();
            }
        },
        components: {
            'app-list': List
        }
    }
</script>

<style>

</style>
