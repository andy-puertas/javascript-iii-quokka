var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'


for ( key in drink){
    let value = drink[key]
    if ( drink[key] === "orange"){
        drink[key] = "cherry"
    }
}

drink

//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy


function checkValid(obj){
    for(key in obj){
        if ( !obj[key] ){
            return false;
        }
    }
    return true;
}

checkValid(drink);