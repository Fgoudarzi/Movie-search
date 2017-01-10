
function Movie() {
  this.title = "";
  this.year = "";
  this.rated = "";
  this.released = "";
  this.runtime = "";
  this.genre = "";
  this.director = "";
  this.writer = "";
  this.actors = "";
  this.plot = "";
  this.language = "";
  this.country = "";
  this.awards = "";
  this.poster = "";
  this.imdbRating ="";
}

var titanic = new Movie();
titanic.title = "Titanic";
titanic.year = "1997";
titanic.rated = "PG-13";
titanic.released = "19 Dec 1997";
titanic.runtime = "194 min";
titanic.genre = "Drama, Romance";
titanic.director = "James Cameron";
titanic.writer = "James Cameron";
titanic.actors = "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates";
titanic.plot = "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.";
titanic.language = "English";
titanic.country = "USA";
titanic.awards = "Won 11 Oscars. Another 110 wins & 73 nominations.";
titanic.poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BZDNiMjE0NDgtZWRhNC00YTlhLTk2ZjItZTQzNTU2NjAzNWNkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg";
titanic.imdbRating ="7.7";




var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

  $scope.movie = titanic;
});

