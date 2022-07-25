/*

//PRIMTIVE VALUES
let age = 22;
let oldAge = age;
age--;
console.log(age);
console.log(oldAge);

//REFERENCE VALUES
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 15;
console.log('Friend:', friend); // age = 15
console.log('Me:', me); // age = 15 also ! because the object is reference

me.name = 'sayed';
console.log(me);
console.log(friend); // friend.name = 'sayed
me.lastName = 'A';
console.log(friend);

*/

let lastName = 'Ahemd';
let oldName = lastName;
lastName = 'Morsi';
console.log(lastName, oldName);

const heba = {
  firstName: 'Heba',
  lastName: 'Abdo',
  age: 27,
};
const marriedHeba = heba;

marriedHeba.firstName = 'jorya';
console.log('Before marriage : ', heba.firstName);
console.log('After marriage : ', marriedHeba.firstName);

const heba2 = {
  firstName: 'Heba',
  lastName: 'Abdo',
  age: 27,
  family: ['Ahmed', 'Karma'],
};

const hebaCopy = Object.assign({}, heba2);
hebaCopy.lastName = 'mohamed';
console.log('Before marriage : ', heba2);
console.log('After marriage : ', hebaCopy);

/* NOTES
Object.assing() make a shallow copy so that if the object has object inside it when we 
copy the it we can't change the inner object 

*/
hebaCopy.family.push('Mary');
hebaCopy.family.push('Sara');
console.log('Before marriage : ', heba2);
console.log('After marriage : ', hebaCopy);
