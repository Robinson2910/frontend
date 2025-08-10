// Import necessary dependencies
import { useState } from "react";
import PropTypes from "prop-types";

// Container style for the main component layout
const containerStyle = {
  display: "flex",
  alignItems: "center", // Align stars and text vertically centered
  gap: "16px", // Space between stars and text
};

// Container style for arranging the stars
const starContainerStyle = {
  display: "flex", // Horizontal arrangement of stars
};

// Style for the text below/next to the stars
const textStyle = {
  lineHeight: "1", // Consistent line height
  margin: "0", // Remove default margins
};

// PropTypes to validate the props passed to the StarRating component
StarRating.propTypes = {
  maxRating: PropTypes.number, // Maximum number of stars
  defaultRating: PropTypes.number, // Initial rating
  color: PropTypes.string, // Color of selected stars
  size: PropTypes.number, // Size of the stars
  messages: PropTypes.array, // Optional messages to display per rating
  className: PropTypes.string, // Additional CSS class for styling
  onSetRating: PropTypes.func, // Callback to notify parent of rating changes
};

// Main StarRating component
export default function StarRating({
  maxRating = 5, // Default to 5 stars
  color = "#fcc419", // Default color for selected stars
  size = 48, // Default size for each star
  className = "", // Default empty string for additional classes
  messages = [], // Optional array of messages for each rating
  defaultRating = 0, // Default rating is 0
  onSetRating, // Callback for setting rating
}) {
  // State to hold the selected rating
  const [rating, setRating] = useState(
    defaultRating
  );

  // State to hold the temporary rating (hover effect)
  const [tempRating, setTempRating] = useState(0);

  // Function to handle permanent rating change
  function handleRating(rating) {
    setRating(rating); // Update the state with selected rating
    onSetRating(rating); // Notify the parent component
  }

  // Function to handle temporary rating during hover
  function handleTempRating(rating) {
    setTempRating(rating); // Update the state with temporary rating
  }

  // Style for the rating text based on size and color
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color, // Dynamic color from props
    fontSize: `${size / 1.5}px`, // Adjust font size relative to star size
  };

  return (
    // Main container for the star rating component
    <div
      style={containerStyle}
      className={className}
    >
      {/* Container for stars */}
      <div style={starContainerStyle}>
        {Array.from(
          { length: maxRating },
          (_, i) => (
            // Generate a Star component for each star
            <Star
              key={i + 1} // Unique key for React
              id={i + 1} // Star ID (1-based index)
              rating={rating} // Current selected rating
              onRating={handleRating} // Handler for permanent rating
              tempRating={tempRating} // Current temporary rating
              onTempRating={handleTempRating} // Handler for temporary rating
              color={color} // Star color
              size={size} // Star size
            />
          )
        )}
      </div>

      {/* Display a message or the current rating */}
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[
              tempRating
                ? tempRating - 1
                : rating - 1
            ] // Show message based on rating
          : tempRating || rating || ""}{" "}
        {/* Fallback to rating or tempRating */}
      </p>
    </div>
  );
}

// Star component to represent individual stars
function Star({
  id,
  rating,
  onRating,
  onTempRating,
  tempRating,
  color,
  size,
}) {
  // Style for each star
  const starStyle = {
    width: `${size}px`, // Width based on size prop
    height: `${size}px`, // Height based on size prop
    display: "block", // Block-level element
    cursor: "pointer", // Pointer cursor for interactivity
  };

  return (
    // Container for the star SVG
    <span
      style={starStyle}
      onClick={() => onRating(id)} // Handle click to set rating
      onMouseEnter={() => onTempRating(id)} // Set tempRating on hover
      onMouseLeave={() => {
        onTempRating(0); // Clear tempRating when hover ends
        onRating(rating); // Reset to current rating
      }}
    >
      {/* SVG for the star */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={
          tempRating
            ? tempRating >= id // Highlight based on tempRating
              ? color
              : "#000"
            : rating >= id // Highlight based on permanent rating
            ? color
            : "#000"
        }
        stroke={color} // Outline color
      >
        {/* Path defining the star shape */}
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}
/* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
