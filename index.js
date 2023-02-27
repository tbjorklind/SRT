"use strict";

function test () {
    let body = document.querySelector("body")
    body.addEventListener("keyup", keyUp)
}

function keyUp (event){
    console.log(event.key)
}

test();