'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var cookieTable = document.getElementById('salmoncookietable');
var submissionForm = document.getElementById('newstoresubmissionform');
// var removeLocationButton = document.getElementById('button');

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.randCustPerHour = [];
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookiesPerHour = [];
  this.totalDailySales = 0;
  this.calcRandCustomersPerHour = function(){
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
  this.calcTotalCookiesPerHour();
  this.index = allLocations.push(this) - 1;
};

//render function
Store.prototype.render = function(){

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

  tdEl = document.createElement('td');
  var removeLocationButton = document.createElement('button');
  //event listener
  removeLocationButton.addEventListener('click', handleRemovingLocation);
  removeLocationButton.textContent = 'Remove location';
  removeLocationButton.dataset.storeIndex = this.index;
  tdEl.appendChild(removeLocationButton);
  trEl.appendChild(tdEl);
};

//functions
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
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
}

function renderAllLocations(){
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

function makeFooterRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
//below calculates total for all stores per hour
  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++){
      total += allLocations[j].totalCookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = total;
    trEl.appendChild(thEl);
    dailyTotalAllLocations += total;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = dailyTotalAllLocations;
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
}

//event handlers
function handleAddNewEntry(event) {
  event.preventDefault();

  if (!event.target.storelocation.value || !event.target.minimumcustomers.value || !event.target.maximumcustomers.value || !event.target.averagecookiespercustomer.value) {
    return alert('Fields cannot be empty!');
  }

  var storelocation = event.target.storelocation.value;
  var minimumcustomers = parseInt(event.target.minimumcustomers.value);
  var maximumcustomers = parseInt(event.target.maximumcustomers.value);
  var averagecookiespercustomer = parseFloat(event.target.averagecookiespercustomer.value);

  new Store(storelocation, minimumcustomers, maximumcustomers, averagecookiespercustomer);

  event.target.storelocation.value = null;
  event.target.minimumcustomers.value = null;
  event.target.maximumcustomers.value = null;
  event.target.averagecookiespercustomer.value = null;

  cookieTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();
};

function handleRemovingLocation(event) {
  event.preventDefault();
  allLocations.splice(this.dataset.storeIndex, 1);


  cookieTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();
};

//running some awesome codes
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


makeHeaderRow();
renderAllLocations();
makeFooterRow();

//event listener
submissionForm.addEventListener('submit', handleAddNewEntry);
