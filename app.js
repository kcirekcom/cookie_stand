'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeStore = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  randCustPerHour: [],
  avgCookiesPerCust: 6.3,
  totalCookiesPerHour: [],
  totalDailySales: [],
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log();
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.floor(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += (Math.floor(this.randCustPerHour[i] * this.avgCookiesPerCust));
      console.log();
    }
  }
};

firstAndPikeStore.avgCookiesPerCust();
firstAndPikeStore.randCustPerHour();
firstAndPikeStore.totalCookiesPerHour();
firstAndPikeStore.totalDailySales();
