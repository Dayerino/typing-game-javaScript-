//attempt 2, make it using for loop
const button = document.getElementById("btn");
const stopButton = document.getElementById("stopBtn");
const word = document.getElementById("word");
const screen = document.getElementById("screen");
const words = ["gamer","pro","bored","kek","lol", "coding","steam","march","words","idk","epic"]
const userInput = document.getElementById("input");
const counter = document.getElementById("counter");
const animationSpeed = ["animate--fast", "animate--slow", "animate--verySlow", "animate--veryFast","animate"]
const highScoreE = document.getElementById("highscore");
function getRandomWord(){ 
    let randomWord = words[Math.floor(Math.random() * words.length)]
    word.innerHTML = randomWord;
}

//important! reset the game state after a fail!!!!!!!!!!!!! (donzooooooo)
let number = 0
let highScore = 0
function countUp(){
    number++;
    counter.innerHTML = number;
    }

let isGameOver = true;
//dont forget to fetch the fucking highScore from id(done)
function resetCount(){
    number = 0;
    counter.innerHTML = number;
}
function resetAnimation(){
    let chooseSpeed = animationSpeed[Math.floor(Math.random() * animationSpeed.length)]
    let randomSpeed = chooseSpeed;
    console.log(randomSpeed);
    word.classList.remove("falling", randomSpeed);
    word.offsetHeight;
    word.classList.add("falling", randomSpeed);
}
function randomPosition(){
    const maxWidth = 832.012;
    const randomLocation = Math.floor(Math.random()* maxWidth);
    word.style.left = `${randomLocation}px`;
}

button.addEventListener("click", event =>{
    getRandomWord();
    isGameOver = false
    console.log("click");
    randomPosition();             
    resetAnimation();
    resetCount();
    })               //fixed the big issue by actually closing the event listener!!!!!!!!
    word.addEventListener("animationend",() =>{
        console.log("animation ended");
        resetCount();
        word.classList.remove("falling");
        console.log("nigga you slow as shit");
        isGameOver = true
    })
    userInput.addEventListener("keyup", e =>{
        if (e.key === "Enter"){
            if(userInput.value == word.innerHTML){
                //number++;         //reset this (nvm)
                //counter.innerHTML = number;     //keep this as long as its higher than number (nvm)
                isGameOver = false
                getRandomWord();
                userInput.value = "";
                countUp();
                resetAnimation();
                randomPosition();//figure out how to remove & readd the class WITHOUT making a new one
                                   //DONE YIPPIE
                console.log("wow so smart")
                
            } else //if (userInput.value != word.innerHTML)
                {
                isGameOver = true
                word.classList.remove("falling");
                userInput.value = "";
                console.log("you cant write for shit")
                if (number <= highScoreE.innerHTML){
                return
            } else if (number>= highScoreE.innerHTML){
                highScoreE.innerHTML = counter.innerHTML
            }
                //resetCount();
            }
            userInput.value = "";
        }
    })
//})
// high score tracker(donezo bozo)
// proper game over(game over text at least)
//loop the animation(done, different solution)
//move the words to change the location (done)
// make a killbox (done!!!!!)
//fun but not requiered : coloring the letters as they are pressed
//simplify, before adding animations focus on words changing and the user input being recognized as correct or false
//start the game by having the player type "start"(might conflict with the enter event(can remove the enter and just have it check the value of the input(
// might not be doable)))
//today: resume work on the high score tracker (LETS HECKING GOOOOOOOOOOOOOOOOOOOOOOOOOO)
// for now done, start something new and upload this to github i guess