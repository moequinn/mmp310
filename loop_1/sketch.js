/*
	mmp 310 week 4 (02/20/2019)
	loop 1 example
*/


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(71);
	rectMode(CENTER);
	noStroke();
	
	for (let x = 0; x < width; x += 300) {
		
        fill('lightgreen');
		ellipse(x, 290, 100); // lower body
        
        fill('darkgreen');
		ellipse(x, 200, 150); // upper body
        
        fill('lightgreen');
		ellipse(x, 100, 180); // face
        
        
        
        
        
        
        
        
        fill('black');
		rect(x, 150, 100, 60, 50);// mouth
        
        fill('darkgreen');
		rect(x, 150, 100, 25, 10); // tongue
        
        fill(255);
		ellipse(x + 50, 40, 50); // left eye
		ellipse(x - 50, 40, 50); // right eye
        
		fill(0);
		ellipse(x + 60, 50, 25); // left pupil
		ellipse(x - 40, 50, 25); // right pupil
        
        fill('darkgreen');
		rect(x, 90, 30, 20, 10); // nose
        
		
	}
	
	let x = width/10;
	for (let i = 0; i < 5; i++) {
		var c = map(i, 0, 5, 100, 225); // map color
        
		fill(c);
		var s = map(i, 0, 4, 10, 200); // map size
		var y = map(i, 0, 4, 400, 600);
		ellipse(x, y, s);
		x += width/5;
        
        rect(x, y, s, 90, 100);
        
        
        
        
	}
	
	
}