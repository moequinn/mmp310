/*
	mmp 310 week 3 (02/13/2019)
	interactive story 3
	plot sketch, adding functions
*/


// global Variables
var X = 200; // main X postion
var Y = 200; // main Y postion
var W = 200; // main Width
var H = 200; // main Height

// clouds
var cloudX = 100;
var cloudY = 100;
var cloudW = 100;
var cloudH = 100;
//var clouudSize = 100;

// sun
var sunX = 100;
var sunY = 100;
var sunW = 100;
var sunH = 100;
//var sunSize = 100;


// global variables
var chapter = "morning"; // day, night
var whichFruit;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textFont('Hanalei Fill');
}

function draw() {
	background(200);
	
	if (chapter == "morning") {
        background('orange');
		fill('gold');
        noStroke();
		ellipse(500, 100, 100);
        
        // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(X - 200, Y + 280, windowWidth, windowHeight);
        
		abel(100, 200, 200);  // first character
		banana(200, 100, 200); // second character
        
        
		narrative("Meet Joe and Abel.", "Click anywhere to continue.");
	} else if (chapter == "day") {
        background('lightblue');
		fill('gold');
        noStroke();
		ellipse(800, 100, 100);
        
        // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(X - 200, Y + 280, windowWidth, windowHeight);
        
		abel(300, 150, 200);  
		banana(400, 75, 200);
		narrative("Then the user ate one of them.", "Click on one of the characters to eat it.");
	} else if (chapter == "night") {
		if (whichFruit == "banana") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(X - 200, Y + 280, windowWidth, windowHeight);
            
			abel(600, 100, 200);
			narrative("Abel is Stuff.", "Click anywhere to start over.");
		}
		if (whichFruit == "abel") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(X - 200, Y + 280, windowWidth, windowHeight);
			
			banana(700, 50, 200 - 150);
			narrative("Joel is Stuff.", "Click anywhere to start over.");
		}
	}
}

function mouseClicked() {
	// change chapter
	if (chapter == "morning") chapter = "day";
//	else if (chapter == "day") chapter = "night";
	else if (chapter == "night") chapter = "morning";
	
	// detect which character is clicked
	else if (chapter == "day") {
		// clicked abel
		var abelDist = dist(mouseX, mouseY, 300, 200);
		if (abelDist < 150 / 2) {
			whichFruit = "abel";
			chapter = "night";
		}
		// clicked banana
		var bananaDist = dist(mouseX, mouseY, 400, 100);
		if (bananaDist < 75 / 2) {
			whichFruit = "banana";
			chapter = "night";
		}
	}
}

function abel(x, s, o) {
	var eyeSize = s / 10;
    
    
    /*
    // character 2 abel
    
    fill('lightgrey');
	noStroke();
    
    ellipse(x + 0, 200, 180, 20); // top wings
    
    ellipse(x + 0, 220, 180, 20); // bottom wings
    
	fill('yellow');
	noStroke();
	ellipse(x, 200, 40, 30);  	// Head
    ellipse(x, 250, 90, 90);  	// body
	
	fill(255);
	noStroke();
	ellipse(x + 30, 190 - eyeSize, 30);  // left eye
	ellipse(x - 30, 190 - eyeSize, 30); 		// right eye
    
    fill(0);
	noStroke();
	ellipse(x + 30, 190 - eyeSize, eyeSize);  // left eye
	ellipse(x - 30, 190 - eyeSize, eyeSize); 		// right eye
    
    
    
    fill(0);
	noStroke();
	ellipse(x, 200, 30, 20);  	// top body
    ellipse(x, 250, 80, 80);  	// body
	
    fill('yellow');
	noStroke();
	ellipse(x, 200, 50, 60);  	// top body
    ellipse(x, 250, 70, 70);  	// body
    
    fill(0);
	noStroke();
	ellipse(x, 200, 40, 50);  	// top body
    ellipse(x, 250, 60, 60);  	// body
    
    */
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(x + 370, Y + 100, W - 170,  H -170);  // outter left eye
    
    // Characater 2 
    ellipse(x + 430, Y + 100, W - 170, H - 170);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(x + 370, Y + 100, W - 180, H - 180);  // left eye
    
    // Characater 2 
    ellipse(x + 430, Y + 100, W - 180, H - 180);  // right eye
    
    //character 2
    arc(x + 395, Y + 145, W + 50, H - 150, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(x + 395, Y + 175, W + 50, H - 150, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(x + 400, Y + 100, W - 140, H - 150);  // head
    
    // Characater 2  
    ellipse(x + 400, Y + 175, W - 100, H - 50);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(x + 400, Y + 100, W - 150, H - 160); // head
    
    // Characater 2  
    ellipse(x + 400, Y + 175, W - 110, H - 60); // top Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(x + 400, Y + 100, W - 160, H - 170); // head
    
    // Characater 2  
    ellipse(x + 400, Y + 175, W - 120, H - 70); // top Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(x + 400, Y + 100, W - 150, H - 160); // head
    
    // Characater 2 
    ellipse(x + 400, Y + 175, W - 130, H - 80);  // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(x + 400, Y + 110, W - 180, H - 180, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2

}

function banana(x, s, o) {
    /*
    
    // character 1 joe
	fill(255);
	noStroke();
    
    
    ellipse(x + 20, 40, 30, 30); // outter left eye
    ellipse(x + 40, 40, 30, 30); // outter right eye
    
    fill(0);
	noStroke();
    
    ellipse(x + 15, 40, 20, 20); // left eye
    ellipse(x + 45, 40, 20, 20); // right eye
    
    
    fill('lightgrey');
	noStroke();
    
    ellipse(x + 30, 75, 180, 20); // top wings
    
    ellipse(x + 30, 100, 180, 20); // bottom wings
    
    
    fill('lightblue');
	noStroke();
    
    ellipse(x + 30, 100, s - 120, 180); // body
    
    /*
	arc(x, 100, s, s, -HALF_PI, HALF_PI); // banana background
	fill(50);
	arc(x, 100, s / 2, s, -HALF_PI, HALF_PI); // banana foreground
	noFill();
	stroke(0);
	arc(x, 100, s * 3/4, s, -HALF_PI, HALF_PI); // banana contour
    
    */
    
    
    //Character 1 
    noStroke();
    fill(255);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, Y + 75, W - 180, H - 180);  // Outter left eye
    
    // Characater 1 
    ellipse(x + 15, Y + 75, W - 180, H - 180);  // Outter right eye
    
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, Y + 75, W - 190, H - 190);  // left eye
    
    // Characater 1 
    ellipse(x + 15, Y + 75, W - 190, H - 190);  // right eye
    
    
    //Character 1 
    noStroke();
    fill(190);  // wings color   
    
    //character 1
    arc(x - 8, Y + 110, W + 100, H -180, 100, PI + HALF_PI, PIE);  // top wings  
    
    //character 1
    arc(x - 8, Y + 140, W + 100, H - 180, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(x, Y + 75, W - 185, H - 170);  // head
    
    // Characater 1 
    ellipse(x, Y + 175, o - 180, H);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(x, Y + 110, W - 160, H - 160, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
    // end of character 1
    
}

function narrative(story, instructions) {
	// narrative
	stroke(255);
	textSize(30);
	text(story, width / 2, height - 100);
	// instructions
	textSize(20);
	text(instructions, width / 2, height - 50);
}