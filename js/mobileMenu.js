const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const menuOption1 = document.getElementById('menu-option1');
const menuOption2 = document.getElementById('menu-option2');
const menuOption3 = document.getElementById('menu-option3');
const menuOption4 = document.getElementById('menu-option4');

const menuOptions = [menuOption1, menuOption2, menuOption3, menuOption4];

function openMenu() {
  menu.style.display = 'block';
}

function closeMenu() {
  menu.style.display = 'none';
}

for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', closeMenu);
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
