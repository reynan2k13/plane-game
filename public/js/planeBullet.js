import ImageBullet from 'images/playerBullet.png';

export function planeBullet(plane,position){

	var bulletContainer = new createjs.Container();
	var planeBullet = new createjs.Shape();
	var bulletImage = new createjs.Bitmap(ImageBullet);
	bulletImage.scaleX = bulletImage.scaleY = 0.012;
	bulletImage.x = 2

	var planeBulletX = 0,
		planeBulletY = 0,
		planeBulletW = 10,
		planeBulletH = 30;


	planeBullet.x = 0;
	planeBullet.y = 0;
	bulletContainer.x = plane+20; 
	bulletContainer.y = 400; 

	planeBullet.graphics
		.beginStroke('green')
		.drawRect(planeBulletX, planeBulletY, planeBulletW, planeBulletH)

	bulletContainer.addChild(bulletImage);

	return bulletContainer;
}	