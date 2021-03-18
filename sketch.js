var video;
var arcSize = 10;

// Called once
function setup() {
    createCanvas(640 * 2, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.hide();
    noStroke();
    angleMode(DEGREES);
}

// Called each frame
function draw() {
    background(0);
    image(video, 0, 0);

    video.loadPixels();
    translate(640, 0);

    translate(arcSize/2, arcSize/2);

    for(var x = 0; x < video.width; x+=arcSize) {
        for(var y = 0; y < video.height; y+=arcSize) {
            var index = (x + y * video.width) * 4;
            var r = video.pixels[index + 0];
            var g = video.pixels[index + 1];
            var b = video.pixels[index + 2];
            var pixelBrightness = (r + g + b) / 3;

            push();
            translate(x, y);
            var degree = map(pixelBrightness, 0, 255, 0, 360);
            rotate((180 - degree) / 2);
            arc(0, 0, arcSize, arcSize, 0, degree);
            pop();
        }
    }

}
