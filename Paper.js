class Paper{
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        densitiy: 1.5
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
   // this.image=loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("pink");
 ellipse( pos.x, pos.y,this.radius,this.radius);
   
  }
}