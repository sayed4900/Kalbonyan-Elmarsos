'use strict';
//Sets take only string values but map take any value

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzaria', 'Vegetarain', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 5;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2); // delete key 2 and value ['Lisbon, Portugal']
console.log(rest.size);
// rest.  clear();
console.log('-----------------------------------------------------');

//use array or object as map key

rest.set(document.querySelector('h1'), 'Heading');

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2])); // undfined because array is priity and every object has a address in a memory
console.log(rest.get(arr)); // But this work beacuse arr has only on addres on memory
