<template>
<div class="work-cont">
    <div class="work-content">
        <div class="work-card" v-for="job in workExperienceData">
            <div class="image-cont">
                <img :src="job.img" alt="">
            </div>
            <div class="text-cont">
                <div class="title">
                    <h1>{{job.organization}}</h1>
                    <h3>{{job.title}} ({{job.location}})</h3>
                </div>
                <p class="date">{{job.date}}</p>
                <p v-html="job.description" class="description"></p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import workExperienceData from '../data/workexperience';

</script>

<style scoped>
.work-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-bottom: 1000px; */
    height: 91vh;
    /* margin-top: 1%; */
}

.work-card {
    display: grid;
    grid-template-columns: 0.3fr 5fr;
    gap: 1%;
}

.work-content {
    width: 90%;
    background-color: white;
    padding: 3%;
    /* padding-left: 3%;
    padding-right: 5%; */
    border-radius: 11px;
}

img {
    width: 80%;
    padding-top: 9%;
}

.title {
    display: inline-flex;
    align-items: baseline;
    width: 100%;
    gap: 0.5%;
}

.image-cont {
    width: 100%;
}

h1 {
 margin: 0;
 font-weight: 600;
}

h3 {
    margin: 0;
    height: 100%;
    font-style: italic;
    font-weight: 400;
    /* font-size: 26px; */
}

.date {
    color: #216EF7;
    font-weight: 400;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 0;
}

.description {
    color: #4D4D4D;
    font-style: italic;
    font-weight: 400;
    width: 90%;
    margin-top: 10px;
}

:deep span {
    font-weight: 700;
    /* color: #216EF7; */
    /* color: black; */
}


</style>