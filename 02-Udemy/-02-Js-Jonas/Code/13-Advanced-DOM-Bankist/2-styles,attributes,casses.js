'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting element

const message = document.createElement('div');
message.classList.add('cookie-messagge');
message.textContent =
  'We use cookied for improved functionality and analytics.';

message.innerHTML =
  'We use cookied for improved functionality and analytics <button class="btn btn--close-cookie">Go it! </button>';

// header.prepend(message); // top
header.append(message); //bottom

//let's take copy
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //The style property like   only works for inline styles
console.log(message.style.height); //⬆️
console.log(message.style.backgroundColor); //Here it works because it's inline style

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non Standard
console.log(logo.desinger);
//Solve this problem
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use this
// logo.className = 'jonas';
