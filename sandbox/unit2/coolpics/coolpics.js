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

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}


function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    
	// get the src attribute from that element and 'split' it on the "-"
    const parts = clickedElement.src.split('-');
    
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImg = parts[0] + '-full.jpeg';
    
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullImg, clickedElement.alt));
    
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function closeViewer() {
    document.querySelector('.viewer').remove();
}

document.querySelector('.gallery').addEventListener('click', viewHandler);