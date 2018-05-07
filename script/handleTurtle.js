window.onload = function(){
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	len = document.getElementById("len");
	angle = document.getElementById("angle");
	lwidth = document.getElementById("lineWidth");
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.translate(0,c.height);
	ctx.rotate(Math.Pi);
	ctx.moveTo(0,0);
}

function moveInput(){
	move(len.value);
	reset();
}

function lineInput(){
	line(len.value);
	reset();
}

function changeAngleInput(){
	changeAngle(angle.value);
	reset();
}

function changeLineWidthIn(){
	changeLineWidth(lineWidth.value);
	reset();
}

function reset(){
	len.value = null;
  	angle.value = null;
	lwidth.value = null;
}
