function toggle(left,top){


//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 50;
this.width  = 50;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 0;

/*========================================================================================================*/
//set all the atributes for this html_Element
this.build = function(){
	
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";	
}

this.runFunction = function(e){};
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_stoped_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(200, 241, 255)");
      gradient.addColorStop(0.67, "rgb(100, 170, 197)");
      gradient.addColorStop(1.00, "rgb(0, 98, 139)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer1/Group/Path
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

      // layer1/Group/Path
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
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer4/Group
      ctx.save();

      // layer4/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(36.3, 30.3, 13.7, 19.7);
      gradient.addColorStop(0.00, "rgb(200, 221, 239)");
      gradient.addColorStop(0.50, "rgb(110, 141, 156)");
      gradient.addColorStop(0.98, "rgb(19, 60, 73)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer4/Group/Path
      ctx.globalAlpha = alpha * 0.11;
      ctx.beginPath();
      ctx.moveTo(16.0, 33.8);
      ctx.bezierCurveTo(20.9, 38.6, 28.8, 38.6, 33.7, 33.8);
      ctx.bezierCurveTo(38.6, 28.9, 38.5, 21.0, 33.7, 16.1);
      ctx.bezierCurveTo(33.7, 16.1, 37.4, 24.3, 31.3, 30.5);
      ctx.bezierCurveTo(25.2, 36.6, 16.0, 33.8, 16.0, 33.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer4/Group/Path
      ctx.globalAlpha = alpha * 0.05;
      ctx.beginPath();
      ctx.moveTo(34.2, 16.2);
      ctx.bezierCurveTo(29.3, 11.4, 21.4, 11.4, 16.5, 16.2);
      ctx.bezierCurveTo(11.6, 21.1, 11.6, 29.0, 16.5, 33.9);
      ctx.bezierCurveTo(16.5, 33.9, 12.7, 25.7, 18.9, 19.5);
      ctx.bezierCurveTo(25.0, 13.4, 34.2, 16.2, 34.2, 16.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer4/Group/Path
      ctx.globalAlpha = alpha * 0.24;
      ctx.beginPath();
      ctx.moveTo(28.2, 35.0);
      ctx.bezierCurveTo(28.2, 35.0, 33.0, 33.0, 34.2, 27.2);
      ctx.bezierCurveTo(34.6, 25.1, 36.5, 25.7, 36.9, 26.9);
      ctx.bezierCurveTo(37.1, 27.7, 36.9, 28.8, 36.9, 28.8);
      ctx.bezierCurveTo(36.9, 28.8, 35.6, 34.1, 28.7, 36.0);
      ctx.bezierCurveTo(20.3, 38.3, 28.2, 35.0, 28.2, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer4/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(190, 231, 244)");
      gradient.addColorStop(0.50, "rgb(95, 160, 187)");
      gradient.addColorStop(0.98, "rgb(0, 88, 129)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer2/Group/Path
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

      // layer2/Group/Path
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
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(200, 241, 255)");
      gradient.addColorStop(0.67, "rgb(100, 170, 197)");
      gradient.addColorStop(1.00, "rgb(0, 98, 139)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer1/Group/Path
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

      // layer1/Group/Path
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
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer6/Group
      ctx.save();

      // layer6/Group/Path
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

      // layer6/Group/Path
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

      // layer6/Group/Path
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
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
	
	  var ctx = this.htmlElement.getContext("2d");
	  
      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer3/Group
      ctx.save();

      // layer3/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(36.3, 30.3, 13.7, 19.7);
      gradient.addColorStop(0.00, "rgb(255, 223, 203)");
      gradient.addColorStop(0.62, "rgb(194, 127, 113)");
      gradient.addColorStop(1.00, "rgb(134, 30, 22)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer3/Group/Path
      ctx.globalAlpha = alpha * 0.11;
      ctx.beginPath();
      ctx.moveTo(16.0, 33.8);
      ctx.bezierCurveTo(20.9, 38.6, 28.8, 38.6, 33.7, 33.8);
      ctx.bezierCurveTo(38.6, 28.9, 38.5, 21.0, 33.7, 16.1);
      ctx.bezierCurveTo(33.7, 16.1, 37.4, 24.3, 31.3, 30.5);
      ctx.bezierCurveTo(25.2, 36.6, 16.0, 33.8, 16.0, 33.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Path
      ctx.globalAlpha = alpha * 0.05;
      ctx.beginPath();
      ctx.moveTo(34.2, 16.2);
      ctx.bezierCurveTo(29.3, 11.4, 21.4, 11.4, 16.5, 16.2);
      ctx.bezierCurveTo(11.6, 21.1, 11.6, 29.0, 16.5, 33.9);
      ctx.bezierCurveTo(16.5, 33.9, 12.7, 25.7, 18.9, 19.5);
      ctx.bezierCurveTo(25.0, 13.4, 34.2, 16.2, 34.2, 16.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer3/Group/Path
      ctx.globalAlpha = alpha * 0.24;
      ctx.beginPath();
      ctx.moveTo(28.2, 35.0);
      ctx.bezierCurveTo(28.2, 35.0, 33.0, 33.0, 34.2, 27.2);
      ctx.bezierCurveTo(34.6, 25.1, 36.5, 25.7, 36.9, 26.9);
      ctx.bezierCurveTo(37.1, 27.7, 36.9, 28.8, 36.9, 28.8);
      ctx.bezierCurveTo(36.9, 28.8, 35.6, 34.1, 28.7, 36.0);
      ctx.bezierCurveTo(20.3, 38.3, 28.2, 35.0, 28.2, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
      ctx.restore();
	
}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer5/Group
      ctx.save();

      // layer5/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(37.5, 25.0);
      ctx.bezierCurveTo(37.5, 18.1, 31.9, 12.5, 25.0, 12.5);
      ctx.bezierCurveTo(18.1, 12.5, 12.5, 18.1, 12.5, 25.0);
      ctx.bezierCurveTo(12.5, 31.9, 18.1, 37.5, 25.0, 37.5);
      ctx.bezierCurveTo(31.9, 37.5, 37.5, 31.9, 37.5, 25.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(13.7, 19.7, 36.3, 30.3);
      gradient.addColorStop(0.00, "rgb(255, 229, 203)");
      gradient.addColorStop(0.62, "rgb(217, 130, 113)");
      gradient.addColorStop(1.00, "rgb(180, 30, 22)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer5/Group/Path
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

      // layer5/Group/Path
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
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
      var ctx = this.htmlElement.getContext("2d");

      var alpha = ctx.globalAlpha;
      var gradient;

      // backplate/Path
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

      // layer6/Group
      ctx.save();

      // layer6/Group/Path
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

      // layer6/Group/Path
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

      // layer6/Group/Path
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

/*========================================================================================================*/
this.bind=function(evnt,fctn){
//determine the right event and assign to the right function
if(evnt=="mousedown"){this.downFunction=fctn;}
if(evnt=="mouseup"){this.upFunction=fctn;}
if(evnt=="mouseover"){this.overFunction=fctn;}
if(evnt=="mouseout"){this.outFunction=fctn;}	
}
/*========================================================================================================*/
this.unbind=function(evnt){
//if the event is specified in the call tot his function then that spefic event function is removed	
if(evnt=="mousedown"){this.downFunction=null;}
if(evnt=="mouseup"){this.upFunction=null;}
if(evnt=="mouseover"){this.overFunction=null;}
if(evnt=="mouseout"){this.outFunction=null;}
//otherwise all functions are set to null this removing all bound functions from this object
if(evnt==undefined){
this.downFunction = null;
this.upfunction   = null;
this.overFunction = null;
this.outFunction  = null;
}

}
/*========================================================================================================*/
this.bindRun=function(fnct){this.run=fnct;}
this.unbindRun=function(fnct){this.run=null;}

this.bindStop=function(fnct){this.stop=fnct;}
this.unbindStop=function(fnct){this.stop=null;}

this.run=function(c){}
this.stop=function(c){}

/*========================================================================================================*/
this.CreateButtonEvents=function(c){
	
//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.desktopEvents(this);
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.ieEvents(this);
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.touchScreenEvents(this);
}
//this is the android events
if(window.platformFlag=="AND"){
this.touchScreenEvents(this);
}	
	
}
/*========================================================================================================*/
this.desktopEvents=function(c){

this.htmlElement.addEventListener("mousedown",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.down_running_LF();
	c.running=0;
	c.stop(c);	
	}
});
this.htmlElement.addEventListener("mouseup",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});
this.htmlElement.addEventListener("mouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.addEventListener("mouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});

}
/*========================================================================================================*/
this.touchScreenEvents=function(c){

this.htmlElement.addEventListener("touchstart",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.down_running_LF();
	c.running=0;
	c.stop(c);	
	}
});
this.htmlElement.addEventListener("touchend",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});

/*
this.htmlElement.addEventListener("mouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.addEventListener("mouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});
*/

}
/*========================================================================================================*/
this.ieEvents=function(c){

this.htmlElement.attachEvent("onmousedown",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.down_running_LF();
	c.running=0;
	c.stop(c);	
	}
});
this.htmlElement.attachEvent("onmouseup",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});
this.htmlElement.attachEvent("onmouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.attachEvent("onmouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});
	
}
/*========================================================================================================*/


//call all the function to make this button visable
this.build();
this.out_stoped_LF();
//bind events for this function
this.CreateButtonEvents(this);
	
}
