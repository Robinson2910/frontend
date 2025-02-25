import { useState, useEffect } from "react";
export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value)); //we can only store key value pairs in local storge that too it should be only strings
    },
    [value, key]
  );

  return [value, setValue];
}
