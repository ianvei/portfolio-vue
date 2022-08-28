<template>
<div class="work-cont">
    <div class="work-card" v-for="job in workExperienceData">
        <div class="image-cont">
        </div>
        <div class="text-cont">
            <div class="title">
                <h1>{{job.name}}</h1>
                <h3>{{job.title}} {{job.location}}</h3>
            </div>

            
        </div>
    </div>
</div>
</template>

<script setup>
import workExperienceData from '../data/workexperience';

</script>

<style>

</style>