describe("Ticket", function() {
  it("creates a ticket that specifies movie title, time, and user's age and qty of tickets based on input", function() {
    var testTicket = new Ticket("Princess Mononoke", "5:00", 16, 1);
    expect(testTicket.movieTitle).to.equal("Princess Mononoke");
    expect(testTicket.time).to.equal("5:00");
    expect(testTicket.age).to.equal(16);
    expect(testTicket.qty).to.equal(1);
  });

  it("creates ticket that calculates twenty percent price discount if user age is over 65", function() {
    var testTicket = new Ticket("Star Wars", "5:00", 70, 1)
    expect(testTicket.price()).to.equal(8);  // 80% of $10 ticket price
  });

  it("creates a ticket that calculates a twenty per cent discount if the time is before 5:00", function() {
    var testTicket = new Ticket("Zombieland", "3:00", 35, 1)
    expect(testTicket.price()).to.equal(8);
  });

  it("creates ticket that calculates total price based on quantity", function() {
    var testTicket = new Ticket("Zombieland", "6:00", 35, 2)
    expect(testTicket.price()).to.equal(20);
  });


});
