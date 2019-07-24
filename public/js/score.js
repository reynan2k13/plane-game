
export function scoreTxt(){

	var scoreTxt = new createjs.Text("Score:", "12px Arial", "white");

	scoreTxt.x = 0;
	scoreTxt.y = 485;

	return scoreTxt;	

}
export function playerScore (playerScore){
	var score = new createjs.Text(playerScore, "12px Arial", "white");

	score.x = 50;
	score.y = 485;

	return score;
}

export function levelTxt(){

	var levelTxt = new createjs.Text("level:", "12px Arial", "white");

	levelTxt.x = 700;
	levelTxt.y = 485;

	return levelTxt;	

}

export function playerLevel(playerLevel){

	var level = new createjs.Text(playerLevel, "12px Arial", "white");

	level.x = 750;
	level.y = 485;

	return level;	

}