import enemyImageBullet from 'images/enemyBullet.png';

export function enemyBullet(plane,pos){

	var enemybulletContainer = new createjs.Container();
	var enemyBullet = new createjs.Shape();
	var bulletImage = new createjs.Bitmap(enemyImageBullet);
	bulletImage.scaleX = bulletImage.scaleY = 0.012;
	bulletImage.x = 2

	var enemyBulletX = 0,
		enemyBulletY = 0,
		enemyBulletW = 10,
		enemyBulletH = 30;


	enemyBullet.x = 0;
	enemyBullet.y = 0;
	enemybulletContainer.x = plane+20; 
	enemybulletContainer.y = pos+70; 

	enemyBullet.graphics
		.beginStroke('blue')
		.drawRect(enemyBulletX, enemyBulletY, enemyBulletW, enemyBulletH)

	enemybulletContainer.addChild(bulletImage);

	return enemybulletContainer;
}	