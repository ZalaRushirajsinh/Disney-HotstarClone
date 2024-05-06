let movies = [
    {
        name:'IPL 2023: SHORR ON GAME ON',
        des:'Indian Priemere Leauge Starts on 31st MARCH at 7:30 pm only on Star Sports',
        image:'images/slider 2.PNG'
    },
    {
        name:'AUSTRALIA VS INDIA ',
        des:'2-1 AUS SNAP INDIAS WINNING, Australia ended indias bilateral winning streak at home..',
        image:'images/newslider.PNG'
    },
    {
        name:'POP KAUN',
        des:'The series revolves around the life of Sahil(Kunal Khemu), son of a Brij Kishore Trivedi(Johnny Lever), who is in love with a gangsters daughter Pihu(Nupur Sanon).',
        image:'images/slider 1.PNG'
    },
    {
        name:'ANGER TALES',
        des:'FOUR PEOPLE,FOUR STORIES AND ONE SOLUTION REVOLT!!',
        image:'images/AT.PNG'
    },
    {
        name:'luca',
        des:'',
        image:'images/slider 5.PNG'
    }
]

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // <div class="slider">
    //             <div class="slide-content">
    //                 <h1 class="movie-title">Loki</h1>
    //                 <p class="movie-des">Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.</p>
    //             </div>
    //             <img src="./images/slider 1.png" alt="">
    //         </div>
    
    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all element 
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting element classname 
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    
    sliders.push(slide);
    
    //adding sliding effect
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 3; i++){
    createSlide();
}

 setInterval( () =>{
     createSlide();
 }, 2800);

 // video cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// card sliders 

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width

    nxtBtns[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth - 100;
    })

    preBtns[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth + 100;
    })
})
