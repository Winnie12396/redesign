<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
  <div class="animationtry"></div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // $("nav").click()
  method: {
    $function(){
      $("hello").click(function(){
        $("animationtry").addClass("animated  rotateIn");               
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 80px;
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
  background-color: burlywood;
}
.animationtry {
  background-color: aqua;
  height: 30vh;
}
</style>
