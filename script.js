let btnStart = document.querySelector('.start_restart')
let container = document.querySelector('.container')
let scoreContainer = document.querySelector('.score')
let timeContainer = document.querySelector('.time')
const son = new Audio('ShootGun.mp3')
const sonM = new Audio('mortMonstre.mp3')
const over = new Audio('gameOver.mp3')
btnStart.onclick = ()=> {
    let score = 0
    // let time = prompt("emtrer votre temps \n de preference inférieur à 25")
    //  time = Math.abs(time)
    let time = 15
    container.innerHTML = ''
    let interval = setInterval( function showTarget(){
    let target = document.createElement('img')
    target.id = 'target'
    target.src = 'image.png'
    container.appendChild(target)
     target.style.top = Math.random() * (400 - target.offsetHeight)+'px'
      target.style.left = Math.random() * (500 - target.offsetWidth)+'px'

      setTimeout(
        ()=> {
           target.remove()
        },2000
      )
      target.onclick = ()=> {
        score++
        target.style.display = 'none'
        son.currentTime = 0
        son.play()
        sonM.currentTime = 0
        sonM.play()
      }
      time--
      scoreContainer.innerHTML = `Score :${score}`
      timeContainer.innerHTML = `time :${time}`
      if(time == 0) {
        clearInterval(interval)
        container.innerHTML = ' <h1 style= "color:#ffff">GAME OVER </h1>'
        over.currentTime = 0
        over.play()
      }
    }, 1000);
}