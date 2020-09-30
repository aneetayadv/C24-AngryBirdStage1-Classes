class Log {
    constructor(x,y,h,angle)
    {
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    }

    display()
    {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body);
        push();
        fill(255);
        strokeWeight(4);
        stroke("green");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

};