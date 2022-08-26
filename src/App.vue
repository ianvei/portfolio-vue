<script setup>
import HeaderPortfolio from './components/HeaderPortfolio.vue'
import HomeContent from './components/HomeContent.vue'


</script>

<template>
  
  <div class="body-content">
    <HeaderPortfolio />
    <HomeContent />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.body-content {
  width: 100vw;
  height: 100vh;
  background-image: url('/public/0030.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;

}



</style>
