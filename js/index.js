// Mouseover
const navHead = document.querySelector('.logo-heading')
navHead.addEventListener('mouseover', event => {
    if (navHead.style.color === 'blue'){
    navHead.style.color = '#FDBA4A';
    }
    else {
    navHead.style.color = 'blue';
    }
})

// Keydown
const keyDown = document.querySelector('body')
keyDown.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight'){
    alert('Right')
    }
    else if (event.key === 'ArrowLeft'){
        alert('Left')
    }
})

// Wheel
const wheelZoom = document.querySelector('.pick-img')
wheelZoom.addEventListener('wheel', event =>{
    event.preventDefault()
    console.log(event)
})

// Drag
const dragFun = document.querySelector('body')
dragFun.addEventListener('dragstart', event => {
    alert('Put that Down')
})

// Load
const loadMessage = document.querySelector('img')
loadMessage.addEventListener('load', event => {
    console.log('The Images Have Loaded')
})


//Trying to get all anchors to change
// const focusUp = document.querySelectorAll('nav')
// const focusNav = Array.from(focusUp)
// console.log(focusNav)

// focusUp.addEventListener('focus', event => {
//     focusUp.forEach(object => object.style.color = '#FDBA4A')
//     console.log(event)
// })

// Focus
const focusUp = document.querySelector('#focused')
focusUp.addEventListener('focus', event => {
    focusUp.style.color = '#FDBA4A'
    console.log(event)
})

// Resize
window.addEventListener('resize', event => {
    console.log('WEEEEEEEE')
})

// Scroll
window.addEventListener('scroll', event => {
    console.log('I am going to be sick')
})

// Select Not Working
// const selectedItem = document.querySelector('#welcome-head')
// selectedItem.addEventListener('select', event => {
//     selectedItem.style.color = 'blue'
//     console.log(event)
// })

// Double Click
const doubleClick = document.querySelector('img')
doubleClick.addEventListener('dblclick', event => {
    doubleClick.remove()
    console.log(event)
})

const footBG = document.querySelector('footer')
footBG.addEventListener('click', event => {
    if (footBG.style.background === 'white') {
        footBG.style.background = '#FDBA4A'
    }
    else {
    footBG.style.background = 'white'
    }
})