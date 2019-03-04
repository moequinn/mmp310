/*
	mmp 310 week 6 (02/27/2019)
	loop 3 Grids example
*/
    
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	textSize(50);
	
	var columns = 12;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			fill('#7F725B');
			noStroke();
			ellipse(x, y, w/2);
			
			noFill();
			strokeWeight(4);
			stroke('#FFBD4C');
			
			// triangle(x1, y1, x2, y2, x3, y3);
			var r = random(w);
			//triangle(x + random(12), y + r, x, y, x + r, y);
            triangle(x + random(12), y + r, x, y, x + r, y);
			
			// line(x1, y1, x2, y2);
			
			stroke('#7F5000');
			line(x + w/4, y + random(20), x - w/4, y);
		
			var choice = random(2);
			if (choice > 1) {
				
				var _r = random(0, 110, x);
				var _g = random(0, 30, y);
				var _b = random(255);
				fill(_r, _g, _b);
				rect(x, y, w / 4, h);
			} else {
				stroke('#CC8000');
				line(x - w/2, y - h/2, x + w/2, y + h/2);
			}
		
		}
	}
}
