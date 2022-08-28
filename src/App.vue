<script setup>
import HeaderPortfolio from './components/HeaderPortfolio.vue'
import HomeContent from './components/HomeContent.vue'


</script>

<template>
  
  <div class="body-content">
    <HeaderPortfolio />
    <RouterView />
    <!-- <HomeContent /> -->
  </div>

</template>

<style scoped>


.body-content {
  width: 100vw;
  /* height: 100vh; */
  background-attachment: fixed;
  background-image: url('/public/0030.jpg');
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;

}




</style>
