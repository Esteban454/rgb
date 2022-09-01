var btn_verde;
var btn_rojo;
var r=0
var g=0
var b=0

function setup() {
  createCanvas(400,400);
 btn_rojo=createButton("RED");
 btn_rojo.position(100,50);
 btn_rojo.mousePressed(rojo_rgb);

 btn_verde=createButton("GREEN");
 btn_verde.position(250,50);
 btn_verde.mousePressed(verde_rgb);
}

function draw() 
{
  background(r,g,b);

}
function rojo_rgb(){
  r=255;
  g=0;
  b=0;
}
function verde_rgb(){
  r=0;
  g=255;
  b=0;
}