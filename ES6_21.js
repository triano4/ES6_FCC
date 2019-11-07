ES6: Use getters and setters to Control Access to an Object

/* Alter code below this line */
class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    get temperature(){
        return (this.fahrenheit - 32) * 5 / 9;
    }

    set temperature(celsius){
       this.fahrenheit = (celsius * 9) / 5 + 32;
    }
}

/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
