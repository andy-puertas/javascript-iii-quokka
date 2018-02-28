var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

let total = roundScores.reduce((total, score) => {
 })



//Use the sum to get an average



var brackScores = [36, 39, 44, 49, 45, 48, 52]

//Handicap is 4


//Use a map to re duce all scores by 4

let brackAverage = brackScores.map((score) => score - 4)
.reduce((total, score) => total + score) /brackScores.length;

brackAverage

//Use a reduce to get a sum



//Use the sum to get an average



var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together


let fullLyrics = lyricWords.reduce((all, word) => all + word)

let otherWay = lyricWords.join("");

