// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var number = cardNumber.match(/[0-9]/gi).join("");
  if (cardNumber.length !== number.length) return "N/A";
  var visaLen = [13, 16, 19];
  var dinerPre = ["38", "39"];
  var ameriPre = ["34", "37"];
  if (cardNumber.slice(0, 1) === "4" && visaLen.includes(cardNumber.length)){
  	return "Visa";
  }else if((cardNumber.slice(0, 2) > 50 && cardNumber.slice(0, 2) < 56) && cardNumber.length === 16){
  	return "MasterCard";
  }else if (dinerPre.includes(cardNumber.slice(0, 2)) && cardNumber.length === 14){
  	return "Diner's Club";
  }else if (ameriPre.includes(cardNumber.slice(0, 2)) && cardNumber.length === 15){
  	return "American Express"
  }else{
  	return "N/A";
  }
};

