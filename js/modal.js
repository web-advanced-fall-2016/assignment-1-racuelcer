
let regions = document.querySelectorAll('.container .picture');

for(let i=0; i < regions.length; i++){
  regions[i].addEventListener("click", openReg, false);
}

function openReg(evnt){
  let reg = this.parentNode.querySelector('.ventana');
  reg.style.display = "inline-block";
}

let close = document.querySelectorAll('.container .close');

for(let i=0; i < close.length; i++) {
  close[i].addEventListener("click", closeReg, false);
}

function closeReg(evnt){
  let c = this.parentNode.parentNode.parentNode.querySelector('.ventana');
  c.style.display = "none";
}
let modalBack = document.querySelectorAll('.container.ventana');

for(let i=0; i < modalBack.length; i++){
  modalBack[i].addEventListener("click", closeWindow, false);
}

function closeWindow(evnt) {
  let p = this.parentNode.parentNode.parentNode.querySelector('.ventana');
  p.style.display = "none";
}


document.addEventListener("keydown", closeModal, false);

function closeModal(evnt){
  if(evnt.keyCode == 27){
  let close = document.querySelectorAll('.ventana');
  for(let i = 0; i < close.length; i++){
    close[i].style.display = "none";
    }
  }
}


function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {              
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

document.addEventListener("keydown", function(evnt) {
  if (evnt.keyCode == 13) {
    toggleFullScreen();
  }
   if (evnt.keyCode == 32) {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
 }
}, false);