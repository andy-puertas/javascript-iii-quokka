var athletes = [
    {
        name: "RunGuy",
        speed: 10,
        strength: 7,
        wits: 4
    }, {
        name: "YoungGuy",
        speed: 7,
        strength: 4,
        wits: 6
    }, {
        name: "DumGuy",
        speed: 8,
        strength: 10,
        wits: 1
    }, {
        name: "FunGuy",
        speed: 5,
        strength: 5,
        wits: 8
    },{
        name: "StunGun",
        speed: 8,
        strength: 8,
        wits: 8
    }
]

//Filter OUT all athletes with wits 5 or higher

let jocks = athletes.filter((athlete)=>{
    if (athlete.wits>=5){
        return false;
    } 
        return true
})


//Filter IN all athletes with a strength higher than 6

let strongMen = athletes.filter((athlete)=>athlete.strength>6);



//Filter OUT all althletes that don't have Guy in their name

let theGuys = athletes.filter(athlete=>athlete.name.includes('Guy'));
let theNotGuys = athletes.filter(athlete=> !athlete.name.includes('Guy'))


