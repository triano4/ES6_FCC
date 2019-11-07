ES6: Use class Syntax to Define a Constructor Function

/* Alter code below this line */
class Vegetable{
    constructor(name){
        this.name = name;
    }
}
/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
