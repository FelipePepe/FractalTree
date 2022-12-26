var angle1;

function setup() {
  angle1 = PI / 4;
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 8, 0.01);
}


function draw() {
  background(51);
  angle1 = slider.value();
  stroke(255);
  translate(200, height);
   
  branch(100);
}

function branch(len){

    line(0, 0, 0, - len);
    translate(0, -len);
    
    if (len > 4)
    {
      push();
      rotate(angle1);
      branch(len * 0.70);
      pop();
      push();
      rotate(-angle1);
      branch(len * 0.70);
      pop();
    }
}
