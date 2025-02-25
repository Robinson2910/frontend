'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};
/*
///////////////////////////////////////
//our first ajax call:XMLHttpRequest

// Define a function called getCountryData that takes a country name as a parameter
const getCountryData = function (country) {
  // Create a new XMLHttpRequest object for making HTTP requests
  const request = new XMLHttpRequest();

  // Configure the request for a GET request to a specific URL
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  // Send the HTTP request to the server
  request.send();

  // Add an event listener to handle the response when it's loaded

  // request.addEventListener('load', function () { ... });: An event listener is added to the XMLHttpRequest object to handle the response when it's loaded. When the response is received from the server, the function inside the event listener is executed.

  // Inside the event listener function:

  request.addEventListener('load', function () {
    // Parse the response text (in JSON format) into an object
    const [data] = JSON.parse(this.responseText);

    // Log the country's data to the console for debugging
    console.log(data);

    // Create an HTML representation of the country's information
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

    // Insert the HTML representation into the web page
    countriesContainer.insertAdjacentHTML('beforeend', html);

    // Make the container visible by setting its opacity to 1
    countriesContainer.style.opacity = 1;
  });
};
//two ajax call happening at same time,whatever arrives first will fire the load event first,and that will be displayed first
getCountryData('portugal');
getCountryData('usa');

getCountryData('germany');
*/

////////////////////////////////

//Welcome to Callback Hell
/*
const getCountryAndNeighbour = function (country) {
  //Ajax call country 1

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    let [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    //Get neighbour country (2)

    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    //AJAX CALL country 2

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      data = JSON.parse(this.responseText);
      console.log(neighbour);
      console.log(data);
      renderCountry(data, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

// This code first fetches information about one country, then checks if it has a neighboring country, and if so, fetches information about the neighboring country. 
//The "Callback Hell" problem arises from the nested structure of the XMLHttpRequest callbacks, making the code less readable and harder to maintain. 
//Modern JavaScript often uses Promises or async/await to handle asynchronous operations more cleanly and avoid callback nesting.

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/*

///////////////////////////////////////
// Consuming Promises
// Chaining Promises




// Promise Creation:
// When you use the fetch function to make an HTTP request, it returns a promise immediately set to pending state.
// This promise represents the eventual result of the asynchronous operation (i.e., the HTTP request).

// Asynchronous Operation:
// The HTTP request initiated by fetch is an asynchronous operation. It takes some time to complete because it involves sending the request to a remote server,
// waiting for a response, and receiving the response data.

// Promise State:
// At the beginning, the promise returned by fetch is in a "pending" state. It hasn't been resolved yet.

// Resolution:
// When the asynchronous operation is complete (i.e., the server has responded), the promise will transition to one of two possible states:
//  "fulfilled" if it was successful, or "rejected" if there was an error.

// If the request is successful (e.g., you receive a valid HTTP response from the server), the promise is "fulfilled." The response object represents the successful result.
// If there's an error (e.g., the server is unreachable or returns an error status code), the promise is "rejected." In this case, you can use a .catch method to handle errors.
// Handling Resolution:
// To handle the resolution of the promise, you use .then and .catch methods. These methods allow you to specify what should happen when the promise is either fulfilled or rejected.

// Promises are a special type of object in JavaScript. While they are not technically a new data type or class, they are objects that represent the state and outcome of an asynchronous operation. Promises have several distinctive characteristics:

// 1. **Object with Properties and Methods**: Promises are JavaScript objects that have properties and methods. The main properties are `state` (which can be "pending," "fulfilled," or "rejected") and `result` (which holds the resolved value or error). Promises also have methods like `.then()`, `.catch()`, and `.finally()`.

// 2. **Async State Management**: Promises provide a way to manage asynchronous operations and their outcomes in a more organized and structured manner. They allow you to register callback functions to be executed when the asynchronous operation is complete, whether it's successful or encounters an error.

// 3. **Chaining**: Promises support chaining using the `.then()` method. This enables you to sequence asynchronous operations and handle their results in a fluent and readable way.

// 4. **Error Handling**: Promises also have built-in error handling through the `.catch()` method, allowing you to specify how errors should be handled in a more consistent manner.

// 5. **Immutability**: Once a promise is in a fulfilled or rejected state, it cannot transition to another state or change its result. This immutability is a key characteristic of promises.

// So, while promises are objects in JavaScript, they are objects designed specifically to handle asynchronous operations and provide a standardized way of working with them. Promises are essential for managing asynchronous code in a more predictable and maintainable fashion.

//PROMISE TRANSITIONED INTO REJECTED STATE ONLY WHEN USER GOES OFFLINE

// Define a function called getCountryData that takes a country parameter.
const getCountryData = function (country) {
  // Make an HTTP GET request to the REST Countries API for the specified country.
  fetch(`https://restcountries.com/v2/name/${country}`)
    // When the response is received from the API, execute the following callback:
    .then(function (response) {
      // Log the HTTP response to the console for debugging.
      // The fetch function returns a Promise that represents the asynchronous HTTP request. This Promise can have different states: pending, fulfilled, or rejected.

      // When the HTTP request is successful (i.e., the server responds with a valid HTTP response), the Promise returned by fetch is fulfilled,
      // and the then method is called with the response as its argument.

      // So, response is the fulfilled value of the Promise, not a Promise itself.
      // It represents the HTTP response received from the server, and you can access its properties and methods directly.

      console.log(response); //respone is fullfilled  value of the returned promise(even page is not found it is fullfiled promise)
      // Extract and parse the JSON data from the response.
      return response.json(); //asynchronous in nature and it also returns a promise and once json data has been extracted completely it will be passed as argument to the then function
    })

    // After successfully parsing the JSON data, execute the following callback:
    .then(function (data) {
      // Log the parsed JSON data to the console.
      console.log(data);  //data is fullfilled  value of the returned promise(even page is not found it is fullfiled promise)
      // Call a renderCountry function to display the country data.
      // renderCountry(data[0]);
    });
};

getCountryData('usa');

// Parsing JSON Data: response.json() is a method that parses the JSON data from the HTTP response body.
//  When the server responds with JSON-formatted data (common for many APIs), this method is used to convert the raw JSON text into a JavaScript object.

// Promise Chaining: response.json() returns a promise itself.
// By returning this promise within the first .then() callback, you are effectively chaining another promise to the sequence.
// This allows you to handle the parsed JSON data in the subsequent .then() block.

// Asynchronous Operation: JSON parsing is an asynchronous operation because it may involve reading and processing a potentially large amount of data from the response body.
//  By returning a promise from response.json(), the code ensures that the next .then() block won't execute until the JSON data is fully parsed.

// Structured Data: Once response.json() completes successfully, the data variable in the second .
// then() block will contain a JavaScript object representing the structured data from the API response.
// This structured data can then be used in your code for various purposes, such as rendering it on a webpage or performing further data processing.

// In summary, response.json() is used to extract and parse the JSON data from the HTTP response,
//  and it plays a crucial role in converting the raw response into a usable JavaScript object.
//  Without it, you would be dealing with raw JSON text, which is less convenient to work with in JavaScript.

*/
// const getCandN = function (country) {
//   // make an http get request to rest api countries
//   //it returns a promise initilaly in pending state
//   //once it has received response from server it is transitioned into fullfilled or rejected state
//   //once it has recever response,the then fn is called and fullfilled or rejected value is passed as an argument
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //return a promise with fullfild value set to js object(converts json formatted text to javascript object)
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//       const neigbour = data[0].borders?.[0];
//       if (!neigbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neigbour}`);//returns a promise with pending state intially once it has been resolved it is transnitionedd to resolved state or fullfilled state
//     })
//     .then(function (response) {
//       return response.json();//returns a promise with fullfilled value set to response.json(i,e an js onject)
//     })
//     .then(function (data) {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// //finally will be called no matter what,it doesnt oblige by a condition

// //.catch also returns a promise thats why chaining is possible
//////////////////////////

// Handling Rejected Promises
// Thro wing Errors Manually

// btn.addEventListener('click', function () {
//   getCandN('usa');
// });

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);

      const neigbour = data[0].borders?.[0];
      if (!neigbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neigbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });

  //if any where the error occurs
  //error propogates down and gets caught in the catch method
};
// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/
/* on the provided transcript, here are some key notes to help you study how asynchronous JavaScript works behind the scenes:

### Introduction to JavaScript Runtime
- JavaScript runtime is a container that includes components necessary to execute JavaScript code.
- The heart of the JavaScript runtime is the engine, which executes code and manages memory.
- JavaScript has a single thread of execution, which means it can only do one thing at a time.
- Web APIs environment includes APIs like DOM manipulation, timers, fetch, and geolocation.

### The Event Loop
- The event loop is crucial for enabling asynchronous behavior in JavaScript.
- Asynchronous tasks run in the web APIs environment and not in the call stack.
- Callback functions are used to handle asynchronous behavior.
- The callback queue holds ready-to-be-executed callback functions.
- The event loop takes callbacks from the callback queue and puts them into the call stack when it's empty.
- Event loop coordination ensures that asynchronous code doesn't block the main thread.

### Asynchronous Image Loading
- Image loading happens asynchronously in the web APIs environment.
- An event listener is used to attach a callback function to the image load event.
- The callback function for the image load event is registered in the web APIs environment.
- When the load event is emitted, the callback is added to the callback queue.
- The event loop picks up the callback from the queue and executes it.

### AJAX Calls and Promises
- AJAX calls using the fetch API also happen asynchronously in the web APIs environment.
- Promises are used to handle the asynchronous nature of fetch.
- Promises have their own queue called the microtasks queue.
- Microtasks have priority over regular callbacks in the callback queue.
- The event loop ensures that microtasks are executed before regular callbacks.

### Summary
- Asynchronous JavaScript leverages the event loop, callback queue, and web APIs environment to manage asynchronous tasks efficiently.
- Understanding this process is essential for writing effective asynchronous code.
- This knowledge will be valuable for coding and job interviews.


*/

///////////////////////////////////////
// The Event Loop in Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0); //to callback queueu
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //to microtaskqueue

// //microtaks queue
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

//since microtask queue is preffered over callback queueue the callback fn inside timeout will be delayed

////////////////////////////
/*
//Building a simple Promise

// In JavaScript, promises are a way to handle asynchronous operations and provide a more structured and readable way to work with asynchronous code. 
Promises represent a value that may not be available yet but will be resolved at some point in the future, either successfully (fulfilled) or with an error (rejected). Here's how you can create and use promises in JavaScript:

// 1. Creating a Promise:
//    You can create a promise using the `Promise` constructor. It takes a single argument, which is a function with two parameters:
//`resolve` and `reject`. Inside this function, you perform your asynchronous task and call `resolve` when the task is successful,
//or `reject` when there's an error.

const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve('Success!'); // Resolve the promise with a value
    } else {
      reject('Error!'); // Reject the promise with an error
    }
  }, 1000); // Simulating an async task with a setTimeout
});

// 2. Consuming a Promise:
//    You can use the `.then()` method to handle the resolved value and the `.catch()` method to handle errors when the promise is rejected. You can also use `.finally()` to perform actions regardless of whether the promise is resolved or rejected.

myPromise
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(error => {
    console.error('Rejected:', error);
  })
  .finally(() => {
    console.log('Finally block always runs.');
  });

// 3. Chaining Promises:
//    You can chain promises using `.then()`. Each `.then()` call returns a new promise, allowing you to create a sequence of asynchronous operations.

myPromise
  .then(result => {
    console.log('Resolved:', result);
    return 'Additional Data';
  })
  .then(data => {
    console.log('Chained Promise Result:', data);
  })
  .catch(error => {
    console.error('Rejected:', error);
  });
*/
// "Promisifying" is a technique in JavaScript used to convert a function that relies on traditional callback-style
// i.e asynchronous programming into a function that returns a Promise.
//  This makes it easier to work with asynchronous code in a more modern and readable manner,
//   especially when dealing with functions that perform I/O operations or other asynchronous tasks.

//Promisfying setTimeout
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 100);
  });
};
//when wait(1) is called it immediately returns a promise set to pending
//after one second it is set to fullfilled and then the then fn call the callback fn
wait(1)
  .then(() => {
    console.log(`one second has passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`two seconds has passed`);
  });

//resolve and reject are static methods
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

///////////////////////////////////////
// Promisifying the Geolocation API

/* getPositon fn returns a promise immediately with state set to pending

only after getting the current position ,the pending state is transitoned into fullfilled state i.e after resolve fn has been called,

it is transitioned into rejected state if it cant get current postion if the user has blocked the location
*/
/*
const getPosition = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(
      position => reslove(position),
      err => reject(err)
    );
  });
};
const getPosition = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(
     reslove,
     reject
    );
  });
};
const whereAmI = function () {
  getPosition()
    .then(position => {
      const { lattitude: lat, longitude: lng } = position;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })

    .then(res => {
      //case when url is wrong(not found)
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*Summary of wait fn
it take seconds as an argument and it returns a promise set to pending immediately

only after seconds mentoned in argument ,statte of promise is transitioned into fullfilled as soon as the resolve function is called

and then only then function can be used
*/

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

/*SUMMARY OF THE CREATE IMAGE FN(THOUGHT PROCESS BEHIND IT)
SO BASICALLY imgPath is passed as an argument to the fn

so once it is passed new Promise will returned with state set to <pending>

only after the image has loaded and added to images container the state of the promise is transitioned into fullfiled

then only then function can be called to get the fullfilled value and then do the further process


*/
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imgElement = document.createElement('img');
//     imgElement.src = imgPath;

//     imgElement.addEventListener('load', function () {
//       document.querySelector('.images').append(imgElement);
//       resolve(imgElement);
//     });

//     imgElement.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(function (img) {
//     currentImg = img;
//     console.log('load 1');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })

//   .then(function (img) {
//     currentImg = img;
//     console.log('load 2');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(function (img) {
//     currentImg = img;
//     console.log('load 3');
//     return wait(2);
//   })

//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

///////////////////////////////////////
// Consuming Promises with Async/Await
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const dataGeo = await resGeo.json();

  console.log(dataGeo);

 // When await fetch is encountered, it will pause the execution of the function until the promise returned by the fetch function is resolved(i.e it is transition into fullfiled or resolved state).
//  During this pause, no further code within the function will be executed. This includes the line:

 
 
  
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.countryName}`
  );
  const data = await res.json();
  renderCountry(data[0]);
};
whereAmI();
*/

/////////////////////////////////////////////
// Error Handling With try...catch
/*
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
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );

    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[1]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
*/

///////////////////////////////////////
// Returning Values from Async Functions
/*const getPosition = function () {
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
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`; //returns a promise with fullfild value set to the returned value
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
*/
///////////////////////////////////////
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log(data1, data2, data3);
    // - `Promise.all` is a built-in JavaScript method that allows you to execute multiple promises concurrently and
    //  wait for all of them to either resolve or reject.

    // - It takes an array of promises as its argument and returns a new promise.

    //PRomise .all is transitioned into rejected state even if one promise inside it rejects

    //if all promise have been resolved
    //it returns a new promise that will have fullfiled value set to array of fullfilled value of the resolved promises
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[1]?.capital || d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('usa', 'india', 'china');

// const data = Promise.all([1, 2, 3]);
// console.log(data);
// data.then(function (data) {
//   console.log(data);
// });

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  getJSON(`https://restcountries.com/v2/name/${'usa'}`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled(returns all promise as an array of fullfiled and rejected values)

console.log(Promise.resolve('sucess')); //fullfilled promuse returned with value set to sucess
Promise.allSettled([
  Promise.resolve('sucess'),
  Promise.reject('error'),
  Promise.resolve('sucess'),
]).then(res => console.log(res));

//Promise.all shortcircuits when there is one rejected

Promise.all([
  Promise.resolve('sucess'),
  Promise.reject('error'),
  Promise.resolve('sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//Promise.any (will return the first fullfilled promise)

Promise.any([
  Promise.reject('error'),
  Promise.resolve('Hakumama tata'),
  Promise.resolve('sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// LoadNPause=async function()

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgElement = document.createElement('img');
    imgElement.src = imgPath;

    imgElement.addEventListener('load', function () {
      document.querySelector('.images').append(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
};

// When await wait(2) is encountered, it will pause the execution of the function until the promise returned by the wait function is resolved.
//  During this pause, no further code within the function will be executed. This includes the line:

//so basically whenever await is encountered,it will pause the execution of the function until the returned promise by the  function is resolved
const loadNPause = async function () {
  try {
    //load image1
    let img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    console.log('image 2 loaded');
    await wait(2);

    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    console.log('image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

loadNPause();

//Part2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img)); //this async fn will return a promise with fullfilled value set to await createImage(img) i.e  Ptomise with fullfilled value set to img element
    console.log(imgs); //array of promisess
    const imgsEl = await Promise.all(imgs); //Promise.all returns a new promise which conistss of fullfilled value set to an array of fullfilled value of promises
    console.log(imgsEl);

    imgsEl.forEach(el => el.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

//oof the section is done
