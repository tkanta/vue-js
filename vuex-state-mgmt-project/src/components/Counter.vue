<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    //import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment', 'decrement'
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