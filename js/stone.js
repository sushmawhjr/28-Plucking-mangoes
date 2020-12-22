class Stone {

    constructor(x,y, r){

        var options  = {
            isStatic: false,
            restitution: 0,
            friction: 0.2,
            density:1 
        }
    
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)
        this.r = r
        this.image  = loadImage("images/stone.png");
        console.log(this.r)
    }
    
    display(){
    
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.r*2,this.r*2);
    }
    
    }