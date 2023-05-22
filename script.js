
const hamb = document.querySelector(".burger__menu__icon");
const popup = document.querySelector(".popup");
const body = document.body;



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
