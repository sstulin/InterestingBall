var x = 0;
var y = 0;
var xspeed = 3;
var yspeed = 3;

var cxspeed=50;
var cyspeed=70;

var a
var b
var c
var d

function setup() {
  createCanvas(600,400);
}
function draw() 



{ 
  a = random(0,255)
  b = random(0, 255)
  c = random(80,120)
  d = random(80,120)
  e = x+random (10,-10)
  f = y + random (10-10)
  //X AXIS
  x=x+xspeed;
      if (mouseIsPressed)
        {
          x=x+cxspeed;
        
          background (a,b,c);
          stroke (b);
          strokeWeight(4);
          noFill();
          ellipse(x,y,c,d);
        }
      else
        {
    
          background (255);
          stroke (0);
          strokeWeight(4);
          noFill();
          ellipse(x,y,100,100);
        }
      if (x>width)
        {xspeed = -xspeed;}
      if (x<0)
        {xspeed = -xspeed;}
      if (x>width)
        {cxspeed = -cxspeed;}
      if (x<0)
        {cxspeed = -cxspeed;}
        
  //Y Axis
    y=y+yspeed;
      if (mouseIsPressed)
        {y=y+cyspeed;}
      if (y>height)
        {yspeed = -yspeed;}
      if (y<0)
        {yspeed = -yspeed;}
      if (y>height)
        {cyspeed = -cyspeed;}
      if (y<0)
        {cyspeed = -cyspeed;}
}
