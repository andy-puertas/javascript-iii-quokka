let yessa = {
    name: "Yessa Helpa",
    race: "Gungan",
    favoritePhrase: "Yessa",
    skills: ["Jumping", "talking", "talking more", "'helping'"],
    planet: "Binksia",
    friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
}

//Get yessa's name and favoritePhrase


// let name = yessa.name
let { name , race, skills} = yessa




//Instead of person, pick off the parameters: name, planet, skills
//on the first line of the function
function logPerson({name, planet, skills}){
    return `${name} enjoys ${skills.join(', ')} on planet ${planet}`
}



//pick off the parameters: name, friends, race
//instead of the parameter
function friendPerson(person){

}

logPerson(yessa)