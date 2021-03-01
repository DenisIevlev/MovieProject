'use strict';
let numberOfFilms;

function start(){
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   while(numberOfFilms && numberOfFilms != "" && isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};
showMyDB();

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
if(personalMovieDB.count <= 10){
        alert('Too many films watched');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('You are classic watcher');
    } else if(personalMovieDB.count > 30){
        alert('You are a film lovers!');
    } else {
        alert('Error');
    }
}
    function showMyDB(){
        if(personalMovieDB.privat == false){
            return console.log(personalMovieDB);            
        } else {  throw new Error("don't need privat"); }
    }
    function writeYourGenres(){
        for(let i = 1; i <= 3; i++){
        let yourFavouriteGenres = prompt(`You're favourite genre on number ${i}`, "");
        if(yourFavouriteGenres && yourFavouriteGenres.length < 50 && yourFavouriteGenres != ""){
            personalMovieDB.genres[i - 1] = yourFavouriteGenres;
        } else {i--; }
    }   
}
writeYourGenres();
