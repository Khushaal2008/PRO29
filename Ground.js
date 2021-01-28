class Ground{
    constructor(width,height){
var options={
    isStatic:true
}
this.body = Bodies.rectangle(100,100,this.width,this.height)
this.width = width
this.height = height;
World.add(world, this.body)
    }
    display(){
        fill (2,123,32)
        rectMode(CENTER)
        rect(100,670,this.width,this.height)
    }
}