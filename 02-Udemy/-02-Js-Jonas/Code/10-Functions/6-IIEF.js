'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate); ERROR

(() => console.log('This will also never run again'))();

{
  const isPrivate = 11;
  var notPrivate = 22;
}
// console.log(isPrivate); we can't access it
console.log(notPrivate);
