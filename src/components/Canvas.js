import { useState, useRef, useEffect } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#000");
    const [lineWidth, setLineWidth] = useState(2);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
    }, [color, lineWidth]);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        setIsDrawing(true);
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    const finishDrawing = () => {
        setIsDrawing(false);
        ctx.closePath();
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleLineWidthChange = (e) => {
        setLineWidth(e.target.value);
    };

    return ( <
        div >
        <
        canvas ref = { canvasRef }
        onMouseDown = { startDrawing }
        onMouseUp = { finishDrawing }
        onMouseMove = { draw }
        />{" "} <
        div >
        <
        label htmlFor = "color" > Color: < /label>{" "} <
        input type = "color"
        id = "color"
        name = "color"
        value = { color }
        onChange = { handleColorChange }
        />{" "} < /
        div > { " " } <
        div >
        <
        label htmlFor = "lineWidth" > Line Width: < /label>{" "} <
        input type = "range"
        id = "lineWidth"
        name = "lineWidth"
        min = "1"
        max = "10"
        value = { lineWidth }
        onChange = { handleLineWidthChange }
        />{" "} < /
        div > { " " } <
        /div>
    );
};

export default Canvas;