/*
	mmp 310 week 5 (03/06/2019)
	new grid design with save image code
*/
    
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
    
    var columns = 12;
    var rows = 8;
    var w = width / columns; // columns width
    var h = height / rows; // row height
    
    // nested for loop
    for(let x = 0; x <= width; x += w) {
        for(let y = 0; y <= height; y += h) {
            
            /*var r = map(y, 0, width, 0, PI);
			push();
			translate(x + w/2, y + h/2);
			rotate(r); 
			
			fill(255);
			arc(0, 0, w, w, 0, PI * 1.5, CHORD);
			pop(); */
            
            // line(x1, y1, x2, y2);
            stroke(10, 100, 30);
            strokeWeight(2);
            
            line(x + w, y, x, y + h);
            var r = random(3);
            if (r > 2) {
				line(x - w, y, x + w, y - h);
                line(x + w, y, x - w, y + h);
			} else if (r > 1) {
                stroke(255);
				line(x, y, x + w, y + h);
                line(x + w, y, w, y + h);
			} else {
				line(x + w, y, x, y - h);
                line(x + w, y, x, y - h);
			}
			
		}
	}
}

function mouseClicked() {
    save('pattern-1.jpg');
}