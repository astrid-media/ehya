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
});