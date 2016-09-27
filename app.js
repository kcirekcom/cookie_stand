'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeLocations = [];

function Store (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.randCustPerHour = [];
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookiesPerHour = [];
  this.totalDailySales = 0;
  this.calcRandCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  this.calcTotalCookiesPerHour = function(){
    this.calcRandCustomersPerHour();
    for (var i = 0; i < hours.length; i++){
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  };
  // storeLocations.push(this);
  this.render = function() {
    this.calcTotalCookiesPerHour();
    for (var i = 0; i < hours.length; i++){
      storeLocations.push(this);
    }
    // function cookieTableJS () {
    //   var cookieTable = document.getElementById('salmoncookietable');
    //   cookieTable.appendChild(trEl);
    // }
    // cookieTableJS();
  };
};

for (var i = 0; i < storeLocations.length; i++) {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  console.log('storeLocations[i]', storeLocations[i]);
  tdEl.textContent = storeLocations[i];
  trEl.appendChild(tdEl);
}

function makeHeaderRow(){
  var cookieTable = document.getElementById('salmoncookietable');
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  cookieTable.appendChild(trEl);
}
makeHeaderRow();

var firstAndPikeStore = new Store('First and Pike', 23, 65, 6.3);
var seatacAirportStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

firstAndPikeStore.render();
seatacAirportStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();



// liEl = document.createElement('li');
// liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// firstandpikeEl.appendChild(liEl);

// var seatacAirportStore = {
//   locationName: 'SeaTac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   randCustPerHour: [],
//   avgCookiesPerCust: 1.2,
//   totalCookiesPerHour: [],
//   totalDailySales: 0,
//   calcRandCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//     }
//   },
//   calcTotalCookiesPerHour: function() {
//     this.calcRandCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     this.calcTotalCookiesPerHour();
//     var seatacairportEl = document.getElementById('seatacairport');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       console.log(liEl);
//       seatacairportEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     seatacairportEl.appendChild(liEl);
//   }
// };
//
// seatacAirportStore.render();
//
// var seattleCenterStore = {
//   locationName: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   randCustPerHour: [],
//   avgCookiesPerCust: 3.7,
//   totalCookiesPerHour: [],
//   totalDailySales: 0,
//   calcRandCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//     }
//   },
//   calcTotalCookiesPerHour: function() {
//     this.calcRandCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     this.calcTotalCookiesPerHour();
//     var seattlecenterEl = document.getElementById('seattlecenter');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       console.log(liEl);
//       seattlecenterEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     seattlecenterEl.appendChild(liEl);
//   }
// };
//
// seattleCenterStore.render();
//
// var capitolHillStore = {
//   locationName: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   randCustPerHour: [],
//   avgCookiesPerCust: 2.3,
//   totalCookiesPerHour: [],
//   totalDailySales: 0,
//   calcRandCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//     }
//   },
//   calcTotalCookiesPerHour: function() {
//     this.calcRandCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     this.calcTotalCookiesPerHour();
//     var capitolhillEl = document.getElementById('capitolhill');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       console.log(liEl);
//       capitolhillEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     capitolhillEl.appendChild(liEl);
//   }
// };
//
// capitolHillStore.render();
//
// var alkiStore = {
//   locationName: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   randCustPerHour: [],
//   avgCookiesPerCust: 4.6,
//   totalCookiesPerHour: [],
//   totalDailySales: 0,
//   calcRandCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//     }
//   },
//   calcTotalCookiesPerHour: function() {
//     this.calcRandCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     this.calcTotalCookiesPerHour();
//     var alkiEl = document.getElementById('alki');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       console.log(liEl);
//       alkiEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     alkiEl.appendChild(liEl);
//   }
// };
//
// alkiStore.render();
