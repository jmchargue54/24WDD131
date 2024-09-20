const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200/300";
newImg.setAttribute("alt", "Random image")
document.body.append(newImg);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";
newSection.appendChild(newP);

document.body.appendChild(newSection);