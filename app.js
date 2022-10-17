const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

let clicked = false;
let xAxis;
let x;

container.addEventListener('mouseup', () => {
    container.style.cursor = `grab`;
}) 
container.addEventListener('mousedown', e => {
    clicked = true
    xAxis = e.offsetX - slider.offsetLeft;
    sliderContainer.style.cursor = `grabbing`
})

window.addEventListener('mouseup', () => {
    clicked = false
})

container.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    SizeCheck()
})

function SizeCheck () {
    let containerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < containerOut.right) {
        slider.style.left = `-${sliderIn.width - containerOut.width}px`
    }
}
