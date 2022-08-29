<template>
<div class="home-cont">
    <div class="home-text">
        <h1>Hi, I'm <span>Ian.</span></h1>
        <h3>A <span>Front-End Developer.</span></h3>
    </div>
    <div class="home-links">
        <div class="link-cont">
            <img :src="gitHub" alt="">
            <img :src="linkedIn" alt="">
        </div> 
    </div>
</div>    
</template>

<script setup>
import gitHub from '/githublogo.png'
import linkedIn from '/linkedIn.png'


</script>

<style scoped>

.home-cont {
    width: 100%;
    height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}
.home-text {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
}

h1 {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 200px;
    margin: 0;
}

h3 {
    font-family: 'Nunito Sans';
    font-style: italic;
    font-weight: 400;
    font-size: 80px;
    margin: 0;
}

span {
    color: #216EF7;
}

.link-cont {
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-radius: 21px;
    gap: 20px;
    background-color: white;
    /* min-width: 11%;
    max-width: 11%; */
    /* margin-top: 2%; */
    /* flex-grow: 0; */
    max-width: 150px;
}

.home-links {
    display: flex;
    justify-content: flex-end;
    width: 99%;
    margin-right: 20%;
    /* margin-bottom: 1%; */
}

img {
    max-width: 40%;
    cursor: pointer;
}

@media only screen and (min-width: 1900px) {

    .home-cont {
        height: 92vh;
    }
    h1 {
        font-size: 300px;
    }
}


@media only screen and (max-width: 850px) { 
    .home-cont {
        height: 98vh;
        gap: 5%;
        justify-content: center;
    }

    .home-text {
        height: auto;
    }

    h1 {
        font-size: 70px;
    }

    h3 {
        font-size: 30px;
    }

    h1, h3 {
        text-align: center;
    }

    .home-links {
        justify-content: center;
    }

}

</style>