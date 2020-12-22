class Tree {

    constructor(x,y){
    
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true});
        World.add(world,this.body)
        this.w  = 600;
        this.h = 600;
        this.image  = loadImage("images/tree.png");
    }
    
    display(){
    
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.w,this.h);
    }
    
    }