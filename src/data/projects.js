import minesweeperImg from '/minesweeper.png'
import pedalsupplyImg from '/pedalsupply.png'
import battleshipImg from '/battleship.png'
import resumeTool from '/resumeTool.png'
import portfolioImg from '/portfolio.png'

const projectData = [
    {
        name: 'MINESWEEPER 95',
        description: 'is an online Minesweeper game built in the classic Windows 95 style. The site uses <span>Firebase</span> for the backend and authentication, and a <span>NoSQL database</span>. The frontend uses <span>React</span> and <span>React Router</span>. A challenge I overcame in building this game was implementing the breadth-first flood fill algorithm for recursively revealing empty cells. I had a lot of fun making this - give it a try!',
        img: minesweeperImg,
        demoLink: 'https://minesweeper95-eb7bb.web.app/',
        gitHub: 'https://github.com/ianvei/minesweeper-95',
        alt: 'minesweeper game, with a windows 95 task bar on the bottom of the screen, and a popup on the right containing user information',
    },
    {
        name: 'PEDALSUPPLY',
        description: 'is an ecommerce store built with <span>React</span>, <span>React Router</span>, <span>Context API</span> and <span>Reducers</span> to handle state across the entire application. The store is completely responsive, allowing for a seamless experience on Mobile or Desktop. The application’s routing uses a hash router, and is hosted on github pages',
        img: pedalsupplyImg,
        demoLink: 'https://ianvei.github.io/ecommerce/',
        gitHub: 'https://github.com/ianvei/ecommerce',
        alt: 'homepage of a guitar pedal store, featuring a mountain scene in the background and a logo that reads pedal supply',
    },
    {
        name: 'RESUME TOOL',
        description: "is a tool created with <span>React</span>. This project functioned as a way to practice getting and setting state reactively using form data, and also as a way to assist my friends with creating resumes. In my internship with the Haskayne School of Business I had the opportunity to produce a <a href='https://www.youtube.com/watch?v=hi6HDjpyUnY&list=PLij2g4WVIYc13zBFHFejMWgSv7JAaNosc' target='_blank'>series of video interviews with a recruitment professional</a>, and I wanted to translate these best-practices into a web application that my friends could use to create their CV. <strong>COMING SOON:</strong> Exporting to PDF functionality",
        img: resumeTool,
        demoLink: 'https://ianvei.github.io/cv-react/',
        gitHub: 'https://github.com/ianvei/cv-react',
        alt: 'a screenshot of a CV website, with sections name, summary, work experience, volunteer experience, contact, skills, and education.'
    },
    {
        name: 'BATTLESHIP',
        description: 'is a game created with 100% <span>vanilla JavaScript</span>, adhering to an <span>object oriented</span> design pattern. Before jumping into a framework such as Vue or React, I wanted to make sure that my vanilla JavaScript skills were at a level where I felt comfortable producing <span>platform-agnostic</span> code. This project is the result of many smaller projects practicing <span>DOM manipulation</span> and component creation without a front-end framework.',
        img: battleshipImg,
        demoLink: 'https://ianvei.github.io/battleship/',
        gitHub: 'https://github.com/ianvei/battleship',
        alt: 'a battleship game, with two grids of cells and a pixel-art smiling face in the middle.'
    },
    {
        name: 'PORTFOLIO',
        description: "is this website! This site is created using <span>Vue</span>, and handles routing with <span>Vue Router</span>. This site is <span>mobile responsive</span>, and functions both as a way to showcase my projects, and as a great way to get comfortable with designing web applications in Vue. I used the <span>Composition API</span> to handle component creation, as the workflow was very familiar coming from React. Please check out my <a href='https://github.com/ianvei' target='_blank'>github profile</a> for even more projects that didn't make it here!",
        img: portfolioImg,
        demoLink: 'https://ianvei.github.io/battleship/',
        gitHub: 'https://github.com/ianvei/portfolio-vue',
        alt: 'a battleship game, with two grids of cells and a pixel-art smiling face in the middle.'
    },
];

export default projectData;