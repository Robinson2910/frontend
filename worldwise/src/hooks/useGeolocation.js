import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}

// In the provided code snippet, `navigator` is a built-in object in JavaScript that represents the state and identity of the user's browser. It provides information about the browser environment and various capabilities of the user's device.

// In this specific context, `navigator.geolocation` is a property of the `navigator` object that provides access to the browser's geolocation service. The geolocation service allows web applications to request the user's physical location.

// Here's a breakdown of the code:

// - `navigator.geolocation`: Checks if the geolocation property is available in the `navigator` object.
// - `if (!navigator.geolocation) return setError("Your browser does not support geolocation");`: If the geolocation is not supported by the browser, it sets an error message using the `setError` function (which is not provided in the code snippet) and stops further execution.
// - `navigator.geolocation.getCurrentPosition()`: Invokes the `getCurrentPosition` method of the geolocation service, which retrieves the current geographical location of the device.

// The `getCurrentPosition` method takes two callback functions as parameters:

// 1. The first callback function `(pos) => {...}` is executed if the location is successfully retrieved. It receives a `pos` (position) object containing the latitude and longitude coordinates of the device, and it updates the position using the `setPosition` function and sets the loading state to `false` using `setIsLoading(false)`.

// 2. The second callback function `(error) => {...}` is executed if there is an error in retrieving the location. It receives an `error` object, and it sets the error message using the `setError` function and also sets the loading state to `false` using `setIsLoading(false)`.

// In summary, this code is part of a function (`getPosition`) that attempts to get the user's current geolocation using the browser's geolocation service, handles success and error cases, and updates the state accordingly. The actual implementations of `setError`, `setPosition`, and `setIsLoading` are not provided in the code snippet.
