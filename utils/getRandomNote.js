import notes from "../const/notes.js"

const getRandomNote = ()=> notes[Math.floor(Math.random() * notes.length) + 1]

export default getRandomNote;
