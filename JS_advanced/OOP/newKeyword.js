// Creating an object
function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this. numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms     // 2
firstHouse.bathrooms    // 2
firstHouse.numSqft      // 1000

// ====================================================

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();           // Rusty just barked!
fido.bark();            // Fido just barked!