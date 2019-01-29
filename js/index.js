// 1. On mouseover, have `.container .intro img` scale to 1.1 and return to normal scale on mouseout.
const funBus = document.querySelector('.home .intro img')
funBus.addEventListener('mouseover', function (){
    funBus.style.transform = "scale(1.1)";
})
funBus.addEventListener('mouseout', function (){
    funBus.style.transform = "scale(1)";
})

// 2. Whenever ANY key is pressed, turn the body's background into a gradient
const body = document.querySelector('body')
body.addEventListener('keydown', function () {
    body.style.backgroundImage = "linear-gradient(#bdc3c7,#2c3e50)"
})
body.addEventListener('keyup', function () {
    body.style.backgroundImage = "none"
})

// 3. When the wheel is used, turn all text to red.
const introP = document.querySelector('.intro p')
introP.addEventListener('wheel', function (e) {
    introP.style.color = "red";
    e.stopPropagation();
})

// 4. Drag the funBus img and append it to one of the two .content-section divs.
const containers = document.getElementsByClassName('content-section')

for (const container of containers) {
    container.addEventListener("dragover", dragover)
    container.addEventListener("dragenter", dragenter)
    container.addEventListener("drop", drop)
}

function dragover (e) {e.preventDefault()}
function dragenter (e) {e.preventDefault()}
function drop () {this.append(funBus);}

// 5. Console.log("OMG THE IMAGE ACTUALLY LOADED! YOU'RE A WIZARD, 'Arry") when the img loads.
funBus.addEventListener('load', (() => {
    console.log("OMG, THE IMAGE ACTUALLY LOADED! You're a wizard 'Arry!")
}))

// 6. When focusing on one of the destination divs, add a 1px solid red border
const firstLink = document.querySelector('#firstLink');
firstLink.addEventListener('focus', function () {
    console.log("This is still a work in progress. Thanks for your patience!");
})

// 7. when the window is resized, change the color of the 'Fun Bus' header
let count = 0;
window.addEventListener("resize", () => {
    if (count < 1){
        alert("viewport resized")
        count+=1
    }
})


// 8. When scrolling, just log to console.
window.addEventListener('scroll', () => {
    console.log("you scrolled")
})


// 9.

// 10.




