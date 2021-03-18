class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:310
        }

        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
       var pointA=this.chain.bodyA.position
       var pointB = this.pointB
       stroke("white")
       strokeWeight(0)
       line(pointB.x,pointB.y,pointA.x,pointA.y)

    }
}