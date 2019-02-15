/*
	mmp 310 week 2 (02/04/2019)
    Interactive Story of Joe and Abel Setting
    By Moe Quinn

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
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(X + 370, Y + 100, W - 170,  H -170);  // outter left eye
    
    // Characater 2 
    ellipse(X + 430, Y + 100, W - 170, H - 170);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(X + 370, Y + 100, W - 180, H - 180);  // left eye
    
    // Characater 2 
    ellipse(X + 430, Y + 100, W - 180, H - 180);  // right eye
    
    //character 2
    arc(X + 395, Y + 145, W + 50, H - 150, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(X + 395, Y + 175, W + 50, H - 150, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(X + 400, Y + 100, W - 140, H - 150);  // head
    
    // Characater 2  
    ellipse(X + 400, Y + 175, W - 100, H - 50);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(X + 400, Y + 100, W - 150, H - 160); // head
    
    // Characater 2  
    ellipse(X + 400, Y + 175, W - 110, H - 60); // top Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(X + 400, Y + 100, W - 160, H - 170); // head
    
    // Characater 2  
    ellipse(X + 400, Y + 175, W - 120, H - 70); // top Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(X + 400, Y + 100, W - 150, H - 160); // head
    
    // Characater 2 
    ellipse(X + 400, Y + 175, W - 130, H - 80);  // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(X + 400, Y + 110, W - 180, H - 180, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2

}

function banana(x, s, o) {
    
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
    ellipse(X, Y + 75, W - 185, H - 170);  // head
    
    // Characater 1 
    ellipse(X, Y + 175, W - 180, H);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(X, Y + 110, W - 160, H - 160, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
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