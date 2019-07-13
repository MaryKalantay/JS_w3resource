function newString(str) {
    if (str.length >= 3) {
        var copySymb =  str.substring(str.length - 3, str.length);
        var newString =  copySymb + copySymb + copySymb + copySymb;
        return  newString;
    }
    else {
        return false;
    }
}
console.log(newString("h"))



