# Ruby's Cake Adventure

This is the first game I've made and I wanted it to be a challenge and have always loved interactive fiction. I hope you're entertained.
I'd like to thank Blazej Kowalski for the adorable ASCII art dog, that I found [here](https://www.asciiart.eu/animals/dogs).

![Screenshot of landing page](hidden/Screenshot%202021-02-23%20at%2017.40.53.png)

![Screenshot of choices]()

- [Ruby's Cake Adventure](#rubys-cake-adventure)
  - [Getting Started](#getting-started)
  - [Motivation](#motivation)
  - [Build Status](#build-status)
  - [Built with](#built-with)
  - [Features](#features)
  - [Testing](#testing)
  - [How to Use](#how-to-use)
  - [Extensions](#extensions)
  - [Contributions](#contributions)
  - [License](#license)

***

## Getting Started

Either clone the repository and run in a local server or go to the page [here](https://ocoldwell.github.io/rubyscakeadventuregame)

## Motivation

I made this for my weekly challenge on the Nology.io web development course.
We had one week to make it and so I wanted to choose something that was challenging and that I enjoy, much like my dog.
Ruby is my puppy who at the time of writing this readme is 15 weeks old, and she's very mischievous and so she was my inspiration.
I've always loved interactive fiction and wanted to write something in Javascript, which ended up being surprisingly challenging.

## Build Status

The game is functionally complete and works reliably. It needs to be tested using Cypress and I will be writing tests in the coming weeks.

## Built with

- Javascript
- SASS
- HTML

## Features

The main functionality of this project is how it iterates through numerous objects and arrays.
A project for future would be to refactor the choices into binary as this would provide an easy way to access unique choices.
Another option would be to rewrite the if/else function into a switch function for each choiceIndex on lines 22-34 and 42-52. These changes combined would eliminate all of the global variables that I was tracking for each object, array and string.

![Screenshot of choices](hidden/Screenshot%202021-02-23%20at%2019.01.35.png)

## Testing

 It needs to be tested using Cypress and end to end testing as all of the code interrelates to each other.  I will be writing tests in the coming weeks.

## How to Use

The game itself has instructions appear, but enter is used to proceed the story, 1 and 2 will select the choices when presented.

## Extensions

- Restyling button and hiding until game end.
- Adding further branches and dead ends so isn't linear.
- Refactoring entire base to encode choices with binary and reduce abstraction.
- Adding end to end tests to find bugs and test stability.

## Contributions

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under MIT license."
