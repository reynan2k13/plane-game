export function creatStar(color,position, randomStar){
	var star = new createjs.Shape();

	star.graphics
		.beginFill(color)
		.drawPolyStar(position, 0, 8, randomStar, 0.9, -90);

	return star;	
}