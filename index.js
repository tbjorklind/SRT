'use strict'
let body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')

function startUp () {
  body.addEventListener('keyup', keyUp)
}

function keyUp (event) {
  let numberString = event.key
  let pressedNr = parseInt(numberString)
  switch (pressedNr) {
    case 0:
      animationZero()
      break
    case 1:
      animationOne()
      break
    case 2:
      animationTwo()
      break
    case 3:
      animationThree()
      break
    case 4:
      animationFour()
      break
    case 5:
      animationFive()
      break
    case 6:
      animationSix()
      break
    case 7:
      animationSeven()
      break
    case 8:
      animationEight()
      break
    case 9:
      animationNine()
      break
    default:
      break
  }
}

function animationZero () {
  let div = document.createElement('div')
  div.classList.add('animationZero')
  wrapper.append(div)

  setTimeout(() => {
    div.classList.add('changeZero')
  }, 200)

  setTimeout(() => {
    div.classList.remove('changeZero')
  }, 800)

  setTimeout(() => {
    div.classList.remove('animationZero')
  }, 1200)
}
startUp()
