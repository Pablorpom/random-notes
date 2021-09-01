import getRandomNote from "./utils/getRandomNote.js";

const note = document.querySelector(".note");
const start = document.querySelector(".start");
const stopR = document.querySelector(".stop");
const inputNumber = document.querySelector("#input-number");


let notesCounter = 0;
let notesQuantity;
let timer;

const random = ()=> {
    notesQuantity = inputNumber.value
    if(notesCounter < notesQuantity){
        note.innerHTML = `<p>
        ${getRandomNote()}
        </p>`
        timer = setTimeout(random, 5000)
        notesCounter++
    }else{
        location.reload()
    }
};

inputNumber.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      random();
    }
});
start.addEventListener('click', random);
stopR.addEventListener('click', ()=> clearTimeout(timer) );
