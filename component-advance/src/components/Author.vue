<template>
  <div>
      <!--<p>A wonderful Quote!!</p> -->
      <div>
          <slot name='author'></slot>
          <span><slot name='subtitle' style="color: #ccc">sub title</slot></span>
          <button @click="clickme()">clickme</button>
          <p>{{counter}}</p>
      </div>
    <hr>
      <div>
          <slot></slot>
          <p>*****{{test}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['test'],
    data: function(){
        return {
            counter : 0
        };
    },
    methods : {
        clickme: function(){
            this.counter++
        }
    },
    activated(){
        console.log('atcivated');
    },
    deactivated(){
        console.log('deactivated');
    }
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }
</style>
