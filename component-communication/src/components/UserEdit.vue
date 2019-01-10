<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{age}}</p>
        <button @click="changeAge()">changeAge</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default{
        data: function() {
            return {
                age: 27
            };
        },
        methods: {
            changeAge(){
                this.age = 35;
                //eventBus.$emit('emit-name-change', this.age);
                eventBus.changeAge(this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
