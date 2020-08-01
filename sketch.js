const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

}
function draw(){

  Engine.update(engine);

 var particle = [];
 var plinkos = [];
 var divisions = [];

 var divisionHeight=300;

 for(var k =0; k<=width; k = k + 80 ){
   divisions.push(new Divisions(k, height-divisionsHeight/2,10,divisionsHeight));
 }

 for (var j = 40; j <=width;j = j+50){
   plinkos.push(new plinko(j,75));
 }

 for (var j = 15; j <=width-10;j=j+50) {
  plinkos.push(new plinko(j,175));
 }

 for (var j = 0;j<particles.length; j++){
  paricles[j].display();
}

for (var k = 0;j<particles.length; k++){
  paricles[k].display();
}
}


