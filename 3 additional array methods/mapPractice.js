var answers = ["yes", "no", "yes", "no", "no", "no"]

//map over answers
//change yes into no and no into yes

answers = answers.map((answer) => {
    if (answer === 'yes'){
        return 'no';
    } else if(answer==='no'){
        return 'yes';
    } else{
        return "I don't know"
    }
})

answers


//DESIRED RESULT = ["no", "yes", "no", "yes", "yes", "yes"]


var employees = [
    { name: "a-aron", pay: 12 },
    { name: "b-bron", pay: 18 },
    { name: "c-ron", pay: 20 },
    { name: "le-bron", pay: 21 },
]

//map over employees and give each employee a bump in pay by 3.
//split on the - in name and turn name into first_name and last_name
//save it to a new array variable

let newEmployee = employees.map((employee) => {
    let names = employee.name.split('-');
    return {
        first_name: names[0],
        last_name: names[1],
        pay: employee.pay +3
    }
})


newEmployee


//DESIRED RESULT = 
/*
var employees = [
    { last_name: "aron", first_name: "a", pay: 15 },
    { last_name: "bron", first_name: "b", pay: 21 },
    { last_name: "ron", first_name: "c", pay: 23 },
    { last_name: "bron", first_name: "le", pay: 24 },
]
*/