// Business Logic
function Ticket(movieName, time, age, quantity) {  // parameters
  this.movieName = movieName;  // properties
  this.time = time;
  this.age = age;
  this.quantity = quantity;
  // this.movieYear = movieYear;
}

Ticket.prototype.price = function() {
    var setTicketPrice = 10;
    if (this.time < "6:00" || this.age >= 65 || this.titlee === "12 Angry Men") {
      return (setTicketPrice * 0.8 * this.quantity);
    } else {
      return setTicketPrice * this.quantity;
    }
}

// Ticket.prototype.movieYears = function() {
//   var starWars = { name: "Star Wars", year: 1979 };
//   var superman = { name: "Superman", year: 2001 };
//   var spiritedAway = { name: "Spirited Away", year: 1995 };
//
//   var movies = { movieList: [starWars, superman, spiritedAway] };
//
//   movies.movieList.forEach(function(movie) {
//         var movieYear = movie.year;
//         return movieYear;
//   });
// }

// User Interface Logic
$(document).ready(function() {
  $("#buyButton").click(function(event) {
    var age = parseInt($("input#age").val());
    var movies = $('select#movieTitles').val();
    var time = $('select#time').val();
    var quantity = parseInt($('input#quantity').val());

    var newTicket = new Ticket (movies,time,age,quantity);

    $('#ticketInfo').empty();
    $('#ticketPrice').empty();
    $("#ticketInfo").append("<li>Your age: " + age + "</li>" + "<li>Movie Title: " + movies + "</li>" + "<li>Time: " + time + "</li>");

    $("#ticketPrice").append("<li>$" + newTicket.price() + ".00</li>");





    event.preventDefault();
  });
});
