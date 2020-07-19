$(".navigation__button").on('click',function(){
    //var str=0;
    $("nav").toggleClass("navigation__nav--active");
    $(".navigation__background").toggleClass("navigation__background--active");
    $(".navigation__icon").toggleClass("navigation__icon--active");
    // document.styleSheets[0].addRule(".navigation__icon::before", "top: 0 !important; transform: rotate(135deg);", 4);
    // document.styleSheets[0].addRule(".navigation__icon::after", "top: 0 !important; transform: rotate(-135deg);", 4);  
});



//-------------Hamburger Toggle----------------//

const menuBtn = document.querySelector('.navigation__button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

