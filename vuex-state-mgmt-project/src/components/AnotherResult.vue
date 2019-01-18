<template>
    <p>Another Counter is: {{ doubleCounter }}</p>
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
        /*computed: {
            ...mapGetters([
            'doubleCounter'
            ])
        }*/
        //props: ['counter']
        /*computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }*/
    }
</script>