class Paper{
   constructor(x,y,width,height){
      var options ={
         isStatic: false,
         restitution:0.3,
         friction: 0.5,
         density: 1.5
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
   }

   display(){
      ellipse(56,46,55,55);
   }
}