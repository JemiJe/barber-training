
function modalInteract(btnAction, modalWindow) {
  
  btnAction.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow.classList.add("modal-show");
  });

  var btnClose = modalWindow.querySelector(".modal-close");
  btnClose.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(e) {
    if(e.keyCode === 27) {
      modalWindow.classList.remove("modal-show");
    }
  });
}

var btnLogin = document.querySelector(".header_main-userblock");
var btnMap = document.querySelector(".open_map");
var btnMapA = document.querySelector(".open_map_a");

var modalLogin = document.querySelector(".modal-login");
var modalMap = document.querySelector(".modal-map");

modalInteract(btnLogin, modalLogin);
if(!btnMap) {
  modalInteract(btnMapA, modalMap);
} else {
  modalInteract(btnMap, modalMap);
  modalInteract(btnMapA, modalMap);
}