'use strict';
//storing the result of selection in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal');

//we can see that only the first button which has class show-modal is chosen
// console.log(btnsOpenModal);

//to show all the events which has the class show-modal we use .querySelectorAll function
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//btnsopen modal for each button ku eventlistener eh call panirum using for loop ..througout the program event listener(adhavadhu ready to listen state la irukum) active ah
//dhaan irukum...when u click that particular button event handler will get activated
//puridha

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden'); //dont have to use the . for classes here
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

//declaring the addeventListener fn
//once we click the handler fn is called
overlay.addEventListener('click', closeModal);

//keyboard events are called global elements coz they do not happen in  one particular elements
//we usually listen on the whole document

//how will we know which key was pressed if event happens for all the keys?

//information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed

//so as any key is pressed keydown event obj is generated

//so handler function is waiting for that event to happen

//anytime that an event like this occurs js does in fact generate an object which contains all the info
//about the event itself and we can access the object in the event handler function

//hey js call function when a key down event happens and when u do so please pass in the event object as an argument which
//contains all the details about the event
document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape') {
  //   console.log('esc was pressed');
  // }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
