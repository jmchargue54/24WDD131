function toggleMenu() {
    const menuElement = document.querySelector('.menu');
    menuElement.classList.toggle('hide');
};

document.querySelector('.menuButton').addEventListener('click',toggleMenu);

function handleResize() {
    const menuElement = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
        menuElement.classList.remove('hide');    
    } else {
        menuElement.classList.add('hide');
    }
};

handleResize();
window.addEventListener('resize', handleResize);