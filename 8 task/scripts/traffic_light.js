let colorIndex = 0;

const btn = document.querySelector('.btn');
const keyframes = ['redLight', 'yellowLight', 'greenLight'];
const trafficLights = document.querySelectorAll('.light');

btn.addEventListener('click', nextColor);


//Turning on the red light
(() => {
    trafficLights[0].style.animationName = 'redLight';
    trafficLights[0].style.animationFillMode = 'forwards';
})();


function nextColor() {
    let nextColorIndex = colorIndex === 2 ? 0 : colorIndex + 1;

    trafficLights[colorIndex].style.animationName = null;
    trafficLights[colorIndex].style.animationFillMode = 'none';
    trafficLights[nextColorIndex].style.animationName = keyframes[nextColorIndex];
    trafficLights[nextColorIndex].style.animationFillMode = 'forwards';
    // switch (true) {
    //     case colorIndex === 0:
    //         trafficLights[0].style.animationName = null;
    //         trafficLights[0].style.animationFillMode = 'none';
    //         trafficLights[1].style.animationName = 'yellowLight';
    //         trafficLights[1].style.animationFillMode = 'forwards';
    //         break;
    //     case colorIndex === 1:
    //         trafficLights[1].style.animationName = null;
    //         trafficLights[1].style.animationFillMode = 'none';
    //         trafficLights[2].style.animationName = 'greenLight';
    //         trafficLights[2].style.animationFillMode = 'forwards';
    //         break;
    //     case colorIndex === 2:
    //         trafficLights[2].style.animationName = null;
    //         trafficLights[2].style.animationFillMode = 'none';
    //         trafficLights[0].style.animationName = 'redLight';
    //         trafficLights[0].style.animationFillMode = 'forwards';
    //         break;
    // }
    colorIndex = nextColorIndex;
}