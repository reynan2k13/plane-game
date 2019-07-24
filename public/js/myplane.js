import ImagePlane from 'images/player.png';

export function myplane(){
	
	var planeContainer = new createjs.Container();
	var plane = new createjs.Shape();
	var planeImage = new createjs.Bitmap(ImagePlane);
	planeImage.scaleX = planeImage.scaleY = 0.7;
	
	var planeX = 0,
		planeY = 0,
		planeW = 50,
		planeH = 50;

	plane.graphics
		.beginStroke('blue')
		.drawRect(planeX, planeY, planeW, planeH)

	plane.y = 430;
	plane.x = planeX;
	planeContainer.y = plane.y;
	planeContainer.x = planeX;


	planeContainer.addChild(planeImage);

	return planeContainer;
}
