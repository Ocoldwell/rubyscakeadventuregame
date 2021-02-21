import {firstLocationText, firstChoiceLocationText, landingChoiceOneText,  landingChoiceTwoText, secondChoiceLocationText, bathroomChoiceOneText, bathroomChoiceTwoText} from './gametext.js'
let time = 0;
let gameText = {firstChoiceLocationText, landingChoiceOneText, landingChoiceTwoText, secondChoiceLocationText, bathroomChoiceOneText, bathroomChoiceTwoText}
const keyHandler = (event) => {
  if(event.key == 'Enter' && time == 0) {
   console.log("Good dog, you're able to follow commands");
   time ++;
   startGame();
  } else if (event.key == '1' && currentRoom.length == storyIndex + 1) {
    choiceIndex = 1;
    resetNewArray();
    arrayChoiceSelector(currentObject, choiceIndex)
  }else if (event.key == '2' && currentRoom.length == storyIndex + 1) {
     choiceIndex =2;
     resetNewArray();
     arrayChoiceSelector(currentObject, choiceIndex)
  }else if (event.key == 'Enter' && currentRoom.length == storyIndex+1) {
    storyIndex = 0;
  } else if (event.key =='Enter' && time > 0) {
    updateDisplay();
    typeWriter(currentRoom[storyIndex]);
  
}
}

const startGame = () => {
  document.getElementById("onkeypress__active").classList.add("hidden");
  document.getElementById("#ruby-dog").classList.add("hidden");
  document.getElementById("console__field").classList.remove("hidden");
  arrayChoiceSelector(firstLocationText, choiceIndex);
}

//Typewriter function elements. Setting index outside of scope.
const speed = 10;
let indexOfText = 0;
const typeWriter= text => {
  if (indexOfText < text.length) {
    setTimeout(() => {
      typeWriter(text);
      document.getElementById("story__text").innerHTML += text.charAt(indexOfText);
      indexOfText++;
    }, speed);
  } else if (indexOfText == text.length) {
    return;
  }
 
}
const updateDisplay = () => {
  storyIndex++;
  document.getElementById("story__text").innerHTML = "";
  indexOfText= 0;
}
const resetNewArray = () => {
  storyIndex = 0
  document.getElementById("story__text").innerHTML = "";
  indexOfText= 0;
}
let currentObject = {}
let currentRoom = []
let choiceIndex = 0
let storyIndex = 0
//Recursive selector that works through story objects and arrays.
const arrayChoiceSelector = (object, index) => {
  currentObject = object
  const arrayOfLocationProperties = Object.keys(object);
  let choice = arrayOfLocationProperties[index]
  let currArr = object[choice]

  if (choiceIndex < currArr.length) {
    typeWriter(currArr[storyIndex]);
    currentRoom = currArr;
  } 
  else if (storyIndex == currArr.length) {
   storyIndex ++
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


