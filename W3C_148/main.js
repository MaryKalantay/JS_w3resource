
var myArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

function changeParts(myArray) {
    var halpArr = myArray.length / 2;
    var part1 = myArray.slice(halpArr, myArray.length);
    var part2 = myArray.slice(0, halpArr);
    var newArr = part1.concat(part2);
    return newArr;
}

console.log(changeParts(myArray));






