var sliders = new Array();
window.onload = function() {
	var options = {
		transitionTime:500,
		touchTransitionTime:300
	};
	var slidersElements = document.querySelectorAll('.slider');

	for(var i = 0 ; i < slidersElements.length ; i++) {
		sliders.push( new simpleCarousel(i,slidersElements[i],options) );
	}
	for(var i = 0; i < sliders.length; i++) {
		sliders[i].initialize();
	}
}

function showFrontLayer() {
  document.getElementById('bg_mask').style.visibility='visible';
  document.getElementById('frontlayer').style.visibility='visible';
}
function hideFrontLayer() {
  document.getElementById('bg_mask').style.visibility='hidden';
  document.getElementById('frontlayer').style.visibility='hidden';
}
