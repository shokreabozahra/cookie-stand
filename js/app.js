'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


 function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let shops = [];

function Shop(locationName, minCustomers, maxCustomers, avgCookies) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalCookiesPerDay = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    shops.push(this);

}

Shop.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
    }
}

Shop.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

        this.totalCookiesPerDay += this.cookiesEachHour[i]
    }
}

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

console.log(shops);


let parent = document.getElementById('parent');
//console.log(parent);
let table = document.createElement('table');
parent.appendChild(table);

function makeHeader() {
    
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let firstTh = document.createElement('th');
    firstTh.textContent = '-----';
    headerRow.appendChild(firstTh);
    
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = hours[i];
    }
    let lastTh = document.createElement('th');
    lastTh .textContent = 'Daily location Total';
    headerRow.appendChild(lastTh );
    
}
makeHeader();
Shop.prototype.render = function() {
    
    
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let nameData = document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent = this.locationName;
    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesEachHour[i];
        dataRow.appendChild(tdElement)
        
    }
    
    let totalForEachShop = document.createElement('td');
    dataRow.appendChild(totalForEachShop);
    totalForEachShop.textContent = this.totalCookiesPerDay
    
    
}
for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustomersEachHour();
    shops[i].calcCookiesEachHour();
    shops[i].render();
}
let makeFooter = function() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = "totals";
    let megaTotal=0;
    for (let i = 0; i < hours.length; i++) {
        let totalEachHour = 0;
        
     for (let j = 0; j < shops.length; j++) {
         totalEachHour+=shops[j].cookiesEachHour[i];
         megaTotal+=shops[j].cookiesEachHour[i];
         
     }   
     footerTh= document.createElement('th');
     footerRow.appendChild(footerTh);
     footerTh.textContent=totalEachHour

    }
    let finalTh = document.createElement('th');
    footerRow.appendChild(finalTh);
    finalTh.textContent = megaTotal;
}
makeFooter();




