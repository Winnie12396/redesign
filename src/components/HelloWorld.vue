<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
  
</template>
<!-- for jquery try
  <div class="animationtry"></div> -->

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // $("nav").click()  --?
  
}

</script>
<!-- 
  import $ from 'jquery'
  method: {
    $function(){
      $("hello").click(function(){
        $("animationtry").addClass("animated  rotateIn");               
      })
    }
  }      initially in <script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 80px;
  color:rgb(82, 23, 0);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  background-color: transparent;
  z-index: 100;
  position: fixed;
  
}



</style>
<!-- for jquery try
  .animationtry {
  background-color: aqua;
  height: 30vh;
}-->
