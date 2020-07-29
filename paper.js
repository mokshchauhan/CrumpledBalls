class Paper{
    constructor(x, y, radius){
        var options={
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var paperPos=this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        fill("red");
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
};