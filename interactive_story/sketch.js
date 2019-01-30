/*
    mmp 310 week 1
    Interactive Story of Joe and Abel
    By Moe Quinn
*/


function setup() {
    
    createCanvas(800, 500);
    textSize(40);
    textAlign();

}

function draw() {
    
    background(204, 255, 229) // background color
    
    //Characater 1 on the left Joe
    //Characater 2 on the right Abel
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(185, 275, 20, 20);  // left eye
    
    // Characater 1 
    ellipse(215, 275, 20, 20);  // right eye
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(200, 275, 15, 30);  // head
    
    // Characater 1 
    ellipse(200, 375, 20, 200);  // Body
    
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(570, 300, 30, 30);  // left eye
    
    // Characater 2 
    ellipse(630, 300, 30, 30);  // right eye
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(600, 300, 60, 50);  // head
    
    // Characater 2  
    ellipse(600, 375, 100, 150);  // top Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(600, 300, 50, 40); // head
    
    // Characater 2  
    ellipse(600, 375, 90, 140); // top Body
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(600, 300, 40, 30); // head
    
    // Characater 2  
    ellipse(600, 375, 80, 130); // top Body
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(600, 300, 50, 40); // head
    
    // Characater 2 
    ellipse(600, 375, 70, 120);  // top Body 
    
    text('Meet Joe and Abel', 240, 120); //comments
  
}