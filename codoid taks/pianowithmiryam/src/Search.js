import React, { useState } from "react";

function SearchComponent({ options }) {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected dropdown option
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle dropdown selection change
  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle the search action
  const handleSearch = () => {
    // Perform your search logic using selectedOption and searchQuery
    // You can filter or sort data based on the selected option and query.
    console.log(`Selected Option: ${selectedOption}, Search Query: ${searchQuery}`);
    // Add your search functionality here.
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;
