var myArr = [1, 3] 

function newArray(array) {
    for  (i = 0; i < array.length; i++) {
        if (array[i] == 1 ) {
            console.log("содержит 1");
            if (array[i+1] == 3 ) {
                console.log("содержит 3");
                return true
            }
        }
        else {
            console.log("не содержит")
            return false
        }
    }
}

console.log(newArray(myArr))



