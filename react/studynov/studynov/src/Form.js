import { useState } from "react";
export default function Form() {
  const [streams, setStreams] = useState("");
  const [level, setLevel] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStreams("");
    setLevel("");
    setLocation("");
  }
  return (
    <form action="" className="form" onSubmit={() => handleSubmit}>
      <select
        className="custom-select streams"
        name="streams"
        value={streams}
        onChange={(e) => setStreams(e.target.value)}
      >
        <option value="" disabled selected>
          Streams
        </option>
        <option value="Medicine">Medicine</option>
        <option value="Engineering">Engineering</option>
        <option value="Law/Humanities">Law/Humanities</option>
        <option value="Management">Management</option>
        <option value="Arts and Science">Arts and Science</option>
        <option value="Architecture">Architecture</option>
      </select>
      <select
        name="level"
        className="custom-select level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="" disabled selected>
          level
        </option>
        <option value="UG">UG</option>
        <option value="PG">PG</option>
        <option value="Diploma">Diploma</option>
        <option value="Research">Research</option>
      </select>
      <select
        name="country"
        className="custom-select"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="" disabled selected>
          location
        </option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
      </select>

      {/* <input type="text" name="" id="" placeholder="Search Courses/University" className="input" />  */}
      <div class="search-container">
        <input
          type="text"
          className="search-input"
          name="query"
          id=""
          placeholder="Search Courses/University"
        />

        <button type="submit" class="search-icon">
          🔍
        </button>
      </div>
    </form>
  );
}
