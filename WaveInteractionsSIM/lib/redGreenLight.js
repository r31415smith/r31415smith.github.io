/*************************************************************
 * 
 *************************************************************/
var redGreenLight = function(left,top){


    this.htmlElement = document.createElement("canvas");
    
    
    this.top    = top;
    this.left   = left;
    
    this.htmlElement.setAttribute("width",50);
    this.htmlElement.setAttribute("height",50);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = this.top+"px";
    this.htmlElement.style.left = this.left+"px";
    this.htmlElement.style.zIndex = "500";	
    
    this.running_LF();

}
/*************************************************************
 * 
 *************************************************************/
redGreenLight.prototype.stoped_LF=function()
{
    
	  var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(95, 255, 255)";
      ctx.fill();
      ctx.restore();

      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(200, 255, 241)");
      gradient.addColorStop(0.67, "rgb(100, 197, 170)");
      gradient.addColorStop(1.00, "rgb(0, 139, 98)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.24;
      ctx.beginPath();
      ctx.moveTo(19.4, 25.4);
      ctx.bezierCurveTo(19.4, 25.4, 21.6, 18.7, 26.1, 18.7);
      ctx.bezierCurveTo(28.8, 18.7, 27.4, 16.0, 25.6, 15.1);
      ctx.bezierCurveTo(24.5, 14.5, 23.0, 14.4, 23.0, 14.4);
      ctx.bezierCurveTo(23.0, 14.4, 15.4, 14.0, 15.4, 23.2);
      ctx.bezierCurveTo(15.4, 32.5, 19.4, 25.4, 19.4, 25.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      ctx.globalAlpha = alpha * 0.35;
      ctx.beginPath();
      ctx.moveTo(20.8, 19.8);
      ctx.bezierCurveTo(20.8, 19.8, 24.1, 18.3, 26.1, 17.9);
      ctx.bezierCurveTo(27.4, 17.6, 24.9, 15.4, 24.9, 15.4);
      ctx.bezierCurveTo(24.9, 15.4, 20.8, 13.0, 17.5, 18.3);
      ctx.bezierCurveTo(14.0, 24.0, 20.8, 19.8, 20.8, 19.8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*************************************************************
 * 
 *************************************************************/
redGreenLight.prototype.running_LF=function()
{
      var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(95, 255, 255)";
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(255, 239, 221)");
      gradient.addColorStop(0.67, "rgb(236, 149, 138)");
      gradient.addColorStop(1.00, "rgb(218, 58, 55)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.40;
      ctx.beginPath();
      ctx.moveTo(19.4, 25.4);
      ctx.bezierCurveTo(19.4, 25.4, 21.6, 18.7, 26.1, 18.7);
      ctx.bezierCurveTo(28.8, 18.7, 27.4, 16.0, 25.6, 15.1);
      ctx.bezierCurveTo(24.5, 14.5, 23.0, 14.4, 23.0, 14.4);
      ctx.bezierCurveTo(23.0, 14.4, 15.4, 14.0, 15.4, 23.2);
      ctx.bezierCurveTo(15.4, 32.5, 19.4, 25.4, 19.4, 25.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      ctx.globalAlpha = alpha * 0.90;
      ctx.beginPath();
      ctx.moveTo(20.8, 19.8);
      ctx.bezierCurveTo(20.8, 19.8, 24.1, 18.3, 26.1, 17.9);
      ctx.bezierCurveTo(27.4, 17.6, 24.9, 15.4, 24.9, 15.4);
      ctx.bezierCurveTo(24.9, 15.4, 20.8, 13.0, 17.5, 18.3);
      ctx.bezierCurveTo(14.0, 24.0, 20.8, 19.8, 20.8, 19.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 241)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      
}
/*************************************************************
 * 
 *************************************************************/
