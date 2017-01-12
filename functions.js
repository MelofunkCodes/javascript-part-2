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
var artists = [{
    name: "Shakira",
    email: "hipsdontlie@msn.com"
}, {
    name: "Bruno",
    email: "bruno@24kmail.com"
}, {
    name: "Beyonce",
    email: "queenbey@beyhive.com"
}, {
    name: "Kaytranada",
    email: "kaytra@gmail.com"
}, {
    name: "Prince",
    email: "nelsonrogers@yahoo.com"
}];

console.log("\nEXERCISE 2: ");
console.log("Array before sorting: \n", artists);

//compare function to sort by longest name
function compareName(a, b) {
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
function compareAlphabet(a, b) {
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


console.log("Array after sorting by longest artist name: \n", artists.sort(compareName));
console.log("Array after sorting by alphabetically by email: \n", artists.sort(compareAlphabet));

//EXERCISE 3
//create function that takes a number and returns its square. Use map function to perform this function on an array of numbers
function squareNum(x) {
    return x * x;
}

var a = [1, 3.14, 500, -3];
var aSquared = a.map(squareNum);

console.log("\nEXERCISE 3: ");
console.log("Original array: \n", a);
console.log("Squared array: \n", aSquared);


//EXERCISE 4
//Function squares the "num" property of an object. Try it on an object, then try it on an array of objects
function squareNumObject(x) {
    //create a NEW object of x, with the same properties of OLD object, with the added change of squaring the "num" property
    var keys = Object.keys(x);
    var xNew = {};

    //keys[idx] will evaluate to property name (i.e. fruit, num)
    // x[keys[idx]] will evaluate to the VALUE attached to that property
    for (var idx = 0; idx < keys.length; idx++) {
        //if property in object "x" is equal to "num", assign the squared expression to the value of xNew placeholder
        if (keys[idx] === "num") {
            xNew[keys[idx]] = x.num * x.num;
        }
        //else, for all other properties. Assign value at property of object "x" to that of "xNew"
        else {
            xNew[keys[idx]] = x[keys[idx]];
        }
    }

    return xNew; //this returns a new object
}


// var someObject = {
//     fruit: "celery",
//     num: 4
// };

// console.log(squareNumObject(someObject));


var farmInventory = [{
    fruit: "cucumber",
    num: 2
}, {
    fruit: "tomato",
    num: 30
}, {
    fruit: "squash",
    num: 0
}];

var farmHarvest = farmInventory.map(squareNumObject);

console.log("\nEXERCISE 4: ");
console.log("Farm before harvest: \n", farmInventory);
console.log("Farm after harvest: \n", farmHarvest);

//EXERCISE 5
//creating function that will take string argument and return arithmetic function depending on string 
function operationMaker(operation) {
    switch (operation) {
        case 'add':
            return function(num1, num2) {
                return num1 + num2;
            };
            break;
        case 'subtract':
            return function(num1, num2) {
                return num1 - num2;
            };
            break;
        case 'mult':
            return function(num1, num2) {
                return num1 * num2;
            };
            break;
        case 'div':
            return function(num1, num2) {
                return num1 / num2;
            };
            break;
        default:
            return function(){ 
                return "Operation not recognized. Try again!";
            }

    }
}

var adder = operationMaker("add");
var sum = adder(5, 10);

var mult = operationMaker("mult");
var product = mult(5, 10);

var sub = operationMaker("subtract");
var difference = sub(5, 10);

var div = operationMaker("div");
var quotient = div(5, 10);

var test = operationMaker("pizzaburger");
var answer = test(5, 10);

console.log("\nEXERCISE 5: ");
console.log("Sum: ", sum);
console.log("Product: ", product);
console.log("Difference: ", difference);
console.log("Quotient: ", quotient);
console.log("Answer: ", answer);