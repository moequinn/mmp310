/*
    mmp 310 week 1 (01/27/2019)
    Interactive Story of Joe and Abel
    By Moe Quinn
*/

// global Variables
var X = 200; // main X postion
var Y = 200; // main Y postion
var W = 200; // main Width
var H = 200; // main Height


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
    
    
    
    //Character 2 
    noStroke();
    fill(190);  // wings color
    
       
    
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
     
    
    noStroke(); 
    fill(0);  // text color
    
    text('Meet Joe and Abel', 240, 110); 
    //comments
    
    
}