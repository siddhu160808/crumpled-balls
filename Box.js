class Box {
  constructor(x,y,w,h){
    //properties
    
  this.w = w
  this.h = h
  this.box1 = Matter.Bodies.rectangle(x,y,this.w,this.h)
  Matter.World.add(world,this.box1)
  }
  
  //functionality
  
  drawBody(){
     fill("#063E7B")
    rect(this.box1.position.x,this.box1.position.y,
         this.w,this.h,2)
  }
}