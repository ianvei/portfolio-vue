<template>
    <header>
        <img :src="ianLogo" alt="">
        <div class="header-links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/work">WORK EXPERIENCE</router-link>
            <router-link to="/projects">PROJECTS</router-link>
        </div>
    </header>
</template>


<script setup> 
import ianLogo from '/ianlogo.png'

</script>


<style scoped>
header {
    display: inline-flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    gap: 1.5%;
    position: sticky;
    top: 0;
}

.header-links {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
}

a:last-child {
    margin-right: 5%;
}

img {
    max-width: 5%;
    padding-top: 1%;
    padding-left: 1%;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    max-width: fit-content;
}

a:hover {
    border-bottom: 1px solid black;
}



</style>