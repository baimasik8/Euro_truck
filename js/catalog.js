
// section__park

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// input type="range"

function fun() {

  send_result.innerHTML=id_range.value;
  
  }

function fun2() {

   send_result2.innerHTML=id_range2.value;
      
}

function fun3() {

  send_result3.innerHTML=id_range3.value;
     
}


// modal 
var btno = document.getElementById("submit-ato");

btno.onclick = function() {
  modal.style.display = "block";
}


// menu

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "../images/icons/close.svg";
        document.getElementsByTagName('body')[0].style.overflow = "hidden"; 
    } else {
        navBtnImg.src = '../images/icons/menu.svg';
        document.getElementsByTagName('body')[0].style.overflow = "auto"; 
        document.getElementsByTagName('body')[0].style.overflowX = "hidden";
    }
}
