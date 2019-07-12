var number_1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var number_2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1; 

console.log(number_1, number_2)

function Range(number_1, number_2) {
  if (  (number_1 >= 50 && number_1 <= 90)  || (  number_2 >= 50 && number_2 <= 90) ) {
    console.log("yes");
    return true;
  }
  else {
    console.log("no");
  }
}

Range(number_1, number_2);