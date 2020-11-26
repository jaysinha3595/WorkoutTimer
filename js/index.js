const workoutName = [
    'High Knees',
    'Low to High Plank',
    'Half Burpee',
    'Toe Touches',
    'Squat Jump',
    'Side Plank',
    'Alternate Lunges',
    'Jumping Jack',
    'Hip Thrust',
    'Butt Kicks'
];

///////////////////////
// DOM
const startBtn = document.querySelector(".btn-holder");
const timerHolder = document.querySelector(".timer-holder");
const time = document.querySelector('.timer-primary');
const nameHolder = document.querySelector(".name-holder");
const name = document.querySelector(".name");

const audio1 = document.querySelector("#a1");
const audio2 = document.querySelector("#a2");

function clock(){
    let d = -1000;
    let s = 1;
    let i=601;
    while(i--){
        setTimeout(()=>{
            if(s%(60*(Math.floor(s/60))+41)==0){
                audio1.play();
                console.log(`a1: ${s}`);
            }else if(s%(60*(Math.floor(s/60))+57)==0){
                audio2.play();
                console.log(`a2: ${s}`);
            }
            time.textContent = s%60;
            s+=1;
        }, d+=1000)
    }
}

function updateName(){
    const min = 10;
    let sec = min * 60;
    let delay = -60000;
    let i = 0;
    while(sec--){
        setTimeout(()=>{
           name.textContent = workoutName[i];
           i++;
        }, delay+=60000)
    }
}

startBtn.addEventListener('click', ()=>{
    startBtn.classList.add('startBtn');
    nameHolder.classList.add('nameHolder');
    timerHolder.classList.add('timeHolder');
    clock();
    updateName();
});


