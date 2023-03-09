
// slideshow-container

var slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// slider-mashine

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        // The scroll position is not at the beginning of last item
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        // Last item reached. Go back to first item by setting scroll position to 0
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
    if(scroller.scrollLeft != 0)
        // The scroll position is not at the beginning of first item
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        // This is the first item. Go to last item by setting scroll position to scroller width
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}

//  увеличение цифр 

(function(){

  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function(){  
    if( limit == counter.length ){ return; }
    
    for(let i = 0; i < counter.length; i++){
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if( pos < win && counter[i].dataset.stop === "0" ){
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function(){
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil( counter[i].dataset.to / 50 ); 
          counter[i].innerText = x;
          if( x > counter[i].dataset.to ){
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
  
  })();

//  библиотека AOS

  AOS.init();


  // Get the modal

var btno = document.getElementById("submit-ato");
var btntwo = document.getElementById("submit-attwo");

btno.onclick = function() {
  modal.style.display = "block";
}
btntwo.onclick = function() {
  modal.style.display = "block";
}


// menu

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./images/icons/close.svg";
        document.getElementsByTagName('body')[0].style.overflow = "hidden"; 
    } else {
        navBtnImg.src = './images/icons/menu.svg';
        document.getElementsByTagName('body')[0].style.overflow = "auto"; 
        document.getElementsByTagName('body')[0].style.overflowX = "hidden";
    }
}
