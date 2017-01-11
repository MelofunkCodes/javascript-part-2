//EXERCISE 1
//function takes 2 strings and returns a value (using sort?) that will determine longest string
var str = "fantastic pizza zebra oh canada";
var strArray = str.split(" ");

function compareStr(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    else if (a.length > b.length) {
        return 1;
    }
    //if both words are of equal length, nothing will change
    else {
        return 0;
    }
}

console.log("EXERCISE 1: \n");
console.log("Array before sorting: ", strArray);
console.log("Array after sorting: ", strArray.sort(compareStr) );
console.log("Longest word in your array of strings is: ", strArray[strArray.length-1]);

