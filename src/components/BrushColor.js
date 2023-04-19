//Import UseState from React
import React, { useState } from "react";

//create a functional component called BrushColor
const BrushColor = ({ onBrushColorChange }) => {
  //create a state variable called "selected color" and a function to update it
  const [color, setColor] = useState("black");

  //create an array of colors
  const colors = [
    "black",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "brown",
    "white",
  ];

  //create a function that updates the color state variable and calls the function to update the brush color
  function handleChange(event) {
    setColor(event.target.value);
    onBrushColorChange(event.target.value);
  }

  //return a div that contains the options for the brush color from the array and the function to update the color state variable
  return (
    <div>
      <label htmlFor="brush-color">Brush Color:</label>
      <select id="brush-color" value={color} onChange={handleChange}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrushColor;
