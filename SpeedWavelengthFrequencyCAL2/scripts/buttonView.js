function buttonView(){
	
this.drawRight = function(canvas){
	
	 var ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(2.0, 57.1);
      ctx.lineTo(2.0, 3.1);
      ctx.lineTo(37.0, 30.1);
      ctx.lineTo(2.0, 57.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 203, 255)";
      ctx.fill();
      ctx.lineWidth = 3.0;
      ctx.stroke();
      ctx.restore();
	
}

this.drawLeft = function(canvas){
var ctx = canvas.getContext("2d");


      ctx.beginPath();
      ctx.moveTo(38.0, 3.1);
      ctx.lineTo(38.0, 57.1);
      ctx.lineTo(3.0, 30.1);
      ctx.lineTo(38.0, 3.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(152, 203, 255)";
      ctx.fill();
      ctx.lineWidth = 3.0;
      ctx.stroke();
      ctx.restore();	
}
	
}
