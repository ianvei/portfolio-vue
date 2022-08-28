<template>
<div class="about-cont">
    <h1 class="title">ABOUT ME</h1>
    <div class="about-content">
        <h2>BIO</h2>
        <div class="profile">
            <!-- <img :src="profileImg" alt=""> -->
            <p>I am a business student from Calgary Alberta, graduating in December 2022. In the summer of 2022 I moved to Toronto to pursue an opportunity at TD Wealth, and to try as many new restaurants as one person possibly can in 4 months. I have always had a love for technology, whether it be trying to create video games in elementary school, or writing custom patches for music production hardware and software in high school. To support my business education I thought it would be a good idea to learn Python for data analysis, and immediately fell in love with programming. This lead me down a path of learning HTML and CSS for web scraping, and then ultimately realizing that what I love most is creating things, and writing programs that are interactive, and that other people can use to solve their problems. Ever since I have been obsessively learning web-development, and have developed a strong foundation of front-end frameworks and technologies to create accessible, reactive applications. My hope is to transfer my business knowledge to the domain of web development, delivering high-quality code that solves business problems.</p>
        </div>
        <p></p>
        <div class="skills">
            <h2>SKILLS</h2>
            <div class="skill-icons">
                <div class="text-icon">
                    <i class="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div class="text-icon">
                    <i class="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div class="text-icon">
                    <i class="devicon-javascript-plain"></i>
                    <p>JS</p>
                </div>
                <div class="text-icon">
                    <i class="devicon-python-plain"></i>
                    <p>PYTHON</p>
                </div>
                <div class="text-icon">
                    <i class="devicon-react-original"></i>
                    <p>REACT</p>
                </div>
                <div class="text-icon">
                    <i class="devicon-vuejs-plain"></i>
                    <p>VUE</p>
                </div>
                

            </div>
        </div>  
        
    </div>

</div>

</template>

<script setup>
import profileImg from '/profilepic.jpg'

</script>

<style scoped>
.about-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-bottom: 1000px; */
    height: 91vh;
    /* margin-top: 1%; */
}

i {
    color: #216EF7;
    font-size: 80px;
}

.text-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skill-icons {
    display: inline-flex;
    width: 80%;
    justify-content: space-between;
}

.profile > p {
    font-size: 22px;
    font-style: italic;
    margin: 0;
    text-align: justify;
    padding-right: 1%;
}

h2 {
    margin: 0;
    margin-bottom: 10px;
}

.profile {
    display: inline-block;
    gap: 3%;
    flex-shrink: 0;
}

img {
    width: 20%;
    height: 20%;
    border-radius: 11px;
    flex-shrink: 0;
    float: left;
    margin-right: 1.5%;
}

.about-content {
    width: 90%;
    background-color: white;
    padding: 3%;
    /* padding-left: 3%;
    padding-right: 5%; */
    border-radius: 11px;
    margin-bottom: 1.5%;
}

.title {
    align-self: flex-start;
    padding-left: 2.5%;
    font-size: 4rem;
    margin-bottom: 1rem;
    margin-top: 0;
    color: #216EF7;
}

@media only screen and (max-width: 850px) {
  .text-content {
    display: none;
  }
}

</style>