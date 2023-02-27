'use strict'
let body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')

function startUp() {
    body.addEventListener('keyup', keyUp)
}

function keyUp(event) {
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

function animationZero() {
    let div = document.createElement('div')
    div.classList.add('animationZero')
    wrapper.append(div)

    setTimeout(() => {
        div.classList.add('changeZero')
    }, 100)

    setTimeout(() => {
        div.classList.remove('changeZero')
    }, 800)

    setTimeout(() => {
        div.classList.remove('animationZero')
    }, 1200)
}

function animationOne() {
    let div = document.createElement('div')
    div.classList.add('animationOne')
    wrapper.append(div)

    setTimeout(() => {
        div.classList.remove('animationOne')
    }, 2000)
}

function animationTwo() {
    let div = document.createElement('div')
    div.classList.add('animationTwo')
    wrapper.append(div)

    setTimeout(() => {
        div.classList.remove('animationTwo')
    }, 2000)
}

function animationThree() {
    // body.style.backgroundColor = "#191918";

    let div = document.createElement('div')
    div.classList.add('animationThree')
    wrapper.append(div)

    let div2 = document.createElement('div')
    div2.classList.add('face')
    div.append(div2)

    let div3 = document.createElement('div')
    div3.classList.add('circle')
    div2.append(div3)

    let div4 = document.createElement('div')
    div4.classList.add('face')
    div.append(div4)

    let div5 = document.createElement('div')
    div5.classList.add('circle')
    div4.append(div5)

    setTimeout(() => {
        div.classList.remove('animationThree', 'face', 'circle')
    }, 2000)

}

startUp()