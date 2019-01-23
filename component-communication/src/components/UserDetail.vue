<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Details : {{switchName()}}</p>
        <p>User Age : {{age}}</p>
        <button @click="resetName()">resetName</button>
        <button @click="resetFn">resetName</button>

    </div>
</template>

<script>
    import {eventBus} from '../eventbus';
    export default {
        props: {
            myName: {
                type: String,
                required: true
            },
            resetFn: Function    
        },
        data: function() {
            return {
                age: 27
            };
        },
        methods: {
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'KailashKanti';
                this.$emit('name-change-event', this.myName);
            }
        },
        created() {
            eventBus.$on('emit-name-change', (userAge) => {
                this.age = userAge;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
