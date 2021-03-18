class Hero{
    constructor(x,y,w,h){
        var options={
           
            frictionAir:0.1,
            density:1
            
        }
     this.body=Bodies.rectangle(x,y,w,h,options)
     this.w=w
     this.h=h
     World.add(world,this.body)
     this.hero=loadImage("images/Superhero-01.png")
    }
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    //fill("green")
    //stroke("white")
    //strokeWeight(4)
    image(this.hero,0,0,200,100)
    pop();
    }
    
}