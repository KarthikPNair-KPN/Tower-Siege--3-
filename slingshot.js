class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingSho = Constraint.create(options);
        World.add(world, this.slingSho);
    }
    fly(){
        this.slingSho.bodyA = null;
    }
    attach(body){
        this.slingSho.bodyA = body;   
    }
    display(){
        if(this.slingSho.bodyA != null){
        var pointA = this.slingSho.bodyA.position;
        var pointB = this.slingSho.pointB;
        strokeWeight(8);
        stroke(70,225,199);
        line(pointA.x+50, pointA.y+40, pointB.x+50, pointB.y+10);
        }
    }
    
}