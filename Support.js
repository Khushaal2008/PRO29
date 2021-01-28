class Support{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height)
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height;
        World.add(world, this.body)
            }
            display(){
                push();
                fill (48,22,8)
                rectMode(CENTER)
                rect(this.x,this.y,this.width,this.height)
                pop();
            }
        }