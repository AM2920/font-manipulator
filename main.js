function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(600, 600);
    canvas.position(560,0);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');  
}

function draw() {
    background('#969A97')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}