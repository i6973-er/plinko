class plinko {
    constructor(x,y,r){
        
       var options = {
         "restitution" : 0.8,
         "friction" : 0.3,
         "density" : 1.0
       }
   
       this.bodies = Bodies.circle(x,y,this.r,options);
       this.color = color(random(0,225),random(0,225),random(0,225));
   
       World.add(world,this.body);
   
   }
       
       display(){
         var pos = this.body.position;
         var angle = this.body.angle;
   
         push();
         tranlate(pos.x,pos.y);
         strokeWeight(3);
         stroke("red");
         fill("blue");
         ellipseMode(CENTER);
         ellipse(0,0,this.x,this.y);
   
   
       }
    }