'use strict';

//get the classes
const navBar = document.querySelector('.navBar');
const navBox = document.querySelector('.navBox');
const closeBtn = document.querySelector('.closeBtn');

// set onClick listener
navBar.addEventListener('click', function () {
  navBox.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  navBox.style.display = 'none';
});
