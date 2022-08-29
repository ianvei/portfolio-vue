<template>
    <header>
        <img :src="ianLogo" alt="">
        <div class="header-links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/work">WORK EXPERIENCE</router-link>
            <router-link to="/projects">PROJECTS</router-link>
        </div>
        <div class="menu" @click="toggleVisible()">
            MENU
        </div>
    </header>
    <div class="hidden-nav" v-bind:style="[visible? {'visibility': 'visible', 'display': 'block'}: {'visibility': 'hidden', 'display': 'none'}]">
        <div class="hidden-menu">
            <h3>MENU</h3>
            <p class="close" @click="toggleVisible()">X</p>
        </div>
        <div class="hidden-links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/work">WORK EXPERIENCE</router-link>
            <router-link to="/projects">PROJECTS</router-link>
        </div>
        <div class="hidden-socials">
            <img :src="gitHub" alt="">
            <img :src="linkedIn" alt="">
        </div>
        <p class="secret-text">Thank you for checking out my portfolio :)</p>
    </div>
</template>


<script setup> 
import ianLogo from '/ianlogo.png'
import { ref } from 'vue'
import gitHub from '/githublogo.png'
import linkedIn from '/linkedIn.png'

const visible = ref(false);

const toggleVisible = () => {
    visible.value = !visible.value
    console.log(visible.value)
}

</script>


<style scoped>

.secret-text {
    font-size: 10px;
    font-style: italic;
    padding-top: 100px;
}
.hidden-menu {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.hidden-nav {
    padding: 5%;
}

.hidden-links {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-evenly;
    text-decoration: underline;
}

.hidden-socials > img {
    display: flex;
    width: 100%;
    max-width: 15%;
    gap: 20px;
}

.hidden-socials {
    width: 100%;
    display: inline-flex;
    gap: 20px;
}


header {
    display: inline-flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    gap: 1.5%;
    position: sticky;
    top: 0;
}

.close {
    font-size: 30px;
    font-weight: bolder;
}

.header-links {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
}

.menu {
    visibility: hidden;
    display: none;
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


/* .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
} */


a:hover {
    border-bottom: 1px solid black;
}

@media only screen and (max-width: 850px) {
  .header-links {
    display: none;
  }

  .hidden-nav {
    position: fixed;
    width: 80vw;
    height: 100vh;
    right: 0;
    top: 0;
    background: white;
    color: #000;
    z-index: 8888;
    overflow: hidden;
    visibility: hidden;
    display: none;
    /* transition: transform .5s cubic-bezier(.25,.46,.45,.94);
    transform: translate(100%); */
}

    .menu {
    visibility: visible;
    display: block;
}

}

</style>