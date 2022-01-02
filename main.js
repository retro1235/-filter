function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
}
 
function draw() {
    image(video, 0, 0, 300, 300);
    circle(10, 10, 20);
    circle(290, 10, 20);
    circle(10, 290, 20);
    circle(290, 290, 20);
    rect(0, 20, 20, 260);
    rect(280, 20, 20, 260);
    rect(280, 1, -260, 20);
    rect(280, 280, -260, 20);
    

}

function take_snapshot(){
    save('myFilterImage.png');
}