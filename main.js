class Traveler  {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        return this.food += 2
    }

    eat() {
        if (this.food > 0){
            this.food -= 1
        } else {
            return this.isHealthy = false
        }
    }

}

class Doctor extends Traveler {
    constructor (name) {
        super(name)

    }
    heal(Traveler) {
        Traveler.isHealthy = true
    }

}

class Hunter extends Traveler {
    constructor (name) {
        super(name)
        this.food = 2
    }

    hunt() {
        return this.food += 5
    }

    eat() {
        if (this.food > 1){
            this.food -= 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(Traveler, numOfFoodUnits) {
        this.food -= numOfFoodUnits;
        Traveler.food += numOfFoodUnits
        if (this.food < 0) {
            this.food = 0
        }
        
    }


}

class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){
        return this.capacity - (this.passengers.length )
    }
    
    join(Traveler){
        if(this.passengers.length < this.capacity){
            this.passengers.push(Traveler)

        }
    }

    shouldQuarantine() {
        const imsosick = this.passengers.some(traveler => traveler.isHealthy === false)
        return imsosick
    }

    
    totalFood() {
        
        let allFood = 0

        this.passengers.forEach((Traveler) => {
            console.log(Traveler.name + " " + Traveler.food)
            allFood += Traveler.food 
        })

        return allFood

    }

}
