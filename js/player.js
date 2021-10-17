class Player{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = loadImage("./images/player.png")
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(this.body,world);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}