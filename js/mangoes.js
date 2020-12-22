class Mangoes {

    constructor(x,y, r){
    
        this.body = Bodies.circle(x,y,r,{isStatic:true, restitution:0});
        World.add(world,this.body)
        this.r = r
        this.image  = loadImage("images/mango.png");
        console.log(this.r);
    }
    
    display(){
    
        var pos = this.body.position;
        var angle  = this.body.angle
       push ();
        translate(pos.x , pos.y);
        rotate(angle)
        image(this.image,0, 0,this.r*2,this.r*2);
        pop();
    }
    
    }