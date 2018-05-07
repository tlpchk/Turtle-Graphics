window.onload = function(){
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.translate(0,c.height);
	ctx.rotate(Math.Pi);
	ctx.moveTo(0,0);
	drawFigures();
}

function drawFigures(){
	move(10);changeAngle(90);move(10);changeAngle(-90);
	
	changeColor();
	drawRegularPolygon(100,3);
	move(10);
	
	changeLineWidth(3);
	changeColor();
	drawRegularPolygon(100,4);
	move(30);
	
	changeLineWidth(5);
	changeColor();
	drawRegularPolygon(60,5);
	move(90);
	
	changeLineWidth(5);
	changeColor();
	drawRegularPolygon(60,10);
	move(30);
	
}

function drawRegularPolygon(length,angles){
	var i = 0;
	var regA = 180-180*(angles-2)/angles
	for(i; i < angles; i++){
		line(length);
		changeAngle(regA);
	}
	move(length);
}