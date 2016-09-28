'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeLocations = [];

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
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
  this.render = function() {
    // console.log('render');
    this.calcTotalCookiesPerHour();
    var cookieTable = document.getElementById('salmoncookietable');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);
    for (var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesPerHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalDailySales;
    trEl.appendChild(tdEl);
  };
  storeLocations.push(this);
  // console.log(storeLocations);
};

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

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

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);

  for (i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
}
makeHeaderRow();
