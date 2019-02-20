/*
    mmp 310 week 1 (01/27/2019)
    Interactive Story of Joe and Abel
    By Moe Quinn
*/

// global Variables
var x = 200; // main x postion
var y = 200; // main y postion
var w = 200; // main width
var h = 200; // main height


function setup() {
    
    createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);

}


function draw() {
    
    background(204, 255, 229) // background color
    
    
    
    //Characater 1 on the left Joe
    //Characater 2 on the right Abel
    
    
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
    ellipse(x, y + 75, w - 185, h - 170);  // head
    
    // Characater 1 
    ellipse(x + 0, y + 0 + 175, w - 180, h + 0);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(x + 0, y + 110, w - 160, h - 160, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
    // end of character 1
    
    
    
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(x + 370, y + 100, w - 170,  h -170);  // outter left eye
    
    // Characater 2 
    ellipse(x + 430, y + 100, w - 170, h - 170);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(x + 370, y + 100, w - 180, h - 180);  // left eye
    
    // Characater 2 
    ellipse(x + 430, y + 100, w - 180, h - 180);  // right eye
    
    
    
    //Character 2 
    noStroke();
    fill(190);  // wings color
    
       
    
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
    ellipse(x + 400, y + 175, w - 100, h - 50);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 150, h - 160); // head
    
    // Characater 2  
    ellipse(x + 400, y + 175, w - 110, h - 60); // top Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 160, h - 170); // head
    
    // Characater 2  
    ellipse(x + 400, y + 175, w - 120, h - 70); // top Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(x + 400, y + 100, w - 150, h - 160); // head
    
    // Characater 2 
    ellipse(x + 400, y + 175, w - 130, h - 80);  // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(x + 400, y + 110, w - 180, h - 180, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2
     
    
    noStroke(); 
    fill(0);  // text color
    
    text('Meet Joe and Abel', 240, 110); 
    //comments
    
    
}