
function reverseString(str) {
    var splitStrtoArr = str.split("");
    var reversArr = splitStrtoArr.reverse();
    var joinArrtoStr = splitStrtoArr.join("");
    return  joinArrtoStr
}
console.log(reverseString("Greetings from Earth"))
