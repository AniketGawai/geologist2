class Sand{
	constructor(x,y,r)
	{

		var options={
            restitution:0.3,
			friction:5,
			density:1
}
	// assign options to the rubber ball
		
		this.r=r
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
			var sandpos=this.body.position;
			var angle=this.body.angle		
			push()
			translate(sandpos.x, sandpos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
         ellipse(0,0,this.r,this.r);
			pop()
	}

}