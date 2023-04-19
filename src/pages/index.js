import BrushColor from "@/components/BrushColor";
import Canvas from "../components/Canvas";
import { useState } from "react";

const IndexPage = () => {
  //Create a state for the brush color
  const [brushColor, setBrushColor] = useState("black");

  //Create a function to update the brush color using a color parameter
  function handleBrushColorChange(color) {
    setBrushColor(color);
  }

  return (
    <div>
      <h1>Drawing Canvas</h1>
      <Canvas brushColor={brushColor} />
      //Pass the brush color and the function to update the brush color to the
      BrushColor component
      <BrushColor onBrushColorChange={handleBrushColorChange} />
    </div>
  );
};

export default IndexPage;
