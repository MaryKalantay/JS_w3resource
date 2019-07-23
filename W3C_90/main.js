var array = [1, 2, 3, 4, 5, 197, 8, 7, 7, 0]

function bigInt(arr) { 
    return Math.max.apply(Math, arr);;
}

console.log(bigInt(array));






