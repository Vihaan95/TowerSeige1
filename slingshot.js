class SlingShot{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:1
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        //this.bodyA = bodyA;
        World.add(world,this.sling);
    
    }

    attach(){

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}