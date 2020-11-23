class Dustbin{
     constructor(x,y,width,height)
     
     options={
    isStatic: true
     }

     display(){
        var side1 = createSprite(310,610,20,100,{isStatic:true});
        side1.shapeColor = "red";
        World.add(world,side1);
   
        var bottom = createSprite(400,650,200,20,{isStatic:true});
        bottom.shapeColor = "red";
        World.add(world,bottom);
   
        var side2 = createSprite(490,610,20,100,{isStatic:true});
        side2.shapeColor = "red";
        World.add(world,side2)
     }
}