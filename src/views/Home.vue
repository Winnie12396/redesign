<template>
  <div class="home">
    <img src="../images/4444.jpg" alt="background">
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
