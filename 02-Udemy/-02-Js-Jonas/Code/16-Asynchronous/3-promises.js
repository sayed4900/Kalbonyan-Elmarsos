'use strict';

const btn = document.querySelector('.btn-country');
// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // request.send();

const renderCountry = function (data) {
  const html = `
    <article class="country">
     <img class="country__img" src="${data.flags.png}" />
     <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[`${en}`]}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[`${cur}`].name
      }</p>
     </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}
      `);
    })
    .then(res => {
      res.json();
    })
    .then(data => {
      renderCountry(data, 'neighbour');
    });
  // .catch(err => {
  //   console.error(err);
  //   renderError(`Something went wront ${err.message}`//);
  // })
  // .finally(() => {
  //   countriesContainer.style.opacity = 1;
  // });
};

btn.addEventListener('click', function () {
  getCountryData('USA');
});
getCountryData('usa');
