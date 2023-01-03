// const menu = document.getElementById('menu');

// menu.style.backgroundColor = 'red';
const menu = document.getElementById('mobilemenu');
const hamburger = document.getElementById('hamburger');

menu.style.cssText = `
  font-style: poppins, sans-serif;
  margin-top: 30px;
  list-style: none;
  padding-left: 28px;
  display: none;
  position: fixed;
`;

function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);