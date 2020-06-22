'use strict';

const btn = document.querySelector('.btn');
const str = 'abcdef123456789';

let wrapper = document.querySelector('.wrapper');
let color = document.querySelector('.color');


function randomColor() {
  let result = '';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * str.length);
    result += str.substring(random, random + 1);
  }

  color.innerHTML = '#' + result;
  wrapper.style.backgroundColor = '#' + result;
}

btn.addEventListener('click', randomColor);

randomColor();

