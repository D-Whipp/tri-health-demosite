const navItems = document.querySelectorAll(".nav-item")

for (let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('click', () => {
        Array.from(navItems, navItem => navItem.classList.remove('current'));
        navItems[i].classList.add('current');
    })
}