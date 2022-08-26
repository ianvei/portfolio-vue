<template>
    <header>
        <img :src="ianLogo" alt="">
        <div class="header-links">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">WORK EXPERIENCE</a>
            <a href="">PROJECTS</a>
        </div>
    </header>
</template>


<script setup> 
import ianLogo from '../../public/ianlogo.png'

</script>


<style scoped>
header {
    display: inline-flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    gap: 1.5%;
}

.header-links {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

a:last-child {
    padding-right: 5%;
}

img {
    max-width: 5%;
    padding-top: 1%;
    padding-left: 1%;
    cursor: pointer;
}




</style>