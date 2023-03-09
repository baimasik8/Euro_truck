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
