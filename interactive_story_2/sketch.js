/*
    mmp 310 week 2 (02/04/2019)
    Interactive Story of Joe and Abel
    By Moe Quinn
*/

// global Variables
var X = 200; // main X postion
var Y = 200; // main Y postion
var W = 200; // main Width
var H = 200; // main Height


/*
// Character 1 Eye
var joeEyeX = 15;  // - 15 left, + 15 right
var joeEyeY = 75;  // - 75 left and right
var joeEyeW = 180; // - 180 left and right
var joeEyeH = 180; // - 180 left and right

// Character 1 pupil
var joeLPupil = 190; // - 190 left Pupil
var joeRPupil = 190; // - 190 right Pupil

// Cahracter 1 wings
var wingsX = 8;     // - 8
var wingsY = 110;   // + 110
var wingsW = 100;   // + 100
var wingsH = 180;   // - 180

// Character 1 head
var headX = 0;    // + 0
var headY = 75;   // + 75
var headW = 185;  // - 185
var headH = 170;  // - 170

// Character 1 body
var bodyX = 0;    // + 0
var bodyY = 175;  // + 175
var bodyW = 180;  // - 180
var bodyH = 0;    // + 0

// Character 1 mouth
var mouthX = 0;   // + 0
var mouthY = 110; // + 110
var mouthW = 160; // - 160
var mouthH = 160; // - 160


*/


function setup() {
    
    createCanvas(800, 500);
    textSize(40);

}

function draw() {
    
    background(204, 255, 229) // background color
    
    
    
    //Characater 1 on the left Joe
    //Characater 2 on the right Abel
    
    
    //Character 1 
    noStroke();
    fill(255);  // eye colors
    
    // Characater 1 
    ellipse(X - 15, Y + 75, W - 180, H - 180);  // Outter left eye
    
    // Characater 1 
    ellipse(X + 15, Y + 75, W - 180, H - 180);  // Outter right eye
    
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(X - 15, Y + 75, W - 190, H - 190);  // left eye
    
    // Characater 1 
    ellipse(X + 15, Y + 75, W - 190, H - 190);  // right eye
    
    
    //Character 1 
    noStroke();
    fill(190);  // wings color   
    
    //character 1
    arc(X - 8, Y + 110, W + 100, H -180, 100, PI + HALF_PI, PIE);  // top wings  
    
    //character 1
    arc(X - 8, Y + 140, W + 100, H - 180, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(200, 275, 15, 30);  // head
    
    // Characater 1 
    ellipse(200, 375, 20, 200);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(200, 310, 40, 40, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
    // end of character 1
    
    
    
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(570, 300, 30, 30);  // outter left eye
    
    // Characater 2 
    ellipse(630, 300, 30, 30);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(570, 300, 20, 20);  // left eye
    
    // Characater 2 
    ellipse(630, 300, 20, 20);  // right eye
    
    
    
    //Character 2 
    noStroke();
    fill(190);  // wings color
    
       
    
    //character 2
    arc(595, 345, 250, 50, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(595, 375, 240, 40, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(600, 300, 60, 50);  // head
    
    // Characater 2  
    ellipse(600, 375, 100, 150);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(600, 300, 50, 40); // head
    
    // Characater 2  
    ellipse(600, 375, 90, 140); // top Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(600, 300, 40, 30); // head
    
    // Characater 2  
    ellipse(600, 375, 80, 130); // top Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(600, 300, 50, 40); // head
    
    // Characater 2 
    ellipse(600, 375, 70, 120);  // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(600, 310, 20, 20, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2
    
    
    
    
    noStroke(); 
    fill(0);  // text color
    
    text('Meet Joe and Abel', 240, 120); 
    //comments
    
    
    
    noStroke();
    fill("green");  // grass
    rect(0, 480, 800, 100);
    
    
    noStroke();
    fill("yellow");    // sun
    ellipse(70, 80, 100, 100);
    
    noStroke();
    fill("white");    // clound 1
    ellipse(270, 180, 100, 100);
    
    noStroke();
    fill("white");    // clound 1
    ellipse(300, 180, 100, 80);
    
    noStroke();
    fill("white");    // clound 1
    ellipse(230, 180, 100, 100);
    
    
    noStroke();
    fill("white");    // clound 2
    ellipse(570, 200, 100, 100);
    
    noStroke();
    fill("white");    // clound 2
    ellipse(600, 200, 100, 80);
    
    noStroke();
    fill("white");    // clound 2
    ellipse(530, 200, 100, 100);
    
    
    
    /*
    // setting, morning, day, and night 
    noStroke();

	if (mouseIsPressed) {
		// night scene 
		background('darkblue');
		fill('plum');
		ellipse(100, 100, 50);
	} else {
		// day scene
		background('lightblue');
		fill('gold');
		ellipse(500, 100, 100);
	}
    
    */
    
}