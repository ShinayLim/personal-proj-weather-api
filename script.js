'use strict';
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const date_obj = new Date();
const month = month_names[date_obj.getUTCMonth()];
const day = date_obj.getUTCDate();
const year = date_obj.getUTCFullYear();
const new_date = new Date(year, date_obj.getUTCMonth(), day);

const app = document.querySelector('.app');

fetch('https://api.openweathermap.org/data/2.5/weather?q=antipolo&appid=822416170c2a7b90469d166be5d9acc7&units=metric')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const divElement = document.createElement('div');
    divElement.className = 'titlebar';
    divElement.innerHTML = `
      <i class="fas fa-calendar-alt"></i>
      <p class="date">${new_date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      <h4 class="city">${data.name}</h4>
      <p class="description">${data.weather[0].description}</p>
      <div class="temperature">
      <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
      <h2> ${data.main.temp}  &deg;C </h2> </div>
      <div class="detail">
        <div class="col">
            <div class="col">
                <h5>Wind</h5>
                <p>${data.wind.speed} mps</p>
            </div>
            <div class="info">
                <h5>Visibility</h5>
                <p>${data.visibility} m</p>
            </div>
        </div>
        <div class="col">
            <div class="col">
                <h5>Humidity</h5>
                <p>${data.main.humidity}%</p>
            </div>
            <div class="col">
                <h5>Air Pressure</h5>
                <p>${data.main.pressure} Pa</p>
            </div>
        </div>
      </div>
    `;

    const footerElement = document.createElement('footer');
    footerElement.textContent = '@2023 Shinaylim';

    app.insertAdjacentElement('afterbegin', divElement);
    app.insertAdjacentElement('beforeend', footerElement);
  });
