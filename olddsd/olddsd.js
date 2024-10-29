const myName = "Jenna McHargue";

localStorage.setItem("name", myName);


const storage = localStorage.getItem('name');
console.log(storage);


function setLocalStoryage(key, data) {
    // from arrays, stringigy going in
    localStorage.setItem("hikes", JSON.stringify(hikes))
    
}
function getLocalStorage(key) {
    // parse coming out
    return JSON.parse(localStorage.getItem('hikes'))
}



const newhikes = JSON.parse(localStorage.getItem('hikes'))