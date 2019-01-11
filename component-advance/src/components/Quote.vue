<template>
  <div>
      <!--<p>A wonderful Quote!!</p> -->
      <div>
          <slot name='title'></slot>
          <span><slot name='subtitle' style="color: #ccc">sub title</slot></span>
      </div>
      <hr>
      <div>
          <slot></slot>
      </div>
      

  </div>
</template>

<script>
export default {

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
