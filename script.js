'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal'); //whenever there are multiple elements with the same class, querySelector selects only the first one and hence we have used querySelectorAll here

// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', function () {
//     console.log('clicked');
//   });
// }

const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeHidden = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Conventionally used to iterate over iterable objects
for (let i of showModal) {
  i.addEventListener('click', removeHidden);
}

closeModal.addEventListener('click', addHidden);

overlay.addEventListener('click', addHidden);

//JS generates an event object for every event that occurs which can then be passed to the event handler function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) addHidden();
});
