(function ($) {
    "use strict";

    // AOS Init
    AOS.init();

})(jQuery);


//------------------navbar boxShadow-----------------

$(function (){
  $(document).scroll(function(){
    var $nav = $(".main-navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});


$(".event-item").on('click', function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".faq-q-tab").on('click',function(){
	$(this).children('.faq-a-tab').slideToggle();
	$('.fa-angle-up',this).toggleClass('hide');
	$('.fa-angle-down',this).toggleClass('hide');
});

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

$("#form-direct--login").on('click', (e) =>{
    e.preventDefault();
    $(".form_login").addClass("hide");
    $(".form_signup").removeClass("hide");
});
$("#form-direct--signup").on('click', (e) =>{
    e.preventDefault();
    $(".form_signup").addClass("hide");
    $(".form_login").removeClass("hide");
});

$("#non-technical-events").on('click', (e)=>{
  $("#upcoming").addClass("hide");
  $("#technical").addClass("hide");
  $("#non-technical").removeClass("hide");
});

$("#technical-events").on('click', (e)=>{
  $("#upcoming").addClass("hide");
  $("#non-technical").addClass("hide");
  $("#technical").removeClass("hide");
});

$("#upcoming-events").on('click', (e)=>{
  $("#non-technical").addClass("hide");
  $("#technical").addClass("hide");
  $("#upcoming").removeClass("hide");
});