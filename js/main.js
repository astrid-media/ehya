$(document).ready(function () {

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
function openModal(){
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}
function closeModal(event){
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).on('keydown', function(e) {
  if (e.keyCode == 27) {
   var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
});
$(".form").each(function () {
  $(this).validate({
  messages: {
    name: {
      required: "Пожалуйста укажите ваше имя",
      minlength: "Имя должно содержать не менее 2-ух символов!"
    },
    phone: {
     required: "Пожалуйста укажите ваш телефон",
     minlength: "Укажите пожалуйста корректный номер телефона!"
    },
    email: {
      required: "Пожалуйста укажите ваш e-mail",
      email: "E-mail должен быть в формате name@domain.com",
      minlength: "Укажите пожалуйста не менее 3-ех символов!"
    }
  }
});
});
$('.phone').mask('+7 (999) 999-99-99');

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});


const $slider = document.querySelector('[data-slider="chiefslider"]');
    const slider = new ChiefSlider($slider, {
      loop: false
    });

    const swiper = new Swiper('.swiper-container--mobile--hidden', {
  // Optional parameters
  slidesPerView: 2,
    loop: false,
    spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

 
});
  const swiperMobile = new Swiper('.swiper-container--mobile--visible', {
  // Optional parameters
  slidesPerView: 1,
    loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

 
});
AOS.init();
$(document).on("click", ".hero__button", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
});
$(document).on("click", ".hero__down", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
$(document).on("click", ".top", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
});