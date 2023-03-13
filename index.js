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
            playAudioTwo()
            break
        case 3:
            animationThree()
            playAudioThree()
            break
        case 4:
            animationFour()
            playAudioFour()
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
            playAudioSeven()
            break
        case 8:
            playAudioEight()
            animationEight()
            break
        case 9:
            animationNine()
            playAudioNine()
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

let timeoutId0 = 0;

function playAudioZero() {
    var x = document.getElementById("audioZero");
    if (timeoutId0 > 0) {
        x.pause();
        clearTimeout(timeoutId0);
    }

    x.currentTime = 0.20;
    x.play();

    timeoutId0 = setTimeout(() => {
        x.pause();
    }, 1200);
}

function animationOne() {
    let div = document.createElement('div')
    div.classList.add('animationOne')
    wrapper.append(div)

    setTimeout(() => {
        div.remove();
    }, 2000)
}

let timeoutId1 = 0;

function playAudioOne() {
    var x = document.getElementById("audioOne")
    if (timeoutId1 > 0) {
        x.pause();
        clearTimeout(timeoutId1);
    }

    x.currentTime = 3;
    x.play();

    timeoutId1 = setTimeout(() => {
        x.pause();
    }, 2200);
}

function animationTwo() {
    for (let i = 0; i < 3; i++) {
        let div1 = document.createElement("div");
        div1.classList.add("animation2")
        div1.style.top = Math.floor(Math.random() * 80) + "vh";
        div1.style.left = Math.floor(Math.random() * 60) + "vw";
        wrapper.append(div1)

        for (let j = 0; j < 8; j++) {
            let circle = document.createElement("div")
            circle.classList.add("circle-animation2")
            div1.appendChild(circle);
            circle.style.left = `${(j + 1 - 1) * 30}px`;
            circle.style.animationDelay = (j + 1 - 1) * .1 + "s";
        }
        setTimeout(() => {
            div1.remove();
        }, 2000)
    }
}


let timeoutId2 = 0;

function playAudioTwo() {
    var x = document.getElementById("audioTwo")
    if (timeoutId2 > 0) {
        x.pause();
        clearTimeout(timeoutId2);
    }

    x.currentTime = 0;
    x.play();

    timeoutId2 = setTimeout(() => {
        x.pause();
    }, 2000);
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

let timeoutId3 = 0;

function playAudioThree() {
    let x = document.getElementById("audioThree");

    if (timeoutId3 > 0) {
        x.pause();
        clearTimeout(timeoutId3);
    }

    x.currentTime = 0;
    x.volume = 0.5;
    x.play();

    timeoutId3 = setTimeout(() => {
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

let timeoutId4 = 0;

function playAudioFour() {
    var x = document.getElementById("audioFour")

    if (timeoutId4 > 0) {
        x.pause();
        clearTimeout(timeoutId4);
    }

    x.currentTime = 0;
    x.play();

    timeoutId4 = setTimeout(() => {
        x.pause();
    }, 3000);
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


let timeoutId5 = 0;

function playAudioFive() {
    var x = document.getElementById("audioFive")

    if (timeoutId5 > 0) {
        x.pause();
        clearTimeout(timeoutId5);
    }

    x.currentTime = 0;
    x.play();

    timeoutId5 = setTimeout(() => {
        x.pause();
    }, 3000);
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

let timeoutId6 = 0;

function playAudioSix() {
    var x = document.getElementById("audioSix")
    if (timeoutId6 > 0) {
        x.pause();
        clearTimeout(timeoutId6);
    }

    x.currentTime = 0;
    x.play();

    timeoutId6 = setTimeout(() => {
        x.pause();
    }, 3000);
}


function animationSeven() {
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

let timeoutId7 = 0;

function playAudioSeven() {

    var x = document.getElementById("audioSeven")
    if (timeoutId7 > 0) {
        x.pause();
        clearTimeout(timeoutId7);
    }

    x.currentTime = 0;
    x.play();

    timeoutId7 = setTimeout(() => {
        x.pause();
    }, 3000);
}



function animationEight() {
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

let timeoutId8 = 0;

function playAudioEight() {
    var x = document.getElementById("audioEight")
    if (timeoutId8 > 0) {
        x.pause();
        clearTimeout(timeoutId8);
    }

    x.currentTime = 0;
    x.play();

    timeoutId8 = setTimeout(() => {
        x.pause();
    }, 5000);
}

function animationNine() {
    let colors = [
        '--clr:#da9ada;',
        '--clr:#ecca75;',
        '--clr:#eb7c74;',
        '--clr:rgb(62, 183, 223);'
    ]

    let divBox = document.createElement("div")
    wrapper.append(divBox)

    for (let i = 0; i <= 4; i++) {
        let div = document.createElement('div')
        div.classList.add('circleNine')
        div.style = colors[i]
        divBox.append(div)
    }

    setTimeout(() => {
        divBox.remove()
    }, 3000)
}

let timeoutId9 = 0

function playAudioNine() {
    var x = document.getElementById('audioNine')
    if (timeoutId9 > 0) {
        x.pause()
        clearTimeout(timeoutId9)
    }

    x.currentTime = 0
    x.play()

    timeoutId9 = setTimeout(() => {
        x.pause()
    }, 3000)
}

startUp()