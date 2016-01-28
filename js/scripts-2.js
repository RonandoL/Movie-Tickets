// Business Logic
var Ticket = function(Movie) {
  //this.movieYear = movieYear;
  //do some math here with the movie object's properties to calc ticket price
this.price = price;
}

Ticket.prototype.price = function() {
  var setTicketPrice = 10;
  if (this.age >= 65 || this.time < "5:00") {
    return (setTicketPrice * .8) * this.qty;
  } else {
    return (setTicketPrice) * this.qty;
  }
}

var Movie = function(movieTitle, time, age, qty) {
  this.movieYear = movieYear;
}

Ticket.prototype.movieYears = function() {
  var starWars = { name: "Star Wars", year: 1979 };
  var superman = { name: "Superman", year: 2001 };
  var spiritedAway = { name: "Spirited Away", year: 1995 };

  var movies = { movieList: [starWars, superman, spiritedAway] };

  movies.movieList.forEach(function(movie) {
    var movieYear = movie.year;
    return movieYear;
  });
}


//create movie object
//input field : dropdown box of titles
//dropdown box of times
//dropdown box

var newMovie = new Movie(movieTitle, age, times, qty);
var newTicket = new Ticket(newMovie);

//then generate ticket object


// User Interface Logic
