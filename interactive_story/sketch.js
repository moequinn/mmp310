/*
    Interactive Story of Joe and Abel
*/


function setup() {
    
    createCanvas(800, 500);

}

function draw() {
    
    background(20)

    noStroke();
    fill(255);
    
    //Characater 1 on the left (red color) Joe
    //Characater 2 on the right (blue color)
    
    // Characater 1 Head
    ellipse(200, 275, 40, 30);
    
    // Characater 1 Body
    ellipse(200, 375, 40, 200);
    
    // Character 2 Head
    ellipse(600, 300, 60, 50);
    
    // Characater 2 Body
    ellipse(600, 375, 60, 150);
    
    
    
}