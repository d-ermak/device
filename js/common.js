var openForm = document.querySelector(".open-form");
var openMap = document.querySelector(".open-modal-map");
var formPopup = document.querySelector(".modal-form");
var form = document.querySelector(".modal-form form");
var mapPopup = document.querySelector(".modal-map");
var overlay = document.querySelector(".overlay");
var closeForm = document.querySelector(".modal-form .close-btn");
var closeMap = mapPopup.querySelector(".modal-map .close-btn");
var login = formPopup.querySelector("[name=name]");
var email = formPopup.querySelector("[name=email]");
var textarea = formPopup.querySelector("textarea");
var storage = localStorage.getItem("login");

//Интерактивная карта

openMap.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-open");
  overlay.classList.add("overlay-open");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-open")) {
      mapPopup.classList.remove("modal-open");
      overlay.classList.remove("overlay-open");
    }
  }
});


//Форма обратной связи

openForm.addEventListener("click", function(event) {
  event.preventDefault();
  formPopup.classList.add("modal-open");
  overlay.classList.add("overlay-open");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

closeForm.addEventListener("click", function(event) {
  event.preventDefault();
  formPopup.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
  formPopup.classList.remove("modal-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  formPopup.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
  formPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (formPopup.classList.contains("modal-open")) {
      formPopup.classList.remove("modal-open");
      formPopup.classList.remove("modal-error");
      overlay.classList.remove("overlay-open");
    }
  }
});

form.addEventListener("submit", function(event) {
  formPopup.classList.remove("modal-error");
  formPopup.offsetWidth = formPopup.offsetWidth;

  if (!login.value) {
    event.preventDefault();
    login.classList.add("invalid");
    formPopup.classList.add("modal-error");
  } else {
    login.classList.remove("invalid");
  }

  if (!email.value) {
    event.preventDefault();
    email.classList.add("invalid");
    formPopup.classList.add("modal-error");
  } else {
    email.classList.remove("invalid");
  }

  if (!textarea.value) {
    event.preventDefault();
    textarea.classList.add("invalid");
    formPopup.classList.add("modal-error");
  } else {
    textarea.classList.remove("invalid");
  }
});

login.onfocus = function(event) {
  if (login.value || login.classList.contains("invalid")){
    event.preventDefault();
    login.classList.remove("invalid");
  }
};

email.onfocus = function(event) {
  if (email.value || email.classList.contains("invalid")){
    event.preventDefault();
    email.classList.remove("invalid");
  }
};

textarea.onfocus = function(event) {
  if (textarea.value || textarea.classList.contains("invalid")){
    event.preventDefault();
    textarea.classList.remove("invalid");
  }
};

