// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object


class Ninja{
    constructor(name, bestTime, farthestDifficulty){
        this.name = name;
        this.bestTime = bestTime;
        this.farthestDifficulty = farthestDifficulty;

        this.followers = 0;
        this.starRating = 0;
    }

    newTime(newTime){
        if (newTime < this.bestTime){
            this.bestTime = newTime;
        }
    }
    newDifficulty(difficulty){
        if (difficulty > this.farthestDifficulty){
            this.farthestDifficulty = difficulty;
        }
    }

    getStats(){
        return `The Ninja Warrior ${this.name} has gotten through ${this.farthestDifficulty} in ${this.bestTime}`
    }
}


let brack = new Ninja('Brack', 10000, .1);
let brackStats = brack.getStats();

brack.newDifficulty(.11)
brackStats = brack.getStats()
brackStats

let naruto = new Ninja('Naruto', 500, 50);
let narutoStats = naruto.getStats();
narutoStats