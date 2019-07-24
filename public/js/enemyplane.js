import ImagePlane from 'images/enemy.png';

var mainContainer = new createjs.Container();
mainContainer.name = "main-container";
var mainContainer2 = new createjs.Container();
mainContainer2.name = "main-container2";

export function enemyplane(enemySize){
	//enemyplane start

	for(var i=0;i<enemySize;i++){
		var enemyContainer = new createjs.Container();
		enemyContainer.name = "enemy"+i;

		var enemyplane = new createjs.Shape();
		enemyplane.name = "enemyPlane";

		var enemyImage = new createjs.Bitmap(ImagePlane);
		enemyImage.name = "enemyImage";
		enemyImage.scaleX = enemyImage.scaleY = 0.7;
		enemyImage.y = 25;
		enemyImage.x = 0;

		var enemyplaneX = 0;
		var enemyplaneY = 0;
		var	enemyplaneW = 50;
		var enemyplaneH = -50;

		enemyplane.graphics
			.beginStroke('green')
			.drawRect(enemyplaneX, enemyplaneY, enemyplaneW, enemyplaneH)

		
		enemyplane.y = 0;
		enemyplane.x = i*80;
		enemyplane.x = 0;
		enemyContainer.y = 0;
		enemyContainer.x = i*80;

		
		enemyContainer.addChild(enemyImage);
		mainContainer.addChild(enemyContainer);

	}
	return mainContainer;
}

export function enemyplane2(enemySize){
	//enemyplane2 start

	for(var i=0;i<enemySize;i++){
		var enemyContainer2 = new createjs.Container();
		enemyContainer2.name = "enemy"+i;

		var enemyplane2 = new createjs.Shape();
		enemyplane2.name = "enemyPlane";

		var enemyImage2 = new createjs.Bitmap(ImagePlane);
		enemyImage2.name = "enemyImage";
		enemyImage2.scaleX = enemyImage2.scaleY = 0.7;
		enemyImage2.y = 25;
		enemyImage2.x = 0;

		var enemyplaneX2 = 0;
		var enemyplaneY2 = 0;
		var	enemyplaneW2 = 50;
		var enemyplaneH2 = -50;

		enemyplane2.graphics
			.beginStroke('green')
			.drawRect(enemyplaneX2, enemyplaneY2, enemyplaneW2, enemyplaneH2)

		
		enemyplane2.y = 100;
		enemyplane2.x = 700 - (i*80);
		enemyplane2.x = 0;
		enemyContainer2.y = 70;
		enemyContainer2.x = 700 - (i*80);

		
		enemyContainer2.addChild(enemyImage2);
		mainContainer2.addChild(enemyContainer2);

	}
	return mainContainer2;
}

