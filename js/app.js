'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function Shops(locationName, minCustomers, maxCustomers, avgCookies) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.total = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    
    
    Shops.prototype.randomCust = function random(minCustomers, maxCustomers) {
        return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}
}


Shops.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(Math.floor(Math.random(this.minCustomers, this.maxCustomers)));
    }
}

Shops.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

        this.total += this.cookiesEachHour[i]
    }
}

let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);
const shoplist = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
console.log(seattle);
 console.log(tokyo);
 console.log(dubai);
 console.log(paris);
 console.log(lima);

let parent = document.getElementById('container');
console.log(parent);
let table = document.createElement('table');
parent.appendChild(table)
let headerRow = document.createElement('tr');
table.appendChild(headerRow);
let th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = '-----';

for(let i=0; i<hours.length;i++){
    let th =document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i];
}
let th1 =document.createElement('th');
headerRow.appendChild(th1);
th1.textContent = 'Daily location Total';


let footerRow = document.createElement('tr');
table.appendChild(footerRow);
for(let i=0; i<shoplist.length;i++){
    let th2 =document.createElement('th');
    footerRow.appendChild(th2);
    th2.textContent = shoplist[i];

}
let th3 = document.createElement('th');
footerRow.appendChild(th3);
th3.textContent = 'Totals';