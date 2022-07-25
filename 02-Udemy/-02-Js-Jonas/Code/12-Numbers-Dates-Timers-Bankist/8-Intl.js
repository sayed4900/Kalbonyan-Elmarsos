'use strict';

const num = 5388489.548;

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false,
};
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
