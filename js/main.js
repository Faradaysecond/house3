const burgerIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-x')
const mobileNav = document.querySelector('.nav__mobile')

const headerSlaids = document.querySelectorAll('.header__slaid')
const test = document.querySelector('.main-btn--white')

const sandwichesBtn = document.querySelector('.sandwitch')
const platesBtn = document.querySelector('.plates')
const snaksBtn = document.querySelector('.snaks')
const sumbusekBtn = document.querySelector('.sumbusek')
const menuBox = document.querySelectorAll('.menu__box')

const rezBtn = document.querySelector('.rez__btn')
const formContent = document.querySelector('.rez__form-content ')

const msgSent = document.querySelector('.messeng--sent')
const msgError = document.querySelector('.messeng--error')
const testt = document.querySelector('.test12')

const popupCloserOne = document.querySelector('.pop-up-closer-one')
const popupCloserTwo = document.querySelector('.pop-up-closer-two')
const popupCloserThree = document.querySelector('.pop-up-closer-three')
const cupon50 = document.querySelector('.main-btn__cupon-50')
const cupon100 = document.querySelector('.main-btn__cupon-100')
const cupon300 = document.querySelector('.main-btn__cupon-300')
const pop1 = document.querySelector('.pop-up--one')
const pop2 = document.querySelector('.pop-up--two')
const pop3 = document.querySelector('.pop-up--three')


cupon50.addEventListener('click', ()=>{
    pop1.classList.remove('none')
})
popupCloserOne.addEventListener('click', ()=>{
    pop1.classList.add('none')
})
cupon100.addEventListener('click', ()=>{
    pop2.classList.remove('none')
})
popupCloserTwo.addEventListener('click', ()=>{
    pop2.classList.add('none')
})
cupon300.addEventListener('click', ()=>{
    pop3.classList.remove('none')
})
popupCloserThree.addEventListener('click', ()=>{
    pop3.classList.add('none')
})


// Mobile menu

const hadleBuegerBtn = () => {
    mobileNav.style.animation = 'showMenu .5s forwards'
    burgerIcon.classList.add('none')
    xIcon.classList.remove('none')
}
const handleXBtn = () => {
    mobileNav.style.animation = ''
    burgerIcon.classList.remove('none')
    xIcon.classList.add('none')
}

burgerIcon.addEventListener('click', hadleBuegerBtn)
xIcon.addEventListener('click', handleXBtn)

// header slider

let slideNumber = 1

const slideCarsuel = () => {    
    slideNumber++
    if(slideNumber > headerSlaids.length){
        slideNumber = 1
    }
    headerSlaids.forEach(slide => {
        if(slideNumber == slide.dataset.number){
            slide.classList.remove('none')
        }else if (slideNumber > slide.dataset.number || slideNumber < slide.dataset.number  ) {
            slide.classList.add('none')
        }
    })
    
    console.log(slideNumber);
    
}

setInterval(slideCarsuel, 4000)

// Manu swaper

let menuNumber = 0

const swapMenu = () => {
    menuBox.forEach(el => {
        if(el.dataset.number == menuNumber){
            el.classList.remove('none')
        }else if(el.dataset.number !== menuNumber){
            el.classList.add('none')
        }
    })
}

sandwichesBtn.addEventListener('click', () =>{
    menuNumber = 1
    sandwichesBtn.classList.add('active')
    platesBtn.classList.remove('active')
    snaksBtn.classList.remove('active')
    sumbusekBtn.classList.remove('active')
    swapMenu()
})
platesBtn.addEventListener('click', () =>{
    menuNumber = 2
    sandwichesBtn.classList.remove('active')
    platesBtn.classList.add('active')
    snaksBtn.classList.remove('active')
    sumbusekBtn.classList.remove('active')
    swapMenu()
})
snaksBtn.addEventListener('click', () =>{
    menuNumber = 3
    sandwichesBtn.classList.remove('active')
    platesBtn.classList.remove('active')
    snaksBtn.classList.add('active')
    sumbusekBtn.classList.remove('active')
    swapMenu()
})
sumbusekBtn.addEventListener('click', () =>{
    menuNumber = 4
    sandwichesBtn.classList.remove('active')
    platesBtn.classList.remove('active')
    snaksBtn.classList.remove('active')
    sumbusekBtn.classList.add('active')
    swapMenu()
})

// Rezerwation

