"use strict"

var left = -10;
polosa.style.left = left + 'px';

document.onclick = function (event) {
  if (event.target.tagName == 'IMG') {
    event.target.classList.add('bordered');
  }
}

document.getElementById('slider-left').onclick = sliderNext;


function sliderNext() {
  var polosa = document.getElementById('polosa');
  left -= 230;
  polosa.style.left = left + 'px';
  if (left <= -230) {
    left = 450;
  }
}
