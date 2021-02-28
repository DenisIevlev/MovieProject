'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for(let i = 0; i <= 1; i++){
    let firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    secondQuestion = prompt('На сколько оцените его?', '');
    if(firstQuestion && secondQuestion && 
        firstQuestion.length && secondQuestion.length < 50 && 
        firstQuestion && secondQuestion != ''){
            personalMovieDB.movies = firstQuestion + ":" + secondQuestion;
        } else {
          i--;
        }
}
if(personalMovieDB.count <= 10){
        alert('Too many films watched');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('You are classic watcher');
    } else if(personalMovieDB.count > 30){
        alert('You are a film lovers!');
    } else {
        alert('Error');
    }
console.log(personalMovieDB);


