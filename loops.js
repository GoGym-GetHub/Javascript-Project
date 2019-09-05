// for( i = 0 ; i < 10 ; i++ ){
//   console.log(i);
// 
// }
// the above keeps counting upto the number stipulated
// to reverse the above, start 9 and i >-1 and i--

// let favouriteDrinks = ["Water", "Coke", "Vodka" ];
// console.log(favouriteDrinks[0])
// console.log(favouriteDrinks[1])
//console.log(favouriteDrinks[2])

//favFilms = ["Godfather", "Forrest Gump", "Braveheart", "Tomb Raider", "Shawshank Redemption"]
//favFilms.push("Star Wars", "Hitman")//WORKS
//for (filmIndex = 0; filmIndex < favFilms.length ; filmIndex++){
    //console.log(favFilms[filmIndex])
    // what has this counted ??
//}

//let Films = ["film0", "film1", "Ghostbusters", "film4"]
//let favFilm = "Ghostbusters";

//if(favFilm != "Ghostbusters"){
//    favFilm = Films[Math.floor(Math.random()*4)];
//}

let numWanted = 50
let currentNum = 0

while(currentNum != numWanted){
    console.log(currentNum);
    currentNum = (Math.floor(Math.random()*51));
}
console.log(currentNum)