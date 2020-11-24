let color1 = getColor()
let color2 = getColor();
let angle = 50;
let slider = document.getElementById("angles");
let angleLabel = document.querySelector(".angleLabel");
let cssDiv = document.querySelector(".css-code");




slider.addEventListener("input", function () {
    angle = document.getElementById("angles").value;
    angleLabel.innerHTML = `Angle: ${angle}<sup>&deg;</sup>`;
    color1 = getColor();
    color2 = getColor();
    cssDiv.innerHTML = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`
    document.querySelector("body").style.background = `-webkit-linear-gradient(${angle}deg,${color1} ,${color2})`;
})

// slider.addEventListener("onmousedown")
function getColor() {
    let chars = 'abcdef1234567890'
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }
    return hex;
}

document.querySelector("button").style.visibility= "hidden";