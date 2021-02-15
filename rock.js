class Rock {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.5,
            friction: 0.3,
            density: 0.3
        }
         
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display() {
    ellipse(400, 200, 20, 20);
      

    }

}
