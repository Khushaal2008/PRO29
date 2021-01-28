class RedBlock{
    constructor(x,y,width,height){
        var options={
        restitution:0.3
        }
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
this.x = x;
this.y = y;
this.width = width
this.height = height
World.add(world, this.body)
    }
    display(){
        //var pos = this.body.position;
        push();
       fill (255,0,0)
        rectMode(CENTER)
       rect(this.x,this.y,this.width,this.height)
         pop();
    }
}