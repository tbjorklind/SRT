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
            // animationNine()
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
        div.remove();
    }, 1200)
}

function animationOne() {
    let div = document.createElement('div')
    div.classList.add('animationOne')
    wrapper.append(div)

    setTimeout(() => {
        div.remove();
    }, 2000)
}

function animationTwo() {
    let div = document.createElement('div')
    div.classList.add('animationTwo')
    wrapper.append(div)

    setTimeout(() => {
        div.remove();
    }, 2000)
}

function animationThree() {


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
        div.remove();
    }, 2000)

}

function animationFour() {
    let div = document.createElement('div')
    div.classList.add('animationFour')
    wrapper.append(div)

    setTimeout(() => {
        div.remove();
    }, 3000)
}

function animationFive() {
    let animationFive = document.createElement("div");
    animationFive.classList.add("animationFive")
    wrapper.append(animationFive);


    for (let i = 0; i < 3; i++) {
        let circleFive = document.createElement("div");
        circleFive.classList.add("circleFive");
        animationFive.append(circleFive);
    }

    for (let j = 0; j < 3; j++) {
        let shadow_div = document.createElement("div");
        shadow_div.classList.add("shadow_div");
        animationFive.append(shadow_div);
    }

    setTimeout(() => {
        animationFive.remove();
    }, 3000)

}

startUp()