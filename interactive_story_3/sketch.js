/*
	mmp 310 week 3
	interactive story 3
	plot sketch, adding functions
*/

// global variables
var chapter = "morning"; // day, night
var whichFruit;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textFont('Hanalei Fill');
}

function draw() {
	background(50);
	
	if (chapter == "morning") {
		orange(100, 200);  // first character
		banana(200, 100); // second character
		narrative("Once upon a time, there was an orange and a banana.", "Click anywhere to continue.");
	} else if (chapter == "day") {
		orange(300, 150);  
		banana(400, 75);
		narrative("Then the user ate one of them.", "Click on one of the characters to eat it.");
	} else if (chapter == "night") {
		if (whichFruit == "banana") {
			orange(600, 100); 
			narrative("The orange was alone forever.", "Click anywhere to start over.");
		}
		if (whichFruit == "orange") {
			banana(700, 50);
			narrative("The banana was alone forever.", "Click anywhere to start over.");
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
		// clicked the orange
		var orangeDist = dist(mouseX, mouseY, 300, 200);
		if (orangeDist < 150 / 2) {
			whichFruit = "orange";
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

function orange(x, s) {
	var eyeSize = s / 10;
    
    // character 2 abel
    
    fill('lightgrey');
	noStroke();
    
    ellipse(x + 0, 200, 180, 20); // top wings
    
    ellipse(x + 0, 220, 180, 20); // bottom wings
    
	fill('yellow');
	noStroke();
	ellipse(x, 200, 70, 80);  	// top body
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
	ellipse(x, 200, 60, 70);  	// top body
    ellipse(x, 250, 80, 80);  	// body
	
    fill('yellow');
	noStroke();
	ellipse(x, 200, 50, 60);  	// top body
    ellipse(x, 250, 70, 70);  	// body
    
    fill(0);
	noStroke();
	ellipse(x, 200, 40, 50);  	// top body
    ellipse(x, 250, 60, 60);  	// body

}

function banana(x, s) {
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