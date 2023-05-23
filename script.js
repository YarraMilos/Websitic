
const hamb = document.querySelector(".burger__menu");
const header__menu = document.querySelector(".header__menu");
const body = document.body;

hamb.addEventListener('click', function(e){
  e.preventDefault()
  hamb.classList.toggle('active')
  header__menu.classList.toggle('active')
  body.classList.toggle('noscroll')
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const tabs = document.querySelectorAll('.tab__button')
const allContent= document.querySelectorAll('.content')
console.log(allContent)

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e)=> {
    tabs.forEach(tab => {tab.classList.remove('active')})
    tab.classList.add('active')
    allContent.forEach(content =>{content.classList.remove('active')})
    allContent[index].classList.add('active')

  })


})

const tabs2 = document.querySelectorAll('.tab__button__item')
const allContent2= document.querySelectorAll('.content__item')
console.log(allContent2)

tabs2.forEach((tab, index) => {
  tab.addEventListener('click', (e)=> {
    tabs2.forEach(tab => {tab.classList.remove('active-tab')})
    tab.classList.add('active-tab')
    allContent2.forEach(content =>{content.classList.remove('active-content')})
    allContent2[index].classList.add('active-content')

  })


})
const arrowButton = document.querySelector('.arrow__button')

arrowButton.addEventListener('click', function(){
  const CurrentTab = document.querySelector('.active-tab')
  if (!tabs2[2].classList.contains('active-tab')) {
    tabs2.forEach(tab => {tab.classList.remove('active-tab')})
    CurrentTab.nextElementSibling.classList.add('active-tab')
    
  }
  const CurrentContent = document.querySelector('.active-content')
  
  if (!allContent2[2].classList.contains('active-content')) {
    allContent2.forEach(content =>{content.classList.remove('active-content')})
    CurrentContent.nextElementSibling.classList.add('active-content')
    
  }
  
  
})









const tabs3 = document.querySelectorAll('.tab__item')

tabs3.forEach((tab, index) => {
  tab.addEventListener('click', (e)=> {
    tabs3.forEach(tab => {tab.classList.remove('active')})
    tab.classList.add('active')
    

  })


})
