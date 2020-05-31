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

timeout = null;
function typeWriter(target, textList, placeholder = false, i = 0, textList_i = 0, delay = 250) {
    if (!i) {
        if (placeholder) {
            document.querySelector(target).placeholder = "";
        }
        else {
            document.querySelector(target).innerHTML = "";
        }
    }
    text = textList[textList_i];
    if (i < text.length) {
        if (placeholder) {
            document.querySelector(target).placeholder += text.charAt(i);
        }
        else {
            document.querySelector(target).innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, delay, target, textList, placeholder, i, textList_i);
    }
    else {
        textList_i++;
        if (typeof textList[textList_i] === "undefined")  {
            setTimeout(typeWriter, (delay*5), target, textList, placeholder);
        }
        else {
            i = 0;
            setTimeout(typeWriter, (delay*3), target, textList, placeholder, i, textList_i);
        }
    }
}
// List consists of one string as of now. Add more if neccesary or alter code and use string instead of a list
textList = ["Search for an Event"];
returnValue = typeWriter("#search-event", textList, true);