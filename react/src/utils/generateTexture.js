export const generateTexture = (text) => {
    // Set variables
    const bitmapShift = 80;
    const copyAmount = 4;
    const canvasSize = 300;
    const fontSize = canvasSize / copyAmount;
    const fontStyle = `Bolder ${fontSize}px Luckiest Guy, cursive`;

    // Create canvas
    const bitmap = document.createElement("canvas");
    bitmap.height = canvasSize;
    
    // Create 2d context
    const g = bitmap.getContext("2d");
    g.font = fontStyle;
    bitmap.width = g.measureText(text).width;

    // Add font style again
    g.fillStyle = "#ffffff1b";
    g.font = fontStyle;

    // Add text on the canvas
    const scaledText = (index) => g.fillText(text, 2, fontSize * ++index - bitmapShift);

    Array(copyAmount + 1).fill(0).forEach((item, i) => {
        scaledText(i);
    });

    const background = bitmap.toDataURL("image/png");
    return background;

};


// position: fixed;
//     top: 0;
//     left: 0;
//     font-size: 7vw;
//     font-weight: bolder;
//     letter-spacing: 6px;
//     color: ;
//     transform: rotate(-20deg);    