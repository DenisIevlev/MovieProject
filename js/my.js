'use strict';


let personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false, 
    start: function() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   while(this.count && this.count != "" && isNaN(this.count)){
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
 },
 rememberMyFilms: () => {
        for(let i = 0; i <= 1; i++){
            let firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
            secondQuestion = prompt('На сколько оцените его?', '');
            if(firstQuestion && secondQuestion && 
                firstQuestion.length && secondQuestion.length < 50 && 
                firstQuestion && secondQuestion != ''){
                    personalMovieDB.movies[firstQuestion] = secondQuestion;
                } else {
                  i--;
                }
        }
 },
detectPersonalLevel: () => {
    if(personalMovieDB.count <= 10){
        alert('Too many films watched');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('You are classic watcher');
    } else if(personalMovieDB.count > 30){
        alert('You are a film lovers!');
    } else {
        alert('Error');
    }
},
showMyDB: function() {
    if(this.privat == false){
        return console.log(personalMovieDB);            
    } else {  throw new Error("don't need privat"); }
},
writeYourGenres: () => {
    for(let i = 1; i <= 3; i++){
        let yourFavouriteGenres = prompt(`You're favourite genre on number ${i}`, "");
        if(yourFavouriteGenres && yourFavouriteGenres.length < 50 && yourFavouriteGenres != ""){
            personalMovieDB.genres[i - 1] = yourFavouriteGenres;
        } else {i--; }
    }   
    personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр ${index + 1} — ${item}`));

},
toggleVisibleMyDB: function() {
     if(personalMovieDB.privat == false){
        personalMovieDB.privat = true;
     } else {
         personalMovieDB.privat = false;
     }
 },
};
 personalMovieDB.toggleVisibleMyDB();
 personalMovieDB.start();
personalMovieDB.writeYourGenres();
  