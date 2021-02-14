"use strict"
let hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
console.log(hours);
let seattleCookies = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        let range = seattleCookies.maxCust - seattleCookies.minCust;
        let randomCount = Math.random() * range + seattleCookies.minCust;
        console.log(Math.ceil(randomCount));
        return Math.ceil(randomCount);
    },

    hourlyDailySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numOfCookies = Math.ceil(seattleCookies.randomCust() * seattleCookies.avgCookieSale);
            seattleCookies.hourlySales.push(numOfCookies);
            seattleCookies.dailySales += numOfCookies;
            console.log(numOfCookies);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let h2 = document.createElement('h2');
        parent.appendChild(h2);
        h2.textContent = 'Seattle';
        parent.appendChild(h2);
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + seattleCookies.hourlySales[i] + ' cookies';
            unorderedList.appendChild(listItem);

        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + seattleCookies.dailySales + ' cookies';
        unorderedList.appendChild(listItem);


    },
}


seattleCookies.hourlyDailySales();
seattleCookies.render();

let tokyoCookies = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        let range = tokyoCookies.maxCust - tokyoCookies.minCust;
        let randomCount = Math.random() * range + tokyoCookies.minCust;
        console.log(Math.ceil(randomCount));
        return Math.ceil(randomCount);
    },

    hourlyDailySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numOfCookies = Math.ceil(tokyoCookies.randomCust() * tokyoCookies.avgCookieSale);
            tokyoCookies.hourlySales.push(numOfCookies);
            tokyoCookies.dailySales += numOfCookies;
            console.log(numOfCookies);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let h2 = document.createElement('h2');
        parent.appendChild(h2);
        h2.textContent = 'Tokyo';
        parent.appendChild(h2);
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + tokyoCookies.hourlySales[i] + ' cookies';
            unorderedList.appendChild(listItem);

        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + tokyoCookies.dailySales + ' cookies';
        unorderedList.appendChild(listItem);


    },
}


tokyoCookies.hourlyDailySales();
tokyoCookies.render();

var dubaiCookies = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        let range = dubaiCookies.maxCust - dubaiCookies.minCust;
        let randomCount = Math.random() * range + dubaiCookies.minCust;
        console.log(Math.ceil(randomCount));
        return Math.ceil(randomCount);
    },
    hourlyDailySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numOfCookies = Math.ceil(this.randomCust() * this.avgCookieSale);
            dubaiCookies.hourlySales.push(numOfCookies);
            dubaiCookies.dailySales += numOfCookies;
            console.log(numOfCookies);
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let h2 = document.createElement('h2');
        parent.appendChild(h2);
        h2.textContent = 'Dubai';
        parent.appendChild(h2);
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + dubaiCookies.hourlySales[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + dubaiCookies.dailySales + ' cookies';
        unorderedList.appendChild(listItem);
    },
}
dubaiCookies.hourlyDailySales();
dubaiCookies.render();

let parisCookies = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        let range = parisCookies.maxCust - parisCookies.minCust;
        let randomCount = Math.random() * range + this.minCust;
        console.log(Math.ceil(randomCount));
        return Math.ceil(randomCount);
    },

    hourlyDailySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numOfCookies = Math.ceil(parisCookies.randomCust() * parisCookies.avgCookieSale);
            parisCookies.hourlySales.push(numOfCookies);
            parisCookies.dailySales += numOfCookies;
            console.log(numOfCookies);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let h2 = document.createElement('h2');
        parent.appendChild(h2);
        h2.textContent = 'Paris';
        parent.appendChild(h2);
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + parisCookies.hourlySales[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + parisCookies.dailySales + ' cookies';
        unorderedList.appendChild(listItem);
    },
}
parisCookies.hourlyDailySales();
parisCookies.render();

let limaCookies = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        let range = limaCookies.maxCust - this.minCust;
        let randomCount = Math.random() * range + limaCookies.minCust;
        console.log(Math.ceil(randomCount));
        return Math.ceil(randomCount);
    },

    hourlyDailySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numOfCookies = Math.ceil(limaCookies.randomCust() * limaCookies.avgCookieSale);
            limaCookies.hourlySales.push(numOfCookies);
            limaCookies.dailySales += numOfCookies;
            console.log(numOfCookies);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let h2 = document.createElement('h2');
        parent.appendChild(h2);
        h2.textContent = 'Lima';
        parent.appendChild(h2);
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + limaCookies.hourlySales[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + limaCookies.dailySales + ' cookies';
        unorderedList.appendChild(listItem);
    },
}
limaCookies.hourlyDailySales();
limaCookies.render();