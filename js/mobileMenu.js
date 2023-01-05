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

const project1 = {
  name: 'Project',
  image: 'img-one img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 1,
};
const project2 = {
  name: 'Project',
  image: 'img-two img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 2,
};
const project3 = {
  name: 'Project',
  image: 'img-five img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 3,
};
const project4 = {
  name: 'Project',
  image: 'img-four img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 4,
};
const project5 = {
  name: 'Project',
  image: 'img-five img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 5,
};
const project6 = {
  name: 'Project',
  image: 'img-six img',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  projectno: 6,
};

const projectArray = [project1, project2, project3, project4, project5, project6];