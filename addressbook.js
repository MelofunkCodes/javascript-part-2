function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

function Email(address, type) {
    this.address = address;
    this.type = type === "work" || type === "home" ? type : "other"; //one liner if-else statement equal to if-else statement commented out below
    
    // if (type === "work" || type === "home") {
    //     this.type = type;
    // }
    // else {
    //     this.type = "other";
    // };
}

Person.prototype.addEmail = function(address, type) {
    var newEmail = new Email(address, type);

    this.emails.push(newEmail);
}

var p1 = new Person("Gin", "Orso");
p1.addEmail("gorso@gmail.com", "work");
p1.addEmail("stardust@gmail.com", "home");
p1.addEmail("pizzaclub35@gmail.com", "fun");

console.log(p1);
