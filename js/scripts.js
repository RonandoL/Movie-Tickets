// Business Logic
var Ticket = function(movieTitle, time, age, qty) {
  this.movieTitle = movieTitle;
  // this.movieYear = movieYear;
  this.time = time;
  this.age = age;
  this.qty = qty;
}

Ticket.prototype.price = function() {
  var setTicketPrice = 10;
  if (this.age >= 65 || this.time < "5:00") {
    return (setTicketPrice * .8) * this.qty;
  } else {
    return (setTicketPrice) * this.qty;
  }
}





// User Interface Logic
