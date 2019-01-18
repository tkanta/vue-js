<template>
    <p>Another Counter is: {{ doubleCounter }}</p>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
            'doubleCounter'
            ])
        }
        //props: ['counter']
        /*computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }*/
    }
</script>