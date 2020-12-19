<template>
  <div class="home">
    
    <HelloWorld msg="清華藝術學院"/>
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
.home {
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: fixed;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#8b2fed+0,e064bf+30,ffb74c+66,ffd089+100 */
  background: #8b2fed; /* Old browsers */
  background: -moz-linear-gradient(45deg,  #8b2fed 0%, #e064bf 30%, #ffb74c 66%, #ffd089 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg,  #8b2fed 0%,#e064bf 30%,#ffb74c 66%,#ffd089 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg,  #8b2fed 0%,#e064bf 30%,#ffb74c 66%,#ffd089 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8b2fed', endColorstr='#ffd089',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */



}
</style>