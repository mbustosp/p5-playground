let xOffset = 0
let yOffset = 1000

function setup() {
    createCanvas(400, 400)
}

function draw() {
    xOffset += 0.01
    yOffset += 0.01
    const x = noise(xOffset) * width
    const y = noise(yOffset) * height
    background(51)
    ellipse(x, y, 24, 24)
}
