// import 'dotenv/config';

// ***************************
// navigation section
// ***************************
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

// ***************************
// more-info section
// ***************************
// displays current date

function createDate(input) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return (input.innerHTML = today);
}

const dateOneNode = document.getElementById('date-one');
const dateTwoNode = document.getElementById('date-two');
const dateThreeNode = document.getElementById('date-three');

createDate(dateOneNode);
createDate(dateTwoNode);
createDate(dateThreeNode);
