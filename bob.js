class Bob{
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':1.5,
          'friction':0.3,
          'density':0.8,
      }
      this.body = Bodies.rectangle(x, y, 15, 15, options);
      this.width = 15;
      this.height = 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  