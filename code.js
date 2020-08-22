let color1 = getColor()
let color2 = getColor();
let angle = 50;
let slider = document.getElementById("angles")




slider.addEventListener("mousemove", function () {

    angle = document.getElementById("angles").value;
    document.querySelector(".angleLabel").innerHTML = `${angle}<sup>&deg;</sup>`;
})



slider.addEventListener("ValueChange", function () {
    angle = document.getElementById("angles").value;
    document.querySelector(".angleLabel").innerHTML = angle
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

document.querySelector("button").addEventListener("click", function () {

    color1 = getColor();
    color2 = getColor();
    document.querySelector("body").style.background = `-webkit-linear-gradient(${angle}deg,${color1} ,${color2})`;
})
