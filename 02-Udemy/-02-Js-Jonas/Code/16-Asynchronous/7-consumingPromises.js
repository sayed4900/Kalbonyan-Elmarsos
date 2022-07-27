'use strict';

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
  countriesContainer.style.opacity = 1;
};
/////////////////
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/rest/v3.1/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} `);
    renderError(` ${err.message}`);
  }
};
whereAmI();
// whereAmI();
// whereAmI();
console.log('1');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message} `))
  .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} `);
  }
  console.log('3: Finished getting location');
})();
