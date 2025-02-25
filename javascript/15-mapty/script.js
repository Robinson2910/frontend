'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = this.date.toISOString().slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    //min/km

    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
  }
}
const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1);
console.log(cycling1);
// //////////////////////////////////////////////////////////////////////////////////
//Application Arhcitecture
/////////////////////////////////////////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  //private instance properties
  //will be there on all instances
  #map;
  #mapEvent; //can be used only inside the same class as it is private
  //protected means it can be accessed by subclasses and the parent class alone
  //public implies it can be used anywhere

  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    //Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    //attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      //position object is passed as arhument to callback fn by getCurrentPosition HOF
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }
  // _loadMap(position) {
  //   console.log(position);
  //   //latitude and longitude objects are inside coords objects
  //   const { latitude, longitude } = position.coords;
  //   // console.log(latitude, longitude);
  //   const coords = [latitude, longitude];
  //   // console.log(
  //   //   `https://www.google.com/maps/@${latitude},${longitude},12z?entry=ttu`
  //   // );

  //   // You create a Leaflet map instance with L.map('map'). The argument 'map' should correspond to the id attribute of an HTML element
  //   //  (usually a <div>)
  //   //  where you want to display the map
  //   this.#map = L.map('map');

  //   // In the code snippet L.map('map');, L is typically a reference to the Leaflet library in JavaScript. Leaflet is a popular open-source JavaScript library used for creating interactive maps on web pages.

  //   // Here's a breakdown of the code:

  //   // L: This is a variable or object that represents the Leaflet library. When you include the Leaflet library in your HTML document, it creates a global L object that you can use to interact with and create maps.

  //   // .map('map'): This part of the code is calling a method or function on the L object. In this case, it's likely calling the map method to create a map and specifying that it should be displayed in an HTML element with the ID 'map'.

  //   // .setView(coords, 13) sets the initial view of the map. coords should be an array containing latitude and longitude coordinates, and 13 is the initial zoom level.
  //   this.#map.setView(coords, this.#mapZoomLevel);

  //   // You add a tile layer to the map. In this case, you're using OpenStreetMap as the tile source.
  //   //The URL 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' is a template
  //   //URL where {z}, {x}, and {y} are placeholders for the zoom level and tile coordinates
  //   // attribution provides credit to the data source, which is required when using many map providers.
  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(this.#map);

  //   //Handling click on maps
  //   this.#map.on('click', this._showForm.bind(this));

  //   this.#workouts.forEach(work => {
  //     this._renderWorkoutMarker(work);
  //   });
  // }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    // console.log(mapEvent);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    // const { lat, lng } = mapEvent.latlng;
    // console.log(lat);
    // console.log(lng);
    // // You add a marker to the map at the coordinates specified in the coords variable.
    // // .bindPopup() attaches a popup to the marker. In this case, it contains the text "A pretty CSS popup. Easily customizable."
    // // .openPopup() opens the popup by default when the map loads
    // L.marker([lat, lng])
    //   .addTo(map)
    //   .bindPopup(
    //     L.popup({
    //       maxWidth: 250,
    //       minWidth: 100,
    //       autoClose: false,
    //       closeOnClick: false,
    //       className: 'running-popup',
    //     })
    //   )
    //   .setPopupContent('Workout')
    //   .openPopup();

    // L.popup is indeed a function in Leaflet that can be used to create a Popup instance. It allows you to create a custom popup object with specific properties and content. Here's how you can use it:
    // var customPopup = L.popup({
    //   maxWidth: 250,
    //   minWidth: 100,
    //   autoclose: false,
    //   closeOnClick: false,
    //   className: 'running-popup',
    // }).setContent('This is a custom popup content.');

    // L.marker([lat, lng]).addTo(map).bindPopup(customPopup);
  }
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //get data from form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    //if workout running,create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert(`Inputs have to be positive numbers`);
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //if workout cycling create cycling object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert(`Inputs have to be positive numbers`);
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add new obj to workout array

    this.#workouts.push(workout);
    // console.log(workout);

    //render workout on map as marker
    this._renderWorkoutMarker(workout);

    //render workout on list

    this._renderWorkout(workout);
    //Hide form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }
  //display marker
  // const { lat, lng } = this.#mapEvent.latlng;

  _renderWorkoutMarker(workout) {
    const date = new Date(workout.date);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )

      .setPopupContent(
        workout.type === 'running'
          ? `Running on ${months[date.getMonth()]} ${date.getDate()}`
          : `Cycling on ${months[date.getMonth()]} ${date.getDate()}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html;
    const date = new Date(workout.date);
    workout.type === 'running'
      ? (html = `   <li class="workout workout--running" data-id="${
          workout.id
        }">
          <h2 class="workout__title">Running on ${
            months[date.getMonth()]
          } ${date.getDate()}</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${
              workout.duration / workout.distance
            }</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`)
      : (html = `
          <li class="workout workout--cycling" data-id=${workout.id}>
              <h2 class="workout__title">Cycling on ${
                months[date.getMonth()]
              } ${date.getDate()}</h2>
            <div class="workout__details">
              <span class="workout__icon">🚴‍♀️</span>
              <span class="workout__value">${workout.distance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.duration}</span>
              <span class="workout__unit">min</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${
                workout.distance / workout.duration
              }</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${workout.elevationGain}</span>
              <span class="workout__unit">m</span>
            </div>
          </li>`);
    containerWorkouts.insertAdjacentHTML('beforeend', html);
  }
  _moveToPopup(e) {
    const WorkoutEl = e.target.closest('.workout');
    // console.log(WorkoutEl.dataset.id);
    // this.#workouts.forEach(work => console.log(work));
    if (!WorkoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === WorkoutEl.dataset.id
    );
    console.log(workout);
    console.log('love u');
    this.#map.setView(workout?.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts)); //onjects to string
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts')); //strings to object  (these objects will not inherit all the methods which they inherited before)

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App(); //objs created right in begging when page loads

// first call back fn will be called when it is succesfull in finding the GeolocationCoordinates

//second one when it could not get coordinates
