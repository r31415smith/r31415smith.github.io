function inputPainter(){

this.paintSlider = paintSlider;

function paintSlider(canvas,x){

      var ctx = canvas.getContext("2d");
		var y = 3;
      var gradient;
		 ctx.save();
   	  ctx.clearRect(0,0,200,200);
     
      ctx.beginPath();
      ctx.moveTo(x+8.7, y+17.7);
      ctx.bezierCurveTo(x+8.7, y+20.1, x+6.7, y+22.0, x+4.3, y+22.0);
      ctx.lineTo(x+4.3, 22.0);
      ctx.bezierCurveTo(x+1.9, y+22.0, x+0.0, y+20.1, x+0.0, y+17.7);
      ctx.lineTo(x+0.0, 4.3);
      ctx.bezierCurveTo(x+0.0, y+1.9, x+1.9, y+0.0, x+4.3, y+0.0);
      ctx.lineTo(x+4.3, 0.0);
      ctx.bezierCurveTo(x+6.7, y+0.0, x+8.7, y+1.9, x+8.7, y+4.3);
      ctx.lineTo(x+8.7, 17.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(x+0.0, y+11.0, x+8.7, y+11.0);
      gradient.addColorStop(0.00, "rgb(114, 160, 213)");
      gradient.addColorStop(0.16, "rgb(142, 187, 227)");
      gradient.addColorStop(0.37, "rgb(169, 214, 242)");
      gradient.addColorStop(1.00, "rgb(0, 104, 172)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();	
}

}
