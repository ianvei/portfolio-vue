<template>
<h1 class="title">PROJECTS</h1>
<div class="project-cont">
    
    <div class="project-card" v-for="project in projectData">
        <div class="image-btn-cont">
            <img :src="project.img" :alt="project.alt">
            <div class="button-links">
                <a :href="project.demoLink" target="_blank">LIVE DEMO</a>
                <a :href="project.gitHub" id="github" target="_blank">GITHUB <img :src="githublogo" id='githublogo' alt=""></a> 
            </div>
        </div>
        <div class="text-content">
            <h1>{{project.name}}</h1>
            <p v-html='project.description'></p>
        </div>
    </div>
</div>

</template>

<script setup>
import projectData from '../data/projects';
import githublogo from '../../public/githublogo.png'

</script>

<style scoped>
.project-cont {
    display: flex;
    flex-direction: column;
    padding: 1.5%;
    align-items: center;
    justify-content: center;
    gap: 80px;
}

.button-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10%;
}

a {
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3.5rem;
    width: 40%;
    background-color: #216EF7;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    border: 2px solid #216EF7;
}

p {
    font-size: 1.5rem;
}

.text-content > h1 {
    font-size: 3rem;
}

a:hover, #github:hover {
    background-color: white;
    color: black;
    /* filter: invert(1); */
   
}

#github {
    background-color: black;
    border: 2px solid black;
     display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 25%;
}

#github:hover > img {
    filter: invert(0);
}

.project-card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    height: 25rem;
    width: 100%;
}

img {
    max-width: 100%;
    border-radius: 11px;
}

.image-btn-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    width: 45%;
    height: 100%;
    gap: 3%;
    border-radius: 11px;
}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    height: 100%;
    background-color: white;
}

.text-content > h1 {
    margin: 0;
}

.text-content > p {
    align-self: flex-end;
    height: 100%;
    margin: 0;
}

.image-btn-cont, .text-content {
    padding: 1.5%;
}

.image-btn-cont, .text-content, img {
     border-radius: 11px;
}

.title {
    align-self: flex-start;
    padding-left: 2.5%;
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #216EF7;
}

#githublogo {
    width: 20%;
    filter: invert(1);
}

::v-deep span {
    font-style: italic;
    font-weight: 700;
    color: #216EF7;
}

.project-card:last-child {
    margin-bottom: 1.5%;
}

</style>