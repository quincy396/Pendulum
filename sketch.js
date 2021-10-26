
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
let c
let waveHeight = canvasHeight/4
let back = 50

function preload(){
    
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    noStroke()
    background(back)
    //drawSineWave()
    makePendulums()

}

function makePendulums(){
    let num = 255
    let w = canvasWidth/255
    let h = (canvasHeight-50)/255
    c = Array.from({length:num},(el,i) => {
        return new myPendulum(i*w,25, PI/2,i*h,i,i)
    })
}
function drawSineWave(){
    c = Array.from({length:255},(el,i) => {
        return new myCircle(i+canvasWidth/8,sin(i/20)*waveHeight + canvasHeight/2,20,i)
    })
}

function draw(){
    background(back)
    c.forEach(j => j.update())
    c.forEach(j => j.render())
    //c.update()
    //c.render()

}
function mousePressed(){
    makePendulums()
}


