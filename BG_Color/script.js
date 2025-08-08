const randomColor = function () {
    const hexC = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexC[parseInt(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.background = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);
