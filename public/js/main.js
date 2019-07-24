import 'js/assets';
import {creatStar} from 'js/background';
import {myplane} from 'js/myplane';
import {planeBullet} from 'js/planeBullet';
import {enemyplane,enemyplane2} from 'js/enemyplane';
import {enemyBullet} from 'js/enemyBullet';
import {scoreTxt,playerScore,levelTxt,playerLevel} from 'js/score';

var dom = document.getElementById('myCanvas');
var stage = new createjs.Stage(dom);
var color = ['white','yellow','green','red','blue','skyblue','orange','violet','gray','yellowgreen'];

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);

var numberEnemy = 1;
var planeContainer = myplane();
var enemyplaneContainer = enemyplane(numberEnemy);
var enemyplaneContainer2 = enemyplane(numberEnemy);

var switcher = false;
var switcher2 = false;
var AImoves = 1;
var AIspeedShoot = 3000;
var playerDestroy = false;
var score = 0;
var scoreText = scoreTxt();
var levelText = levelTxt();
var mylevel = 0;
var level = playerLevel(mylevel)
var myScore = playerScore(score);

setInterval(function() {
	
	var position = Math.floor((Math.random()*8)*100);
	var position2 = Math.floor((Math.random()*4)*200);
	var randomStar = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	var randomColor = Math.floor(Math.random()*10);

	var star = creatStar(color[randomColor], position, randomStar);
	var star2 = creatStar(color[randomColor], position2, randomStar);

	createjs.Tween.get(star, {override: true})
		.to({y : 520}, 5000);
	createjs.Tween.get(star2, {override: true})
		.to({y : 500}, 7000);


	stage.addChild(star,star2);
	setTimeout(function(){
		stage.removeChild(star,star2);
	},7000)

	
},500);

var AIMove = setInterval(function() {
	for(var enemyFormation1=0;enemyFormation1<enemyplaneContainer.children.length;enemyFormation1++){

		switch (switcher) {

			case false:
				createjs.Tween.get(enemyplaneContainer.getChildAt(enemyFormation1), {override: true})
				.to({x: enemyplaneContainer.getChildAt(enemyFormation1).x + AImoves}, 0)

				break;
			case true:
				createjs.Tween.get(enemyplaneContainer.getChildAt(enemyFormation1), {override: true})
				.to({x: enemyplaneContainer.getChildAt(enemyFormation1).x - AImoves}, 0)
				break;

		}
		if (enemyplaneContainer.getChildAt(enemyFormation1).x >= 700) {
			switcher = true;
		} else if (enemyplaneContainer.getChildAt(enemyFormation1).x <= 40) {
			switcher = false;
		}
		
	}
	for(var enemyFormation2=0;enemyFormation2<enemyplaneContainer2.children.length;enemyFormation2++){

		switch (switcher2) {

			case false:
				createjs.Tween.get(enemyplaneContainer2.getChildAt(enemyFormation2), {override: true})
				.to({x: enemyplaneContainer2.getChildAt(enemyFormation2).x + AImoves}, 0)
				
				break;
			case true:
				createjs.Tween.get(enemyplaneContainer2.getChildAt(enemyFormation2), {override: true})
				.to({x: enemyplaneContainer2.getChildAt(enemyFormation2).x - AImoves}, 0)
				break;

		}
		if (enemyplaneContainer2.getChildAt(enemyFormation2).x >= 700) {
			switcher2 = true;
		} else if (enemyplaneContainer2.getChildAt(enemyFormation2).x <= 40) {
			switcher2 = false;
		}
		
	}
	if(enemyplaneContainer.children.length == 0 && enemyplaneContainer2.children.length == 0){
		numberEnemy++;
		if(numberEnemy <= 8){
			AImoves = AImoves +.1;
			enemyplaneContainer = enemyplane(numberEnemy)
			enemyplaneContainer2 = enemyplane2(numberEnemy)
			stage.addChild(enemyplaneContainer,enemyplaneContainer2);
			AIspeedShoot = AIspeedShoot - 100;
			mylevel++;
			level.text = mylevel;
			
		}
		else{
			AImoves = AImoves +.1;
			enemyplaneContainer = enemyplane(8)
			enemyplaneContainer2 = enemyplane2(8)
			stage.addChild(enemyplaneContainer,enemyplaneContainer2);
			AIspeedShoot = AIspeedShoot - 100;
			mylevel++;
			level.text = mylevel;
		}
		

		setInterval(function (AIspeedShoot) {
			// enemy formation 1
			if(enemyplaneContainer.children.length>0){
				var enemyshoot = Math.floor(Math.random()*enemyplaneContainer.children.length);
				var enemyBulletContainer = enemyBullet(enemyplaneContainer.getChildAt(enemyshoot).x , enemyplaneContainer.getChildAt(enemyshoot).y);
			
				var AIShoot = setInterval(function () {
				createjs.Tween.get(enemyBulletContainer, {override: true})
					.to({y: enemyBulletContainer.y + 10}, 0)

					if(enemyBulletContainer.y >= 460){
						console.log('enemy hit wall');
						stage.removeChild(enemyBulletContainer);
						clearInterval(AIShoot);
					}
					if(enemyBulletContainer.y >= 400 && enemyBulletContainer.x + 10 >= planeContainer.x && enemyBulletContainer.x <= planeContainer.x + 50){
						console.log('enemy hit player plane');
						playerDestroy = true;
						stage.removeChild(enemyBulletContainer, planeContainer);
						// stage.removeChild(enemyBulletContainer);
						clearInterval(AIShoot);
					}

				}, 0)
			
			stage.addChild(enemyBulletContainer);
			}

			// enemy formation 2
			if(enemyplaneContainer2.children.length>0){
				var enemyshoot2 = Math.floor(Math.random()*enemyplaneContainer2.children.length)

				var enemyBulletContainer2 = enemyBullet(enemyplaneContainer2.getChildAt(enemyshoot2).x, enemyplaneContainer2.getChildAt(enemyshoot2).y);
				
				var AIShoot2 = setInterval(function () {
				createjs.Tween.get(enemyBulletContainer2, {override: true})
					.to({y: enemyBulletContainer2.y + 10}, 0)

					if(enemyBulletContainer2.y >= 460){
						console.log('enemy hit wall');
						stage.removeChild(enemyBulletContainer2);
						clearInterval(AIShoot2);
					}
					if(enemyBulletContainer2.y >= 400 && enemyBulletContainer2.x + 10 >= planeContainer.x && enemyBulletContainer2.x <= planeContainer.x + 50){
						console.log('enemy hit player plane');
						playerDestroy = true;
						stage.removeChild(enemyBulletContainer2, planeContainer);
						// stage.removeChild(enemyBulletContainer2);
						clearInterval(AIShoot2);
					}

				}, 0)
			
			stage.addChild(enemyBulletContainer2);
			}

		}, AIspeedShoot)

		
	}
}, 0);




document.addEventListener('keydown', function(event) { 

	if (event.keyCode == 37 && planeContainer.x >= 20 && !planeContainer.x <=20) {
		// console.log('left');
		createjs.Tween.get(planeContainer, {override: true})
			.to({x: (planeContainer.x - 20)}, 50);
	} else if (event.keyCode == 39 && planeContainer.x <= 700 + 20) {
		// console.log('right',plane.x);
		createjs.Tween.get(planeContainer, {override: true})
			.to({x: (planeContainer.x + 20)}, 50);
	}else if (event.keyCode == 38 && playerDestroy == false) {
		// console.log('fire bullet')
		var planeBulletContainer = planeBullet(planeContainer.x);

		var trigger = setInterval(function() {
		createjs.Tween.get(planeBulletContainer, {override: true})
			.to({y: (planeBulletContainer.y - 10)}, 0);

		if(planeBulletContainer.y <= 0){
			// console.log('hit wall');
			stage.removeChild(planeBulletContainer);	
			clearInterval(trigger);
		}


		for(var target=0; target<enemyplaneContainer.children.length;target++){
			if(planeBulletContainer.y <= enemyplaneContainer.getChildAt(target).y + 60 && (planeBulletContainer.x + (10)) >= enemyplaneContainer.getChildAt(target).x && planeBulletContainer.x <= enemyplaneContainer.getChildAt(target).x + 50){
				// console.log('hit enemyplane');

				enemyplaneContainer.removeChildAt(target);
				stage.removeChild(planeBulletContainer);
				score = score + 100;
				myScore.text = score;
				clearInterval(trigger);

			}
		}

		for(var target2=0; target2<enemyplaneContainer2.children.length;target2++){
			if(planeBulletContainer.y <= enemyplaneContainer2.getChildAt(target2).y + 80 && (planeBulletContainer.x + (10)) >= enemyplaneContainer2.getChildAt(target2).x && planeBulletContainer.x <= enemyplaneContainer2.getChildAt(target2).x + 50){
				// console.log('hit enemyplane');

				enemyplaneContainer2.removeChildAt(target2);
				stage.removeChild(planeBulletContainer);
				score = score + 100;
				myScore.text = score;
				var sound = new Howl({
				  src: ['sounds/explosion.mp3']
				});
				sound.play();
				clearInterval(trigger);

			}
		}

		}, 0);

		stage.addChild(planeBulletContainer);
	}
})

stage.addChild(planeContainer,enemyplaneContainer,enemyplaneContainer2, scoreText, myScore, levelText, level)





	
	

