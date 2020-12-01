class PinkBox {
  constructor(x, y, width, height){
    var options = {
      isStatic:false,
      friction:0.1,
      density:0.5
    };
    this.Visibility=255;
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
  }
  display(){
    
   if(this.body.speed<3){
      var angle = this.body.angle
      var pos=this.body.position
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(3);
      fill(251,193,203);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
   }
   else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      pop();
   }
  }

  score(){
    if(this.Visibility < 0 && this.Visibility > -105) {
        score++;
    }
}
};