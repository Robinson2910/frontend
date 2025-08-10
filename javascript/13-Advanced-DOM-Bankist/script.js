'use strict';

//elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button Scrolling

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect(); //left and top properties will be wrt to viewport
  // console.log(s1coords);

  //old way of scrolling

  // console.log(e.target.getBoundingClientRect()); //e.target is the btn that was clicked
  // console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset); //distance btwn current position(top or left of viewport) and top,left of the page is  offset//deprecated
  // console.log(
  //   `height and width of viwepor`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //new method

  section1.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

//////////////////////

//Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el, i) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     const section = document.querySelector(id);
//     console.log(section);
//     section.scrollIntoView({ behavior: 'smooth' });
//     // console.log('LINK');
//   });
// });

//event delegation

//1.add event listener to common parent element

//2.determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  //matching strategy

  if (e.target !== this) {
    console.log('LINK');
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    const section = document.querySelector(id);
    console.log(section);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// The provided code is an example of event delegation in JavaScript. Event delegation is a technique where you attach a single event listener to a common ancestor element of multiple child elements you are interested in. This way, you can manage events efficiently without attaching a separate event listener to each child element.

// Let's break down the code:

// ```javascript
// document.querySelector('.nav__links').addEventListener('click', function (e) {
// ```

// Here, an event listener is added to an element with the class name 'nav__links'. This element is assumed to be a common parent element containing multiple child elements, such as links.

// ```javascript
//   console.log(e.target);
// ```

// This line logs the target of the event to the console. The `e.target` represents the actual element that triggered the event.

// ```javascript
//   //matching strategy
//   if (e.target !== this) {
// ```

// This conditional statement checks whether the target of the event (`e.target`) is the same as the element to which the event listener is attached (`this`). If they are not the same, it means that the event originated from one of the child elements within '.nav__links'.

// ```javascript
//     console.log('LINK');
//     e.preventDefault();
// ```

// If the event originated from a child element, the code logs 'LINK' to the console and prevents the default behavior of the event using `e.preventDefault()`. This is commonly used for anchor (`<a>`) elements to prevent the browser from following the link and navigating to a new page.

// ```javascript
//     const id = e.target.getAttribute('href');
//     console.log(id);
// ```

// It retrieves the value of the 'href' attribute from the clicked element, assuming it is an anchor element. This is used to get the ID of the section to which the link is pointing.

// ```javascript
//     const section = document.querySelector(id);
//     console.log(section);
// ```

// It then selects the section with the retrieved ID using `document.querySelector(id)`.

// ```javascript
//     section.scrollIntoView({ behavior: 'smooth' });
// ```

// Finally, it scrolls the selected section into view with a smooth scrolling behavior.

// In summary, this code uses event delegation to handle click events on child elements within '.nav__links'. It identifies whether a link was clicked, prevents the default behavior, extracts the target section ID, selects the corresponding section, and scrolls smoothly to that section.

///////////////////////////////////

//TABBED Components

/////////////////////////////////////

//bad practice instead use delegation
// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('TAB');
//   })
// );

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  //Guard clause

  if (!clicked) return; //clicked will return null if clicked in tabsContainer hence we return the fn if click returns null

  //active tab

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area

  // console.log(clicked.dataset.tab);

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
/////////////////////////
//Menu fade ANimation
/////////////////////
//Method 1

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 0.5);
// });

//method2

// bind:
// The bind method is used to create a new function with a fixed value for this. Unlike call and apply, bind does not immediately invoke the function. Instead, it returns a new function that, when called, will have the specified this context.
// The syntax for bind is: function.bind(thisArg, arg1, arg2, ...)

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//       logo.style.opacity = 1;
//     });
//   }
// });

///////////////

// //Sticky Navigation
// const initialCoords = section1.getBoundingClientRect(); //at the top of viewport to the section 1 will be the value of top

// //since it is calculated when the page loads itslef it is from top of page to section1

// window.addEventListener('scroll', function () {
//   console.log('coords', window.scrollY, initialCoords.top);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

//Sticky navigation:Intersection Observer API

//intersection observer api allows our code to basically observe changes to the way that a certain target element intersects other element or the way it intersects the viewport

//syntax new IntersectionObserver(callback FontFaceSet,options)

// // Step 1: Create an Intersection Observer
// const options = {
//   root: null, // The viewport is the root(since it is set to null)

//   threshold: 0.1, // When 10% of the element is visible
// };

// const observer = new IntersectionObserver(callback, options); //creating an instance of the class IntersectionObserver

// // Step 2: Define the Callback Function
// function callback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// // Step 3: Observe the Target Element

// // observer.observe(targetElement);
// observer.observe(section1); //call back function will be called when section1 is 10% visible in viewport

//  (0%) Threshold:
// An intersection event will be triggered when the target element enters the viewport or when any part of it becomes visible in the viewport.

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  console.log(entries);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
//its just a visual margin of -90px that gets applied

//it is as if the header had completed 90 px before

//section loading
headerObserver.observe(header);

const allSections = document.querySelectorAll('.section');
// The observer parameter in your revealSection callback function refers to the instance Section Observer.
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObsever = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => section.classList.add('section--hidden'));
allSections.forEach(el => sectionObsever.observe(el));

/************** */
/**********LAZY IMAGES */
/******************** */

const imgTargets = document.querySelectorAll('img[data-src]'); //image with attribute data-src
console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  //entry.taget is the element which just got intersected
  if (!entry.isIntersecting) return;
  console.log(`asdsd ${entry}`);
  entry.target.src = entry.target.dataset.src;
  //usually changing the src from less quality img to high quality images
  //it will take time to load
  //so we listen the target till it gets full loaded and then unblur it

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

//slider

const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector(`.slider__btn--right`);

const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

let currentSlide = 0;
const maxLength = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};
const dotsContainer = document.querySelector('.dots');

slides.forEach((s, i) => {
  const button = document.createElement('button');
  button.className = 'dots__dot';
  button.setAttribute('data-slide', i);
  dotsContainer.insertAdjacentElement('beforeend', button);
});

const dotsActivate = function (slide) {
  const dots = document.querySelectorAll('.dots__dot');
  const currentDot = document.querySelector(
    `.dots__dot[data-slide='${slide}']`
  );

  dots.forEach(el => el.classList.remove('dots__dot--active'));

  // Add 'dots__dot--active' class to the current dot
  currentDot.classList.add('dots__dot--active');
};

const nextSlide = function () {
  if (currentSlide === maxLength - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  dotsActivate(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxLength - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  dotsActivate(currentSlide);
};
dotsActivate(0);
goToSlide(0);

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    console.log(slide);
    goToSlide(slide);
    dotsActivate(slide);
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
    // dotsActivate(currentSlide);
  } else if (e.key === 'ArrowRight') {
    nextSlide();
    // dotsActivate(currentSlide);
  }
});

/////////
//////////

//////////

//dom is an interface between js code and browser(HTML AND CSS)

//allows us to make js interact with browser

//we can use js to create,modify, and delete html elemnts
//set styles,classes,attributes amd listen and respi

//DOM tree is generated from an html document ,which we can then interact with

//DOM is a very complex API that contains lots of methods and properties to interact wiht DOM tree

//dom contains of different type of nodes

//every single node in a dom tree is of the typ node,each node is represnted in js as object

//this object gets acces to spl node methods and properties

//BTS DOM API

//there are different types of nodes

//i) element

//ii)text

//iii)comment

//iv)Document(JUST ANOTHER TYPE OF NODE...IT CONTAINS IMPORTANT METHODS)

// everything that is in html has to go into dom as well

//element type itself has its own child type like butoon ,div element

//INHERITANCE :ALL CHILDTYPES WILL GET ACCES TO ITS PARENTS METHODS AND PROPERTIES

//THERE IS A SPL NODE TYPE CALLED EVENT TARGET(CONTAINS ADDEVENTLISTENER AND REMOVEEVENTLISTENER) THAT IS PARENT TO BOTH NODE TYPE AND ALSO WINDOW TYPE

///////////////////////////////////////////////
/////////////////////////////////////////////////
//////////////////////////////////////////////////

//selecting elements

console.log(document.documentElement); //to apply css styles to entire body we always need to select document
console.log(document.head);
console.log(document.body);

// const allSections = document.querySelectorAll('.section'); //to choose multiple elements(not live collection)
console.log(allSections);

document.getElementById('section--1');

const buttons = document.getElementsByTagName('button'); //returns a html collection(live collection)

console.log(buttons);

console.log(document.getElementsByClassName('btn')); //returns a html collection(live collection)

//creating and inserting elemetns

// insertAdjacentHtml('')

const message = document.createElement('div'); //creates a dom element and assigned to a variable

message.classList.add('cookie-message'); //adding classname to that div

// message.textContent =
//   'We used cookies for improved functionalities and analytics';

message.innerHTML =
  'We used cookies for improved functionalities and analytics <button class="btn btn--close-cookie">Got it!</button> ';

//message is a live element living in the dom..therefore it cannot be at multiple places at same time

//to add dom elmenent to html

// header.prepend(message);
// header.append(message);

// // header.append(message.cloneNode(true));

// header.before(message); //inserts before the header element as a sibling

// header.after(message); //inserts after the header element as a sibling

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); //recent method

//     //message.parentElement.removeChild(message);  (back then this method was used)
//   });

//STYLES (they are set as inline styles)

//.style works for only inline style
// message.style.backgroundColor = '#37383d';

// message.style.width = '120%';

// console.log(message.style.height); //it will not print anything as height is not defined as inline styles

// console.log(message.style.backgroundColor); //this will work

// console.log(getComputedStyle(message).height); //this displays a huge list of all the css properties and using the .operator we can access the particulart property

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); //document.documentElement.style we can access the document root of the css

//ATTRIbutes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.className);

// logo.alt = 'Beautiful Minimalist Logo';

// //non-standard

// console.log(logo.designer); //undefined

// console.log(logo.getAttribute('designer'));

// //setting attributes

// logo.setAttribute('company', 'Bankist');

// //src absolute version and relative

// console.log(logo.src); //absolute
// console.log(logo.getAttribute('src')); //relative

// //href absolute version and relative
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); //absolute
// console.log(link.getAttribute('href')); //relative

//Data attributes

//to create data attributes start with data and divided by -
//in html data-version-number
//these spl attributes are always stored in dataset obj
//in js use camel casing to access it

// console.log(logo.dataset.versionNumber);

//classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not inlcudes as in array

//dont use this because it will overwite all the existing class and replace it with one class
// logo.className = 'jonas';

//event is generaly as signal genrated by some dom node

//eg click,mouse hovering,

//we can listen for these events using event listeners

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener:Great! You are reading the Heading :D');
// };
//mouse enter similar to hover in css
// h1.addEventListener('mouseenter', alertH1);

//alternate way of listening to events(old way not used now)
//setting the property to the fn
// h1.onmouseenter = function (e) {
//   alert('addEventListener:Great! You are reading the Heading :D');
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 10000);

//event bubbling

//rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// //by default it addventlistener will catch events during bubbling phase

// //but if third parameter is set to true event handler will catch event during capturing phase

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor(); //this points to the elemnt on which the addevent listner is
//   console.log('Link', e.target, e.currentTarget); //target is where the event happened ,in this case where the click happened
//   console.log(this === e.currentTarget);

//   // //stop propogation  (not really good idea to stop propogation of events)

//   // e.stopPropagation();//propagation phase will not reach the parent element
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('LINK');
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget); //target is where the event happened, in this case where the click happened
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('LINK');
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget); //target is where the event happened, in this case where the click happened
// });

//the event we receive on each eventlistener fn is the same click event hence the target will be same

//currentTarget is the element which is attached to the eventlisterner fn

//this keyword points to the currentTarget
/*
const h1 = document.querySelector('h1');


//DOM TRaversing

//going downwards:child

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes); //gives us all the child nodes of all types its a node collection(node list)

console.log(h1.children); //gives us only the node of type element and its an html live collection
//.children just gives the direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangeRed';

//Going upwards:parents

console.log(h1.parentNode); //gives us the direct parent
console.log(h1.parentElement); //gives us the direct parent

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//h1.closest('.header') finds the closest parent with class header

h1.closest('h1').style.background = 'var(--gradient-primary)'; //its just the opposite of querySelector,it finds the parent no matter how far it is in the Dom tree




//going sideways:siblings

console.log(h1.previousElementSibling); //to get the previous sibling

console.log(h1.nextElementSibling); //to get next sibling

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

//lifecylce:from the moment that the page is first accesed until the user leaves it

//dom content loaded event is event that aoccurs as soon as the html is completely parsed i.e html is downloaded and converted to DOM tree and scripts downloaded ande executed,it doesnt wait for images and other external resources to load

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML PARSED AND DOM TREE BUILT');
});

//when complete page has finsied loading this event will be fired

window.addEventListener('load', function (e) {
  console.log('page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

//defer and async see web dev simplified
