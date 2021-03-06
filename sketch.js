
function setup(){
    createCanvas(900,900);
}
function draw(){
    background(255, 255, 255);

    strokeWeight(8);
    stroke(0, 0, 0)
    line(50, 50, 50, 800);
    line(50, 50, 800, 50);
    line(800, 800, 800, 50);
    line (50, 800, 800, 800);

    // art lines
    // 3 vertical
    line(150, 50,150, 800);
    line(300, 320,300, 800);
    line(650, 50,650, 800);
    // 3 horizontal
    line(50, 200, 800, 200);
    line(50, 650, 800, 650);
    line(50, 320, 800, 320);
    // a few shorties
    line(500, 50, 500, 320); 
    line(50, 500, 300, 500);

    // yellow one
    strokeWeight(0);
    fill(255, 204, 0);
    rect(154, 54, 342, 142);
    
    // red main
    fill('red');
    rect(304, 324, 342, 322);

    // blue one left
    fill("blue");
    rect(54, 503, 92, 143);

    // blue one right
    fill("blue");
    rect(504, 204, 142, 112);

}
// front end js
// these are necessary for it to run, anytime you set up a new p5 sketch
// the rect(placement, placement, size w, size h)
// fill functionality fills every object beneath it

// using command line for uploading to