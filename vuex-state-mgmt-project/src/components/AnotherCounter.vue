<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:10, duration:1000})">AnotherIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:10, duration:1000})">AnotherDecrement</button>
    </div>
</template>

<script>
    //import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement', 'asyncDecrement'
            ])
            /*...mapMutations([
                'increment', 'decrement'
            ])*/

            /*increment() {
                //this.$emit('updated', 1);
                //this.$store.state.counter++;
                this.$store.commit('increment');
            },
            decrement() {
                //this.$emit('updated', -1);
                //this.$store.state.counter--;
                this.$store.commit('decrement');
            }*/
        }
    }
</script>