function preload(){    
imaged=loadImage('https://i.postimg.cc/5y2By9gR/maskbro-1.png');
imagee=loadImage('https://i.postimg.cc/1tjGghdR/d-1.png');
imagef=loadImage('https://i.postimg.cc/50tFJ7nB/nose2.png');

}
nosex=0;
nosey=0;
eyex=0;
eyey=0;
noseix=0;
noseiy=0;
function setup(){
canvas=createCanvas(400,400);
canvas.center();
Video=createCapture(VIDEO);
Video.size(400,400)
Video.hide();
posenet=ml5.poseNet(Video,modeloaded);
posenet.on("pose",gotresult);

}
function gotresult(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
nosex=results[0].pose.nose.x-135;
nosey=results[0].pose.nose.y-105;
eyex=results[0].pose.leftEye.x-250;
eyey=results[0].pose.leftEye.y-290;
noseix=results[0].pose.nose.x-40;
noseiy=results[0].pose.nose.y-40;


}
}
function modeloaded(){
    console.log("model is loaded");
}
function save(){
save("anyname.png");

}
function draw(){
image(Video,0,0,400,400);
image(imaged,nosex,nosey,270,230);
image(imagee,eyex,eyey,400,200);
image(imagef,noseix,noseiy,80,80);

}