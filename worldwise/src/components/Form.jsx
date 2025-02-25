// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import DatePicker from "react-datepicker";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "./BackButton";
import Message from "./Message";
import Spinner from "./Spinner";
import { useUrlPosition } from "../hooks/useUrlPositon";
import { useCities } from "../contexts/CitiesContext";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();
  const [isLoadingGeocoding, setisLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  // const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");
  // when component renders
  useEffect(() => {
    async function fetchCityData() {
      try {
        setisLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        console.log(data);
        if (!data.countryCode) {
          throw new Error(`That Doesn't seem to be a city.Click somewhere else 😉`);
        }
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        // Handle errors here
        setGeocodingError(err.message);
      } finally {
        setisLoadingGeocoding(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  //WE R MAKING FUNCTION ASYNC SO WE CAN AWAIT FOR ASYNC AND THEN CALL THE  NAVIGATE OR ELSE NAVIGATE WILL BE CALLED IMMEDIATELY
  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (!lat && !lng) return <Message message="start by clicking somewhere on the map" />;
  if (isLoadingGeocoding) return <Spinner />;
  if (geocodingError) return <Message message={geocodingError} />;
  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* instead of value for input we use the selected */}
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>

        <BackButton> &larr; Back</BackButton>
        {/* <Button></Button> */}
      </div>
    </form>
  );
}

export default Form;

//tiME PICKER CODE
// import React, { useState } from 'react';
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';

// const TimePickerExample = () => {
//   const [time, setTime] = useState('12:00');

//   return (
//     <TimePicker
//       onChange={(newTime) => setTime(newTime)}
//       value={time}
//       format="h:mm a"
//       hourPlaceholder="hh"
//       minutePlaceholder="mm"
//       clockIcon={null}
//     />
//   );
// };

// export default TimePickerExample;
