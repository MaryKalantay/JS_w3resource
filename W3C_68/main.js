function newString(str, n) {
    if (str.length >= n) {
        var firstSymbs =  str.substring(0, n);
        var lastSymbs =  str.substring(str.length - n, str.length);
        var newString = firstSymbs + lastSymbs;
        return  newString;
    }
    else {
        return false;
    }
}

console.log(newString("Write a JavaScript", 5))



