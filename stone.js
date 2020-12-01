class stone{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            friction:1,
            restitution:0.8,
            density:0.1
        };
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        this.image=loadImage("polygon.png");
        World.add(world,this.body)

        
    }

    display(){
        var pos=this.body.position
        
        push();
        translate(pos.x,pos.y);
        image(this.image,0,0,100,90);
        pop();
    }
}