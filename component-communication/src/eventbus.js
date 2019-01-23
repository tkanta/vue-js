import Vue from 'vue';

export const eventBus = new Vue({
    methods: {
       changeAge(age) {
         this.$emit('emit-name-change', age);
       }
    }
  });