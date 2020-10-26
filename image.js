class Img {


    constructor(x,y,diameter){
    
    var options ={
    

        isStatic:true,
        friction:0.3,
        density:1.2
    
    }
    
    this.body = Bodies.circle(x,y,diameter,options);
    this.d = diameter/2;
    World.add(world,this.body);
    this.image =  loadImage("dustbingreen.png");
    
    }
    
    display(){
    
    var pos  = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0);
    pop();

    }
    
    }