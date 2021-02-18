// import { locations } from './locations.js';
import {firstLocationText} from './gametext.js'
let time = 0;
const keyHandler = (event) => {
  if(event.key == 'Enter' && time == 0) {
   console.log("Good dog, you're able to follow commands")
   time ++
   startGame()
  } else if (event.key =='Enter') {

  }
}

const startGame = () => {
  document.getElementById("onkeypress__active").classList.add("hidden");
  document.getElementById("#ruby-dog").classList.add("hidden");
  document.getElementById("text__input").classList.remove("hidden");
  document.getElementById("console__field").classList.remove("hidden");
  storyLocationSelector(firstLocationText);
}

//Typewriter function elements. Setting index outside of scope.
let indexOfText = 0;
const speed = 50;

const typeWriter= text => {
  if (indexOfText < text.length) {
    setTimeout(() => {
      typeWriter(text);
      document.getElementById("story__text").innerHTML += text.charAt(indexOfText);
      indexOfText++;
    }, speed);
  }
 
}

//Recursive selectors that work through story objects and arrays.
const storyLocationSelector = (obj) => {
  const arrayOfLocationProperties = Object.keys(obj);
  arrayChoiceSelector(obj, arrayOfLocationProperties);
}
const arrayChoiceSelector = (obj, key) => {
  let i = 0;
  let choice = key[i]
  let currArr = obj[choice]
  if (i < currArr.length) {
    typeWriter(currArr[i])
  } else if(i == currArr.length) {
    i++
  }
}
window.addEventListener("keydown", keyHandler)
 //needs user input --> needs to be submitted.
 //provide commands at end of sentence.
 //provide output depending on commands entered (hidden commands?)

 //How many branching choices? Start with two in each room?
//             /\
//            /\/\
//           /\/\/\
// This should provide 6 end scenarios based on path taken.
//This is basic structure of the game.
//Each choice needs to be unique. Provide two choices each time and then expand.
//Provide other choices that don't do anything in particular?
//create dead ends?
//create a larger tree strucutre.
//
// next steps
//text animation -> on initialisation + inputs.
// branching paths--> boolean state switches


