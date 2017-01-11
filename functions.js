//EXERCISE 1
//function takes 2 strings and returns a value (using sort?) that will determine longest string
var str = "fantastic pizza zebra oh canada";
var strArray = str.split(" ");

function compareStr(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    else if (a.length > b.length)
    {
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

//EXERCISE 2
//Create an array of objects with "name" and "email" property.
//Then run code to sort array by longest name, and then alphabetically by email
var artists = [
    {name: "Shakira", email: "hipsdontlie@msn.com"},
    {name: "Bruno", email: "bruno@24kmail.com"},
    {name: "Beyonce", email: "queenbey@beyhive.com"},
    {name: "Kaytranada", email: "kaytra@gmail.com"},
    {name: "Prince", email: "nelsonrogers@yahoo.com"}
    ];

console.log("\nEXERCISE 2: ");
console.log("Array before sorting: \n", artists);

//compare function to sort by longest name
function compareName(a,b) {
    if (a.name.length < b.name.length) {
        return -1;
    }
    else if (a.name.length > b.name.length) {
        return 1;
    }
    else {
        return 0;
    }
}

//compare function to sort alphabetically
function compareAlphabet(a,b) {
    if (a.email < b.email) {
        return -1;
    }
    else if (a.email > b.email) {
        return 1;
    }
    else {
        return 0;
    }
}


console.log("Array after sorting by longest artist name: \n", artists.sort(compareName) );
console.log("Array after sorting by alphabetically by email: \n", artists.sort(compareAlphabet) );