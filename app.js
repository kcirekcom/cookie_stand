'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPikeStore = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  randCustPerHour: [],
  avgCookiesPerCust: 6.3,
  totalCookiesPerHour: [],
  totalDailySales: 0,
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  },
  render: function() {
    firstAndPikeStore.calcRandCustomersPerHour();
    firstAndPikeStore.calcTotalCookiesPerHour();
    var firstandpikeEl = document.getElementById('firstandpike');
    for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      console.log(liEl);
      firstandpikeEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    firstandpikeEl.appendChild(liEl);
  }
};

firstAndPikeStore.render();

var seatacAirportStore = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  randCustPerHour: [],
  avgCookiesPerCust: 1.2,
  totalCookiesPerHour: [],
  totalDailySales: 0,
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  },
  render: function() {
    seatacAirportStore.calcRandCustomersPerHour();
    seatacAirportStore.calcTotalCookiesPerHour();
    var seatacairportEl = document.getElementById('seatacairport');
    for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      console.log(liEl);
      seatacairportEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    seatacairportEl.appendChild(liEl);
  }
};

seatacAirportStore.render();

var seattleCenterStore = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  randCustPerHour: [],
  avgCookiesPerCust: 3.7,
  totalCookiesPerHour: [],
  totalDailySales: 0,
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  },
  render: function() {
    seattleCenterStore.calcRandCustomersPerHour();
    seattleCenterStore.calcTotalCookiesPerHour();
    var seattlecenterEl = document.getElementById('seattlecenter');
    for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      console.log(liEl);
      seattlecenterEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    seattlecenterEl.appendChild(liEl);
  }
};

seattleCenterStore.render();

var capitolHillStore = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  randCustPerHour: [],
  avgCookiesPerCust: 2.3,
  totalCookiesPerHour: [],
  totalDailySales: 0,
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  },
  render: function() {
    capitolHillStore.calcRandCustomersPerHour();
    capitolHillStore.calcTotalCookiesPerHour();
    var capitolhillEl = document.getElementById('capitolhill');
    for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      console.log(liEl);
      capitolhillEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    capitolhillEl.appendChild(liEl);
  }
};

capitolHillStore.render();

var alkiStore = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  randCustPerHour: [],
  avgCookiesPerCust: 4.6,
  totalCookiesPerHour: [],
  totalDailySales: 0,
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailySales += this.totalCookiesPerHour[i];
    }
  },
  render: function() {
    alkiStore.calcRandCustomersPerHour();
    alkiStore.calcTotalCookiesPerHour();
    var alkiEl = document.getElementById('alki');
    for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      console.log(liEl);
      alkiEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    alkiEl.appendChild(liEl);
  }
};

alkiStore.render();
