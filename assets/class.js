class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food=this.food+2
    }   
    eat () {
        if(this.food>0){
            this.food--
        }
        else{
            this.isHealthy = false

        }
    }   
}
class Wagon{
    constructor(capacity){
        this.capacity=capacity
        this.passengers=[]
    }
    getAvailableSeatCount(){
        let seatCount=this.capacity-this.passengers.length
       return seatCount
    }
    join(traveler){
        if(this.getAvailableSeatCount()===0){
            return "Cannot add anymore passengers"
        }
        else{
            this.passengers.push(traveler)
        }
        
    }
    shouldQuarantine(){
        for(let i=0;i<this.passengers.length;i++){
            let currentPassenger=this.passengers[i]
            if(currentPassenger.isHealthy===false){
                return true
            }
            
        }
        return false

            
    
    }
    totalFood(){
        let allFood=0
        for(let i=0;i<this.passengers.length; i++){
            let currentPassenger=this.passengers[i]
            allFood+=currentPassenger.food
        }
        return allFood
    }
}