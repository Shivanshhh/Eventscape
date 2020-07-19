// AOD INIT

(function ($) {
  "use strict";

  // AOS Init
  AOS.init();

})(jQuery);

$('.nav-toggler').on('click', (e) => {
    e.preventDefault()
    $('.nav-links').slideToggle();
})

function myFunction(x) {
    if(!x.matches)
    {
      $('.nav-links').show();
    }
}
  
var x = window.matchMedia("(max-width: 56.25rem)")
myFunction(x) 
x.addListener(myFunction)

// NAVBAR SHADOW

$(function (){
	$(document).scroll(function(){
		var $nav = $(".nav");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});

// FILTER SHOW 

$('.filter-options').hide();
$('.filter').on('click', (e) => {
  e.preventDefault();
  $('.filter-options').slideToggle();   
})


// LOGIN PAGE
$('.sign-up').on('click', function(e) {
  e.preventDefault();
  $('.form-login').addClass('hide');
  $('.form-signup').removeClass('hide');
})
$('.login').on('click', function(e) {
  e.preventDefault();
  $('.form-signup').addClass('hide');
  $('.form-login').removeClass('hide');
})

// UPLOAD IMAGE 

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
