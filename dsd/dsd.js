function toggleMenu() {
    const menuElement = document.querySelector('#nav');
    menuElement.classList.toggle('hide');
};
// show menu with big screen
function handleResize() {
    const menuElement = document.querySelector('#nav');
    if (window.innerWidth > 1000) {
        menuElement.classList.remove('hide');    
    } else {
        menuElement.classList.add('hide');
    }
};

handleResize();
window.addEventListener('resize', handleResize);
document.querySelector('#menu-icon').addEventListener('click', toggleMenu);