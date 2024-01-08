function setup() {
    video = createCapture(VIDEO)
    video.size(900,550)
    canvas = createCanvas(550,550)
    canvas.position(1000,)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
   
}

function gotPoses(results) {

    if(results.length > 0) {
        console.log(results)
    }

}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    background("#177f1f")
}