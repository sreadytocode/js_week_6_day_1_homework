// Episode 1:

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

/*   The murderer will be Miss Scarlet. 
     As the function calls on the object scenario.   */ 

// Episode 2:

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// This will come up with an error message as the function is trying to alter a const
// variable.

// Episode 3:

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// In first verdict the murderer will be Mrs Peacock.
// This is because it is calling on the local variable in the function.
// Second one will be Professor Plum as it is calling on a more global variable
// outside of a function.

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// In first function declareAllSuspects the suspects will be:
// Miss Scarlet, Professor Plum as referring to variables outside function. 
// Then Colonel Mustard as it is a local variable so will overwrite Mrs Peacock.
// In second it will be Mrs Peacock as it will not be able to access Colonel Mustard 
// as it is inside other function. 

// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

/*  Weapon will be a revolver. Although, it is a const variable the method would change
the contents especially since it is an object. First function uses a parameter of 
the new weapon which can be altered by the user when invoking the function. 
Second declares new weapon. */

// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* The murderer in this case will be Mrs White as function is invoked. Since changeMurderer is invoked
it will refer to the murderer in here as opposed to the global variable of murderer. It would have been
Mr Green but the plotTwist function changes this to Mrs White. */

// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* The murderer will be Mr Green as the const plotTwist has its own local variables within itself. 
Hence using let murderer for Colonel Mustard. You cannot call Colonel mustard or miss scarlet outside of
this as its a local variable. As a result when calling the function changeMurderer it will be Mr Green. */ 

// Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

/* The weapon will be a candlestick. Function for Plotwist is called and parameter is set to Dining room. 
That invokes if statement because now room name chosen is same as scenario.room in object. 
This changes scenario.murderer to Colonel mustard.
Since unexpectedOutcome is called and murderer parameter is Colonel Mustard this makes a truthy if statement.
Leading to the murder weapon to be a candlestick */

// Episode 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

/* Murderer will be Professor Plum. It cannot access Mrs Peacock in the if statement as its a local variable.
The if statement is saying if murderer is equal to Professor plum then creating a new variable murderer
but not doing anything with this new variable holding Mrs Peacock.  */

// Extension
// Episode 10

let murderer = 'Miss Scarlett';

const declareMurderer = function() {
  let murderer = 'Colonel Mustard';
  return `The murderer is ${murderer} but there is a secret accomplice.`;
}

const mainMurderer = declareMurderer();
console.log('Main murderer: ', mainMurderer);

const secretAccomplice = `The accomplice is ${murderer}.`;
console.log('Accomplice: ', secretAccomplice);


