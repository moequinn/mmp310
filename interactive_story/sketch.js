/*
    Interactive Story 01-28-2019
*/


function setup() {
    createCanvas(800, 500);

function draw() {
    
   background(20)

    noStroke();
    fill(255);
   
    rect(10, 10, 20, hpaddle);
  
    rect(xrpaddle, constrain(yrpaddle, hpaddle / 2, height - hpaddle) - hpaddle / 2, wpaddle, hpaddle);
    
    // rabbit image
    image(rabbit1, xrabbit, constrain(yrpaddle, hpaddle / 2, height - hpaddle) - hpaddle / 2, wrabiit, hrabbit);

    fill(255);

    // Ball
    fill(0);
    
    ellipse(x, y, r * 1, r * 1);
    image(bballImage, x - 25, y- 35, wr, wr);

    x += xspeed;
    y += yspeed;

    yrpaddle = y;
    

    // right paddle collision
    if (x > xrpaddle && x < xrpaddle + wpaddle && y > yrpaddle - hpaddle / 2 && y < yrpaddle + hpaddle / 2) {
        console.log('collide');
        xspeed = -xspeed;
        bat.play();
    }

    // ball against left paddle 
    noFill();
    stroke('red');
    if (x > xlpaddle && x < xlpaddle + wpaddle && y > yPot && y < yPot + hpaddle) {
        console.log('collide');
        xspeed *= -1;
        wall.play();
    }
    

    if (x > width - r) {
        // player scored
        squirrelScore++;
        
        // play a sound
        giggling.play();
        
    }

    if (x < -r) {
        // computer scored
        rabbitScore++;
        
        // play a sound
        giggling.play();
        
        // reset the ball
        reset();
    }

    if (y > height - r || y < r) {
        yspeed = -yspeed;
    }
drawScores();
}

function reset() {
    x = 320;
    y = 180;
    xspeed = 5;
    yspeed = 6;
}

function drawScores() {
    var hscore = 45;

    stroke(255);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text(squirrelScore, width / 4, hscore);
    text(rabbitScore, width * 3 / 4, hscore);
}