<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="home">
    <div class="bg">
      <img src="~@/images/4444.jpg" alt="background picture">
      
    </div>
    <div class="title">
      <HelloWorld msg="清華藝術學院"/>
    </div>
    <div class="title-shadow">
      <h1>清華藝術學院</h1>
    </div>
    <div class="button">
      <a href="/About.vue">Click</a>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style>
a {
  text-decoration: none;
  color: rgba(34, 0, 49, 0.65);
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 75%;

}
.bg img {
  min-height: 100%;
  width: 100%;
}

.title {
  letter-spacing: 15px;
  top: 10vh;
  left: 21vw;
  z-index: 100;
  display: inline-block;
  margin: 0 0.5rem;
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.7s; /* don't forget to set a duration! */
  position: relative;
}
.title-shadow {
  font-size: 43px;
  color:rgba(42, 0, 54, 0.25);
  letter-spacing: 15px;
  top: 12vh;
  right: 18%;
  z-index: 90;
  display: inline-block;
  margin: 0 0.5rem;
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.7s; /* don't forget to set a duration! */
  position: relative;
}
.button {
  background-color: rgba(255, 255, 255, 0.6);
  top: 26vh;
  left: 720px;
  height: 90px;
  width: 90px;
  text-align: center;
  font-size: 27px;
  font-family: fantasy;
  color: rgba(34, 0, 49, 0.65);
  line-height: 90px;
  border-radius: 100%;
  position: relative;
  margin: 0 0.5rem;
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.7s; /* don't forget to set a duration! */
}
</style>

<!--
  background-image: url("~@/images/4444.jpg");
-->

<!-- 
  background gradient:
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#8b2fed+0,e064bf+30,ffb74c+66,ffd089+100 */
  background: #8b2fed; /* Old browsers */
  background: -moz-linear-gradient(45deg,  #8b2fed 0%, #e064bf 30%, #ffb74c 66%, #ffd089 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg,  #8b2fed 0%,#e064bf 30%,#ffb74c 66%,#ffd089 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg,  #8b2fed 0%,#e064bf 30%,#ffb74c 66%,#ffd089 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8b2fed', endColorstr='#ffd089',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
-->