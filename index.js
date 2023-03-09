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
            playAudioZero()
            break
        case 1:
            animationOne()
            playAudioOne()
            break
        case 2:
            animationTwo()
            break
        case 3:
            animationThree()
            playAudioThree()
            break
        case 4:
            animationFour()
            break
        case 5:
            animationFive()
            playAudioFive()
            break
        case 6:
            animationSix()
            playAudioSix()
            break
        case 7:
            animationSeven()
            break
        case 8:
            playAudioEight()
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

function playAudioZero() {
    var x = document.getElementById("audioZero");
    x.currentTime = 0;
    x.play();
}

function animationOne() {
    let div = document.createElement('div')
    div.classList.add('animationOne')
    wrapper.append(div)

    setTimeout(() => {
        div.remove();
    }, 2000)
}

function playAudioOne(){
    var x = document.getElementById("audioOne")
    x.currentTime = 3;
    x.play();

    setTimeout(() =>{
        x.pause()
    }, 2200)
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

let timeoutId = 0;

function playAudioThree(){
    let x = document.getElementById("audioThree");

    if (timeoutId > 0) {
        x.pause();
        clearTimeout(timeoutId);
    }

    x.currentTime = 0;
    x.volume = 0.5;
    x.play();

    timeoutId = setTimeout(() =>{
        x.pause();
    }, 2000);
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

function playAudioFive(){
    var x = document.getElementById("audioFive")
    x.play();

    setTimeout(() =>{
        x.pause()
    }, 3000)
}

function animationSix() {
    let div = document.createElement("div");
    div.classList.add("animationSix")
    wrapper.append(div)

    let div2 = document.createElement("div")
    div2.classList.add("circleSix");
    div.appendChild(div2)

    let counter = 0;

    setInterval(() => {
        div2.style.left = counter + "px";
        counter += 100
    }, 150)

    setTimeout(() => {
        div.remove();
    }, 3000)
}

function playAudioSix(){
    var x = document.getElementById("audioSix")
    x.currentTime = 0;
    x.play();

    setTimeout(() =>{
        x.pause()
    }, 3000)
}


function animationSeven(){
    let div = document.createElement("div")
    div.classList.add("animationSeven")
    wrapper.appendChild(div)

    let div2 = document.createElement("div")
    div2.classList.add("boxSeven")
    div.append(div2)

    setTimeout(() => {
        div.remove();
    }, 3000)
}

function animationEight(){
    let div = document.createElement("div")
    div.classList.add("animationEight")
    wrapper.appendChild(div)

    let div2 = document.createElement("div")
    div2.classList.add("box8")
    div.append(div2)

    setTimeout(() => {
        div.remove();
    }, 5000)
}

function playAudioEight(){
    var x = document.getElementById("audioEight")
    x.currentTime = 0;
    x.play();

    setTimeout(() =>{
        x.pause()
    }, 5000)
}

startUp()