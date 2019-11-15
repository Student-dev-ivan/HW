
function moveBar() {
    let bar = $('#custom-bar')[0];
    let width = parseInt(bar.style.width);
    width += 5;
    if (width <= 100) {
        bar.style.width = `${width}%`;
        bar.innerText = `${width}%`
    } else {
        width = 0;
        bar.style.width = `${width}%`;
        bar.innerText = `${width}%`
    }
}