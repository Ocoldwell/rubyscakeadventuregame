export const locations = [
  bedroom= {
    name:"the nest",
    onEnter: function() {
      if (this.visits == 0) {
        visits ++;
        return 'You wake up to the smell of cake. You\'re in the nest, you look around and see some toys, where is your Dad? He will want to play.'
      }  
      visits ++
      return "You are in the nest, this is your territory, you are safe here."
    },
    objects: ['ball' = {
      interact: ['grab', 'paw', 'bark']
    },
     'bone' = {
      interact: ['grab', 'paw', 'bark']
     },
      'slipper' = {
        interact: ['gnaw', 'grab', 'bark']
      }],
    visits: 0,
    say: {
      bark: 'I would like to play',
      woof: 'Feed me',
      help: 'woof',
      eat: 'woof'
    }
  },
  upstairsHall = {

  },
  bedroom2 = {

  },
  stairs = {

  },
  downstairsHall = {

  },
  diningRoom = {

  },
  kitchen = {

  },
  livingRoom = {

  }
]

//What is the aim of the game?


//What attributes does each location have?


//How interactive/puzzley do I want the game to be?


//Proof of concept will involve navigation, ability to observe room and to see actions, what actions allow you to leave the room, what is the central challenge of the game (cake).

//What am I entering the inputs into?
// >input
// >a fake console?