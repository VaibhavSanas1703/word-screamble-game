
const word = document.querySelector('#word');
const refreshBtn = document.querySelector('#refreshBtn');
const userWord = document.querySelector('#input');
const checkBtn = document.querySelector('#checkWord')
const showTime = document.querySelector('.time p span b');
const startBtn = document.querySelector('#startBtn');
let correctWord,timer;


// WHEN CLICK ANY BUTTONS
let buttonTap = new Audio("./assets/audio/Button.mp3")
let music = new Audio("./assets/audio/Music.mp3")

const initTimer = (maxTime) => {
     clearInterval(timer)
     timer = setInterval(() => {
          if(maxTime > 0){
               maxTime--;
               return showTime.innerHTML = `${maxTime}s`
          }
          alert(`Time off! ${correctWord.toUpperCase()} was the correct word`)
          clearInterval(timer);
          initGame()
     },1000)
}

const initGame = () => {
     initTimer(31);
     let randomWord = words[Math.floor(Math.random() * words.length)]
     let showWord = randomWord.toString().split('').sort().join('');
     word.innerHTML = showWord.toUpperCase();
     correctWord = randomWord;
     userWord.setAttribute('maxlength',correctWord.length)
     console.log(correctWord);
}

const checkWord = () => {
     let userWordValue = userWord.value.toLowerCase();
     if(userWordValue == correctWord.toLowerCase()){
          alert(`Congrats! ${correctWord.toUpperCase()} is a correct word`)
          userWord.value = ''
          initGame()
     }
     else if(!userWordValue){
          alert('Please enter word')
     }
     else{
          alert(`Oops! ${userWordValue.toLowerCase()} is not a correct word`)
          userWord.value = ''
     }
}

checkBtn.addEventListener('click', () => {
     checkWord()
     buttonTap.play()
})

refreshBtn.addEventListener('click',() => {
     initGame()
     buttonTap.play()
     music.play()
})
initGame()



