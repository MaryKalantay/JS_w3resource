function concatStr(str) {  
    if ( str.length >= 3) {
        var s1 = str.charAt(str.length/2 ) ;
        var s2 = str.charAt(str.length/2 - 1);
        var s3 = str.charAt(str.length/2 + 1);

        return s1 + s2 + s3
    }
    else {
        return false
    }
}

console.log(concatStr("Kristy study English"));






