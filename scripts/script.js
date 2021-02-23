import {
  firstLocationText,
  firstChoiceLocationText,
  secondChoiceLocationText,
} from "./gametext.js";
let time = 0;
let choiceTrack = 0;
const keyHandler = (event) => {
  console.log(time);
  //Stops type animation if already playing
  if (isTyping == true) {
    return;
    //Initalises game
  } else if (event.key == "Enter" && time == 0) {
    console.log("Good dog, you're able to follow commands");
    time++;
    startGame();
  } else if (event.key == "1" && time >= 2) {
    choiceIndex = 0;
    resetNewArray();
    choiceTrack = choiceTrack + "1";
    if (choiceTrack === "11") {
      arrayChoiceSelector(firstChoiceLocationText, 0);
    } else if (choiceTrack === "21") {
      arrayChoiceSelector(secondChoiceLocationText, 0);
    } else if (choiceTrack === "111") {
      arrayChoiceSelector(currentObject, 1);
    } else if (choiceTrack === "121") {
      arrayChoiceSelector(currentObject, 4);
    } else if (choiceTrack === "211") {
      arrayChoiceSelector(currentObject, 1);
    } else if (choiceTrack === "221") {
      arrayChoiceSelector(currentObject, 4);
    }
    console.log(choiceTrack);
    time++;
  } else if (event.key == "2" && time >= 2) {
    choiceIndex = 0;
    resetNewArray();
    choiceTrack = choiceTrack + "2";
    if (choiceTrack === "12") {
      arrayChoiceSelector(firstChoiceLocationText, 3);
    } else if (choiceTrack === "22") {
      arrayChoiceSelector(secondChoiceLocationText, 3);
    } else if (choiceTrack === "112") {
      arrayChoiceSelector(currentObject, 2);
    } else if (choiceTrack === "122") {
      arrayChoiceSelector(currentObject, 5);
    } else if (choiceTrack === "212") {
      arrayChoiceSelector(currentObject, 2);
    } else if (choiceTrack === "222") {
      arrayChoiceSelector(currentObject, 5);
    }
    console.log(choiceTrack);
    time++;
    //sets choiceTrack to 1 or 2
  } else if (event.key == "1" && currentRoom.length == storyIndex + 1) {
    choiceIndex = 1;
    resetNewArray();
    arrayChoiceSelector(currentObject, choiceIndex);
    time++;
    choiceTrack = "1";
  } else if (event.key == "2" && currentRoom.length == storyIndex + 1) {
    choiceIndex = 2;
    resetNewArray();
    arrayChoiceSelector(currentObject, choiceIndex);
    time++;
    choiceTrack = "2";
    //Story progression through array on enter
  } else if (event.key == "Enter" && currentRoom.length == storyIndex + 1) {
    storyIndex = 0;
  } else if (event.key == "Enter" && time > 0) {
    updateDisplay();
    isTyping = true;
    typeWriter(currentRoom[storyIndex]);
  }
};

const startGame = () => {
  document.getElementById("onkeypress__active").classList.add("hidden");
  document.getElementById("#ruby-dog").classList.add("hidden");
  document.getElementById("console__field").classList.remove("hidden");
  isTyping= true;
  arrayChoiceSelector(firstLocationText, choiceIndex);
};

//Typewriter function elements. Setting index outside of scope.
const speed = 25;
let indexOfText = 0;
let isTyping = false;
const typeWriter = (text) => {
  if (indexOfText < text.length) {
    setTimeout(() => {
      typeWriter(text);
      document.getElementById("story__text").innerHTML += text.charAt(
        indexOfText
      );
      indexOfText++;
    }, speed);
  } else if (indexOfText == text.length) {
    isTyping = false;
    return;
  }
};
const updateDisplay = () => {
  storyIndex++;
  document.getElementById("story__text").innerHTML = "";
  indexOfText = 0;
};
const resetNewArray = () => {
  storyIndex = 0;
  document.getElementById("story__text").innerHTML = "";
  indexOfText = 0;
};
const gameReset = (event) => {
  window.location.reload();
}
let currentObject = {};
let currentRoom = [];
let choiceIndex = 0;
let storyIndex = 0;
//Recursive selector that works through story objects and arrays.
const arrayChoiceSelector = (object, index) => {
  currentObject = object;
  const arrayOfLocationProperties = Object.keys(object);
  let choice = arrayOfLocationProperties[index];
  let currArr = object[choice];

  if (choiceIndex < currArr.length) {
    isTyping = true;
    typeWriter(currArr[storyIndex]);
    currentRoom = currArr;
  } else if (storyIndex == currArr.length) {
    storyIndex++;
  }
};


window.addEventListener("keydown", keyHandler);
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', gameReset)
//needs user input --> needs to be submitted.
//provide commands at end of sentence.
//provide output depending on commands entered (hidden commands?)

//How many branching choices? Start with two in each room?
//             /  \
//            /\  /\
//           /\/\/\/\
// This should provide 8 end scenarios based on path taken.
//This is basic structure of the game.
//Each choice needs to be unique. Provide two choices each time and then expand.
//Provide other choices that don't do anything in particular?
//create dead ends?
//create a larger tree strucutre.
//
// next steps
//text animation -> on initialisation + inputs.
// branching paths--> boolean state switches
