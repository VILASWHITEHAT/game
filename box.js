class Box {
    constructor(x, y, width, height){
        var options = {
            restitution: 0.3,
            friction: 0.8,
            density: 0.3
        }
         
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        
    }
  
display(){
rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
}

  };
  