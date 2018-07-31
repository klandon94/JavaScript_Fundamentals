function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name)
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    }
    
    this.drinkSake = function(){
        this.health += 3
    }

    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health")
        }
        else console.log("that is not a NINJA you are punching!")
    }

    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            let damage = 15 * this.strength
            ninja.health -= damage
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " health")
        }
        else console.log("that is not a NINJA you are kicking!")
    }

}

// var ninja1 = new Ninja("Hyabusa")
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

redNinja.kick(blueNinja)
blueNinja.showStats()
