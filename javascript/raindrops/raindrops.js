//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {

  var myNumber = "";

  if(number % 3 == 0) {myNumber += "Pling";}
  if(number % 5 == 0) {myNumber += "Plang";}
  if(number % 7 == 0) {myNumber += "Plong";}

  if(myNumber == "") {myNumber = number;}

  return myNumber
};

