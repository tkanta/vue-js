<template>
    <p>Counter is: {{ doubleCounter }}</p>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER
            })
        }
        //props: ['counter']
        
        /*computed: mapGetters([
            'doubleCounter'
        ])*/

         /*{

           counter() {
                return this.$store.getters.doubleCounter;  
            }
        }*/
    }
</script>