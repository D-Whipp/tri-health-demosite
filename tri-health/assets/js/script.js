// keeps track of current navigation item
const navItems = document.querySelectorAll('.nav-item');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    Array.from(navItems, (navItem) =>
      navItem.classList.remove('current')
    );
    navItems[i].classList.add('current');
  });
}

// activities modal

const dialogItem = document.querySelector('dialog-box');
const dialogImageItem = document.querySelector('.dialog-image');
const dialogCloseBtn = document
  .querySelector('.dialog-btn')
  .addEventListener('click', function () {
    alert("I'm listening.");
    dialogItem.classList.add('modal');
  });
