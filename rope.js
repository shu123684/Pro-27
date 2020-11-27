class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var option={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
        }
        this.rope = Matter.Constraint.create(option);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x+this.offsetX;
        var anchor2y = pointB.y+this.offsetY;
        line(anchor1x,anchor1y, anchor2x, anchor2y);

    }
}