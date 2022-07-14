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
// now i need an image selector
// what I'm trying to do is listen to 
// every item in the activities container
// images ul li's and listen for a click
// upon the click event i want to take the
// clicked image and display it in a modal
const imageItems = document.querySelectorAll('.image-item');

for (let i = 0; i < imageItems.length; i++) {
  imageItems[i].addEventListener('click', () => {
    Array.from(imageItems, (imageItem) =>
      imageItem.classList.add('modal')
    );
    imageItems[i].classList.add('modal');
   })
}

// grabs the modal and makes it disappear
const dialogItem = document.querySelector('.dialog-box');
const dialogImageItem = document.querySelector('.dialog-image');
const dialogCloseBtn = document
  .querySelector('.dialog-btn')
  .addEventListener('click', function () {
    // alert("I'm listening.");
    // console.log(dialogItem);
    dialogItem.classList.add('modal');
  });
