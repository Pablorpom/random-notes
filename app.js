import notes from "./notes";

const note = document.querySelector(".note");
const start = document.querySelector(".start");
const stopR = document.querySelector(".stop");
const inputNumber = document.querySelector("#input-number");


let i = 1;
let ind;
let timer;

const random = ()=> {
    ind = inputNumber.value
    if(i <= ind){
        note.innerHTML = `<p>
        ${(notes[Math.floor(Math.random() * 20) + 1])}
        </p>`
        timer = setTimeout(random, 5000)
        i++
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




 