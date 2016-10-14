// find the thumbnails in the document
// 
// add a click eventlistener 
// identify the information box
// when the thumbnail is click open the information box
// add a keypress eventlistener
// if the keypress is esc 
//close the box 

let pic = document.querySelectorAll (".picture");

for (i=0; i<pic.length; i++){
  pic[i].addEventListener("click",openbox);
}

function openbox(){
 let v =  document.querySelector (".ventana");
 v.style.display = "inline";
}

let c = document.addEventListener("keydown", closebox);

function closebox(e){
  if(e.keyCode == 27){
    let v =  document.querySelector (".ventana");
    v.style.display = "none";
  }
  
}


