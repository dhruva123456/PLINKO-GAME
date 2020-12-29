class Particle {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.4,
            density: 0.8,
            friction: 1
        }

        this.r = r;

        this.colour = color(random(20,225), random(30,215), random(50,105));

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world ,this.body);
    }

    display() {
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);

    }
}