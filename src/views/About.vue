<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="home2">
    <div class="bg2">
      <img src="~@/images/4444.jpg" alt="background picture">
    </div>
    <div class="bgline">
      <img src="~@/images/line.png" alt="background decoration">
    </div>
    <div class="ball ball1">
      <a href="">關於學院</a>
    </div>
    <div class="ball1detail">
      <p>學院簡介</p>
      <p>學院師資</p>
      <p>學院規章</p>
      <p>姐妹校</p>
    </div>
    <div class="ball ball2">
      <a href="">招生訊息</a>
    </div>
    <div class="ball ball3">
      <a href="">藝院活動</a>
    </div>
    <div class="ball3detail">
      <p>榮譽榜</p>
      <p>活動花絮</p>
      <p>藝院影音</p>
      <p>藝院學報</p>
    </div>
    <div class="ball ball4">
      <a href="">聯絡資訊</a>
    </div>
  </div>
</template>

<style>
  .home2 {
    display: flex;
  }
  .bg2 {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 75%;

  }
  .bg2 img {
    justify-content: center;
    min-height: 100%;
    width: 100%;
  }
  .bgline {
    position: absolute;
    left: 25vw;
    top: 0;
    z-index: 10;
  }
  .bgline img {
    min-height: 100%;
    width: 100%;
    height: 100%;
  }
  .ball {
    text-align: center;
    line-height: 150px;
    font-size: 30px;
    color: rgba(34, 0, 49, 0.7);
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 100%;
    position: absolute;
    
  }
  .ball1 {
    top: 50vh;
    left: 19vw;
    text-align: center;
    margin: 0 0.5rem;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
  }
  .ball1detail {
    width: 100px;
    position: relative;
    font-size: 25px;
    top: 33vh;
    left: 140px;
    text-align: center;
    margin: 0 0.5rem;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
  }
  .ball2 {
    opacity: 0%;
    top: 24vh;
    right: 16vw;
    margin: 0 0.5rem;
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
  .ball3 {
    opacity: 0%;
    top: 60vh;
    right: 20vw;
    margin: 0 0.5rem;
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .ball3detail {
    opacity: 0%;
    width: 100px;
    position: relative;
    font-size: 25px;
    top: 43vh;
    left: 73vw;
    text-align: center;
    margin: 0 0.5rem;
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .ball4 {
    opacity: 0%;
    top: 100vh;
    right: 36vw;
    margin: 0 0.5rem;
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.3s; /* don't forget to set a duration! */
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInRight{
    0%{
      opacity: 0%;
    }
    100%{
      opacity: 100%;
    }
  }




</style>
