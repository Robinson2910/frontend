import { useState } from "react";
import { formInfo } from "../data/formInfo";
export default function Form() {
  const [streams, setStreams] = useState("");
  const [level, setLevel] = useState("");
  const [location, setLocation] = useState("");
  const [val, setVal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
          {formInfo.streams.value}
        </option>
        {formInfo.streams.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        name="level"
        className="custom-select level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="" disabled selected>
          {formInfo.level.value}
        </option>
        {formInfo.level.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        name="country"
        className="custom-select"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="" disabled selected>
          {formInfo.location.value}
        </option>
        {formInfo.location.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>

      {/* <input type="text" name="" id="" placeholder="Search Courses/University" className="input" />  */}
      <div className="search-container">
        {/* <input
          type="text"
          className="search-input"
          name="query"
          id=""
          placeholder={formInfo.searchInput.placeholder}
        /> */}

        <input
          list="data"
          onChange={(e) => setVal(e.target.value)}
          placeholder={formInfo.searchInput.placeholder}
          name="query"
          className="search-input"
        />
        <datalist id="data">
          {formInfo.searchInput.colleges.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </datalist>

        <button type="submit" className="search-icon">
          🔍
        </button>
      </div>
    </form>
  );
}
