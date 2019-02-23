/*
	mmp 310 week 3 (02/13/2019)
	interactive story 3
	plot sketch, adding functions
*/


// global Variables
var x = 200; // main x postion
var y = 200; // main y postion
var w = 200; // main width
var h = 200; // main height

// clouds
var cloudX = 100;
var cloudY = 100;
var cloudW = 100;
var cloudH = 100;
//var clouudSize = 100;

// stars
var starX = 100;
var starY = 100;

// sun
var sunX = 100;
var sunY = 100;
var sunW = 100;
var sunH = 100;
//var sunSize = 100;

// chapters
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
        rect(x - 200, y + 280, windowWidth, windowHeight);
        
        
        
        // Fence 1
        noStroke();
        fill("brown");  // fence color
        rect(x - 200, y + 230, windowWidth, h - 170);
        
        // Fence 2
        noStroke();
        fill("brown");  // fence color
        rect(x - 200, y + 280, windowWidth, h - 170);
        
		abel(800, 200, 200);  // first character
		joel(200, 100, 200); // second character
        
        
		narrative("Meet Joe and Abel.", "Click anywhere to continue.");
	} else if (chapter == "day") {
        background('lightblue');
		fill('yellow');
        noStroke();
		ellipse(800, 100, 100);
        
        // clouds 1
        noStroke();
        fill("white");   
        ellipse(cloudX + 100, cloudY - 50, cloudW - 50);
        ellipse(cloudX + 130, cloudW - 40, cloudW- 50);
        ellipse(cloudX + 110, cloudY - 30, cloudW - 50);
        
        // clouds 2
        noStroke();
        fill("white");   
        ellipse(cloudX + 350, cloudY - 30, cloudW - 50);
        ellipse(cloudX + 320, cloudY - 20, cloudW - 50);
        ellipse(cloudX + 360, cloudY + 10, cloudW - 50);
        ellipse(cloudX + 330, cloudY + 10, cloudW - 50);
        
        // clouds 3
        noStroke();
        fill("white");   
        ellipse(cloudX + 500, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 470, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 510, cloudY + 90, cloudW - 50);
        
        // clouds 4
        noStroke();
        fill("white");   
        ellipse(cloudX + 650, cloudY - 30, cloudW - 50);
        ellipse(cloudX + 620, cloudY - 20, cloudW - 50);
        ellipse(cloudX + 660, cloudY - 10, cloudW - 50);
        ellipse(cloudX + 630, cloudY + 10, cloudW - 50);
        
        // clouds 5
        noStroke();
        fill("white");   
        ellipse(cloudX + 750, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 720, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 760, cloudY + 90, cloudW - 50);
        ellipse(cloudX + 730, cloudY + 110, cloudW - 50);
        
        // clouds 6
        noStroke();
        fill("white");   
        ellipse(cloudX + 850, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 820, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 860, cloudY + 90, cloudW - 50);
        ellipse(cloudX + 830, cloudY + 110, cloudW - 50);
        
        // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
        
		abel(600, 150, 200);  
		joel(300, 75, 200);
		narrative("Then Joel eats Abel or Abel eats Joel.", "Click on one of the characters to eat it.");
	} else if (chapter == "night") {
		if (whichFruit == "joel") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            
            // star 1
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 319, starY - 28);
            vertex(starX + 329, starY - 56);
            vertex(starX + 295, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 305, starY - 61);
            vertex(starX + 332, starY - 43);
            vertex(starX + 299, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 2
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 419, starY + 72);
            vertex(starX + 429, starY + 44);
            vertex(starX + 395, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 405, starY + 39);
            vertex(starX + 432, starY + 57);
            vertex(starX + 399, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 3
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 519, starY - 28);
            vertex(starX + 529, starY - 56);
            vertex(starX + 495, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 505, starY - 61);
            vertex(starX + 532, starY - 43);
            vertex(starX + 499, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 4
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 619, starY + 72);
            vertex(starX + 629, starY + 44);
            vertex(starX + 595, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 605, starY + 39);
            vertex(starX + 632, starY + 57);
            vertex(starX + 599, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 5
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 719, starY - 28);
            vertex(starX + 729, starY - 56);
            vertex(starX + 695, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 705, starY - 61);
            vertex(starX + 732, starY - 43);
            vertex(starX + 699, starY - 29);
            endShape(CLOSE) // bottom star
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
            
			abel(300, 100, 300);
			narrative("Abel is Stuff.", "Click anywhere to start over.");
		}
		if (whichFruit == "abel") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            // star 1
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 319, starY - 28);
            vertex(starX + 329, starY - 56);
            vertex(starX + 295, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 305, starY - 61);
            vertex(starX + 332, starY - 43);
            vertex(starX + 299, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 2
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 419, starY + 72);
            vertex(starX + 429, starY + 44);
            vertex(starX + 395, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 405, starY + 39);
            vertex(starX + 432, starY + 57);
            vertex(starX + 399, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 3
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 519, starY - 28);
            vertex(starX + 529, starY - 56);
            vertex(starX + 495, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 505, starY - 61);
            vertex(starX + 532, starY - 43);
            vertex(starX + 499, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 4
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 619, starY + 72);
            vertex(starX + 629, starY + 44);
            vertex(starX + 595, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 605, starY + 39);
            vertex(starX + 632, starY + 57);
            vertex(starX + 599, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 5
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 719, starY - 28);
            vertex(starX + 729, starY - 56);
            vertex(starX + 695, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 705, starY - 61);
            vertex(starX + 732, starY - 43);
            vertex(starX + 699, starY - 29);
            endShape(CLOSE) // bottom star
            
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
			
			joel(600, 50, 200 - 150);
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
		if (abelDist < 800) {
			whichFruit = "abel";
			chapter = "night";
		}
		// clicked joel
		var joelDist = dist(mouseX, mouseY, 400, 100);
		if (joelDist < 260 / 2) {
			whichFruit = "joel";
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
    ellipse(x + 370, y + 100, w - 170, h - 170);  // outter left eye
    
    // Characater 2 
    ellipse(x + 430, y + 100, w - 170, h - 170);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(x + 370, y + 100, w - 180, h - 180);  // left eye
    
    // Characater 2 
    ellipse(x + 430, y + 100, w - 180, h - 180);  // right eye
    
    //character 2
    arc(x + 395, y + 145, w + 50, h - 150, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(x + 395, y + 175, w + 50, h - 150, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 140, h - 150);  // head
    
    // Characater 2  
    ellipse(x + 400, y + 175, o - 100, h - 50);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 150, h - 160); // head
    
    // Characater 2  
    ellipse(x + 400, y + 175, o - 110, h - 60); // top Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 160, h - 170); // head
    
    // Characater 2  
    ellipse(x + 400, y + 175, o - 120, h - 70); // top Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 150, h - 160); // head
    
    // Characater 2 
    ellipse(x + 400, y + 175, o - 130, h - 80);  // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(x + 400, y + 110, w - 180, h - 180, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2

}

function joel(x, s, o) {
    
    //Character 1 
    noStroke();
    fill(255);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, y + 75, w - 180, h - 180);  // Outter left eye
    
    // Characater 1 
    ellipse(x + 15, y + 75, w - 180, h - 180);  // Outter right eye
    
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, y + 75, w - 190, h - 190);  // left eye
    
    // Characater 1 
    ellipse(x + 15, y + 75, w - 190, h - 190);  // right eye
    
    
    //Character 1 
    noStroke();
    fill(190);  // wings color   
    
    //character 1
    arc(x - 8, y + 110, w + 100, h -180, 100, PI + HALF_PI, PIE);  // top wings  
    
    //character 1
    arc(x - 8, y + 140, w + 100, h - 180, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(x + 0, y + 75, w - 185, h - 170);  // head
    
    // Characater 1 
    ellipse(x + 0, y + 175, o - 180, h + 0);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(x + 0, y + 110, w - 160, h - 160, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
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