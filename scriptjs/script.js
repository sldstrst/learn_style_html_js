"use strict"

let h2Divs = document.querySelectorAll('.header');
let colors = ['c1d82f', '00a78e', '2dde98', '0389ff', 'bfca02', '3be8b0', 'de0f17', '5ecc62'];




for( let i = 0; i< h2Divs.length; i++){
  let bgDiv = document.createElement('div');

  bgDiv.style.height = h2Divs[i].offsetHeight + 'px';
  bgDiv.style.width = h2Divs[i].querySelector('h2').offsetWidth + 'px';
  bgDiv.style.transform =  'rotate(' + randomInteger(-10, 10) + 'deg)';
  bgDiv.style.backgroundColor =  '#' + colors[randomInteger(0, colors.length - 1)];

  bgDiv.classList.add('square');


  h2Divs[i].appendChild(bgDiv);
}

function randomInteger(min, max)
{
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}



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
