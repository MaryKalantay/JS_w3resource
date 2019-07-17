var a = [1, 3, 8];
var b = [2, 6, 3];

function Vectors(a, b) {
    var newArr = [];
    var i;
    for (i = 0; i < b.length; i++) {
        var res = a[i] * b[i];
        newArr.push(res);
    }
    var sum = 0;
    for (i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    console.log(newArr);
    return sum;
}

console.log(Vectors(a, b));






