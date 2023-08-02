// Params
let inc = 0
let xOffsetStart = 0
const maxToneFreq = 800

// Slider
const slider = document.getElementById('offset-perlin')
const sliderValue = document.getElementById('offset-perlin-value')
sliderValue.innerText = slider.value
inc = parseFloat(slider.value)

slider.addEventListener('change', function (e) {
    inc = parseFloat(e.target.value)
    sliderValue.innerText = inc
})

// Rendering
function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(51)
    stroke(255)
    noFill()
    beginShape()
    let xOffset = xOffsetStart

    for (let x = 0; x < width; x++) {
        stroke(255)
        const y = noise(xOffset) * height
        vertex(x, y)
        xOffset += inc
    }

    xOffsetStart += inc
    endShape()
}
