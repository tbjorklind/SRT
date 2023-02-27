"use strict";

function startUp() {
    let body = document.querySelector("body")
    body.addEventListener("keyup", keyUp)
}

function keyUp(event) {
    let numberString = event.key
    let pressedNr = parseInt(numberString)
    switch (pressedNr) {
        case 0:
            animationZero()
            break;
        case 1:
            animationOne()
            break;
        case 2:
            animationTwo()
            break;
        case 3:
            animationThree()
            break;
        case 4:
            animationFour()
            break;
        case 5:
            animationFive()
            break;
        case 6:
            animationSix()
            break;
        case 7:
            animationSeven()
            break;
        case 8:
            animationEight()
            break;
        case 9:
            animationNine()
            break;
        default:
            break;
    }


}

function animationZero() {

}

startUp();