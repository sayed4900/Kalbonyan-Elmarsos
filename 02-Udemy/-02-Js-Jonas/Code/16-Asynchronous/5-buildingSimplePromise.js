'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happing');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject('You lose');
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => {
    console.error(err);
  });

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

Promise.resolve('ABC').then(x => console.log(x));
Promise.reject('ABC').catch(x => console.error(x));
