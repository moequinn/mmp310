/*
	mmp 310 week 6 (02/27/2019)
	loop 3 Grids example
*/
    
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(random(91));
	textSize(50);
	
	var columns = 12;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
            fill(random(255), 0, random(255));
            
                ellipse(x, y, w / 2);

                noFill();
                strokeWeight(4);
                stroke('#70FFC1');
                var r = random(w);
                var offset = 10;

                ellipse(x - offset, y, w / 4);
                ellipse(x + offset, y, w / 4);
		
			var choice = random(2);
			if (choice > 1) {
				
				var _r = random(255, x);
				var _g = random(255, y);
				var _b = random(255);
                
				fill(_r, _g, _b);
                ellipse(x, y / 4, w / 2);
                ellipse(x, y / 2, w / 2);
                
			} else {
                
				stroke('#CC4689');
                ellipse(x - offset, y, w/8);
                ellipse(x + offset, y, w/4);
                ellipse(x, y, w/2);
                
			}
		}
	}
}
