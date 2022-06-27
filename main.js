x_nose = 0;
y_nose = 0;
x_left_wrist = 0;
x_right_wrist = 0;
difference = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(600 , 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500 , 400)
    posenet_model = ml5.poseNet(video , modelLoaded)
    posenet_model.on('pose' , gotResults)
}
function modelLoaded()
{
    console.log("THE POSENET MODEL HAS BEEN LOADED")
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results)
        x_nose = results[0].pose.nose.x
        y_nose = results[0].pose.nose.y
        x_left_wrist = results[0].pose.leftWrist.x
        x_right_wrist = results[0].pose.rightWrist.x
        difference = floor(x_left_wrist - x_right_wrist)
    }
}
function draw()
{
    background("white")
    fill("pink")
    text("Aarna" , x_nose , y_nose)
    textSize(difference)
    noFill()
    document.getElementById("font_result").innerHTML = difference + "px";
}