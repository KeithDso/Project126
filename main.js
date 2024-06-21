function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoad(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');

    if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY, 20);
    song2.stop();
    if(song_status.isPlaying() = false){
    song1.play();
    document.getElementById("song").innerHTML = song1;
    }
    }
}

song1="";
song2="";
song_status= "";
scoreLeftWrist=0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(){
    if(results.length > 0 ){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+leftWristY);

        righttWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+rightWristY);
    }
}

