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
  var maePre = ["5018", "5020", "5038", "6304"];
  var switPre = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"];
  if((cardNumber.slice(0, 2) > 50 && cardNumber.slice(0, 2) < 56) && cardNumber.length === 16){
  	return "MasterCard";
  }
  if (dinerPre.includes(cardNumber.slice(0, 2)) && cardNumber.length === 14){
  	return "Diner's Club";
  }
  if (ameriPre.includes(cardNumber.slice(0, 2)) && cardNumber.length === 15){
  	return "American Express";
  }
  if ((cardNumber.slice(0, 4) === "6011" || cardNumber.slice(0, 2) === "65") && (cardNumber.length === 16 || cardNumber.length === 19)){
  	return "Discover";
  }
  if (cardNumber.slice(0, 3) > "643" && cardNumber.slice(0, 3) < "650" && (cardNumber.length === 16 || cardNumber.length === 19)){
    return "Discover";
  }
  if (maePre.includes(cardNumber.slice(0, 4)) && (cardNumber.length > 11 && cardNumber.length < 20)){
    return "Maestro";
  }
  if ((cardNumber.slice(0, 6) >= "622126" && cardNumber.slice(0, 6) <= "622925") && (cardNumber.length > 15 && cardNumber.length < 20)){
    return "China UnionPay";
  }
  if ((cardNumber.slice(0, 3) >= "624" && cardNumber.slice(0, 3) <= "626") && (cardNumber.length > 15 && cardNumber.length < 20)){
    return "China UnionPay";
  }
  if ((cardNumber.slice(0, 4) >= "6282" && cardNumber.slice(0, 4) <= "6288") && (cardNumber.length > 15 && cardNumber.length < 20)){
    return "China UnionPay";
  }
  if ((switPre.includes(cardNumber.slice(0, 4)) || switPre.includes(cardNumber.slice(0, 6))) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)){
    return "Switch";
  }else if (cardNumber.slice(0, 1) === "4" && visaLen.includes(cardNumber.length)){
    return "Visa";
  }
  return "N/A";
};


