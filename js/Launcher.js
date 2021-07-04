class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.Laun = Constraint.create(options);
        World.add(world, this.Laun);
    }
    attach(bodyA){
        this.Laun.bodyA = bodyA;
    }
    fly(){
        this.Laun.bodyA = null;
    }

    display(){
        if(this.Laun.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}