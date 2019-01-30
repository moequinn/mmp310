/*
    Interactive Story of Joe and Abel
*/


function setup() {
    
    createCanvas(800, 500);

}

function draw() {
    
    background(204, 255, 229)
    
    //Characater 1 on the left Joe
    //Characater 2 on the right Abel
    
    
    //Character 1 eye colors
    noStroke();
    fill(0);
    
    // Characater 1 left eye
    ellipse(185, 275, 20, 20);
    
    // Characater 1 right eye
    ellipse(215, 275, 20, 20);
    
    //Character 1 head and body color
    noStroke();
    fill(102, 178, 255);
    
    // Characater 1 Head
    ellipse(200, 275, 15, 30);
    
    // Characater 1 Body
    ellipse(200, 375, 20, 200);
    
    
    
    //Character 1 eye colors
    noStroke();
    fill(30);
    
    // Character 2 left eye
    ellipse(570, 300, 30, 30);
    
    // Characater 2 right eye
    ellipse(630, 300, 30, 30);
    
    //Character 1
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 Head
    ellipse(600, 300, 60, 50);
    
    // Characater 2 Body
    ellipse(600, 375, 100, 150);
    
    
    
}