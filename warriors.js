//creating constructor function 
function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random() * 100 + 1);
    this.fight = function() {
        console.log("rushes to the arena with ");
    };
    this.faceoff = function(opponent) {
        if (this.power > opponent.power) {
            console.log("You won!");
        }
        else if (this.power < opponent.power) {
            console.log("You lost!");
        }
        else {
            console.log("Equal powered! You guys become friends!");
        }
    };

}

// Warrior.prototype.fight = function() {
//     console.log("rushes to the arena with ");
// };

// Warrior.prototype.faceoff = function(opponent) {
//     if (this.power > opponent.power) {
//         console.log("You won!");
//     }
//     else if (this.power < opponent.power) {
//         console.log("You lost!");
//     }
//     else {
//         console.log("Equal powered! You guys become friends!");
//     }
// }

var w1 = new Warrior("Xena", "F");
var w2 = new Warrior("Hercules", "M");
var w3 = new Warrior("Darth Vader", "M");
var w4 = new Warrior("Sailormoon", "F");

console.log(w1.power);
console.log(w2.power);
console.log(w3.power);
console.log(w4.power);

w1.faceoff(w2);
w1.faceoff(w3);
w1.faceoff(w4);
w4.faceoff(w2);
