
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
let modalBack = document.querySelectorAll('.container .ventana');

for(let i=0; i < modalBack.length; i++){
  modalBack[i].addEventListener("click", closeWindow, false);
}

function closeWindow(evnt) {
  let p = this.parentNode.parentNode.querySelector('.ventana');
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


