class Ball{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r/2
		this.Body=Bodies.circle(this.x, this.y, this.r, options)
		//World.add(World, this.Body);
		World.add(world, this.Body);

	}
	display()
	{
			
			var paperpos=this.Body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
