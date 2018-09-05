function eqButton(left,top){


//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 70;
this.width  = 70;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.buttonString="";
/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#99CCFF";	
}
/*========================================================================================================*/

/*========================================================================================================*/
//blank functions that will be asigned new functions with the use of the bind method
this.downFunction = function(e){};
this.upfunction   = function(e){};
this.overFunction = function(e){};
this.outFunction  = function(e){};
/*========================================================================================================*/
this.hideButton=function(){this.htmlElement.style.display="none";}
this.showButton=function(){this.htmlElement.style.display="inherit";}
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
    var alpha = ctx.globalAlpha;
      var gradient;

      // back/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(70.0, 35.0);
      ctx.bezierCurveTo(70.0, 54.3, 54.3, 70.0, 35.0, 70.0);
      ctx.bezierCurveTo(15.7, 70.0, 0.0, 54.3, 0.0, 35.0);
      ctx.bezierCurveTo(0.0, 15.7, 15.7, 0.0, 35.0, 0.0);
      ctx.bezierCurveTo(54.3, 0.0, 70.0, 15.7, 70.0, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(172, 255, 217)";
      ctx.fill();
      ctx.restore();

      // up/Group
      ctx.save();

      // up/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 35.0);
      ctx.bezierCurveTo(60.0, 48.8, 48.8, 60.0, 35.0, 60.0);
      ctx.bezierCurveTo(21.2, 60.0, 10.0, 48.8, 10.0, 35.0);
      ctx.bezierCurveTo(10.0, 21.2, 21.2, 10.0, 35.0, 10.0);
      ctx.bezierCurveTo(48.8, 10.0, 60.0, 21.2, 60.0, 35.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(23.6, 12.7, 46.4, 57.3);
      gradient.addColorStop(0.00, "rgb(165, 231, 251)");
      gradient.addColorStop(0.29, "rgb(104, 179, 221)");
      gradient.addColorStop(0.61, "rgb(42, 127, 190)");
      gradient.addColorStop(1.00, "rgb(63, 162, 190)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.56;
      ctx.beginPath();
      ctx.moveTo(43.2, 15.8);
      ctx.bezierCurveTo(44.3, 19.5, 37.4, 20.8, 29.4, 25.1);
      ctx.bezierCurveTo(21.6, 29.2, 15.8, 33.7, 14.7, 30.0);
      ctx.bezierCurveTo(13.6, 26.3, 16.8, 16.2, 25.5, 13.7);
      ctx.bezierCurveTo(34.2, 11.1, 42.2, 12.1, 43.2, 15.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(219, 255, 255)";
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.88;
      ctx.beginPath();
      ctx.moveTo(32.3, 13.9);
      ctx.bezierCurveTo(33.0, 15.2, 29.4, 16.8, 25.4, 19.7);
      ctx.bezierCurveTo(21.4, 22.5, 18.6, 25.1, 17.9, 23.9);
      ctx.bezierCurveTo(17.2, 22.6, 18.6, 18.3, 23.1, 15.9);
      ctx.bezierCurveTo(27.5, 13.5, 31.6, 12.7, 32.3, 13.9);
      ctx.closePath();
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(54.0, 19.6);
      ctx.bezierCurveTo(62.5, 30.5, 61.0, 45.9, 50.1, 54.4);
      ctx.bezierCurveTo(44.4, 58.8, 37.3, 60.4, 30.7, 59.3);
      ctx.bezierCurveTo(24.7, 58.3, 19.3, 54.7, 15.3, 49.6);
      ctx.bezierCurveTo(12.8, 46.4, 18.3, 50.5, 24.8, 51.2);
      ctx.bezierCurveTo(30.4, 51.8, 39.5, 49.6, 43.4, 47.2);
      ctx.bezierCurveTo(50.7, 42.6, 52.4, 39.2, 53.7, 34.0);
      ctx.bezierCurveTo(57.3, 18.8, 37.3, 8.5, 45.8, 13.0);
      ctx.bezierCurveTo(48.8, 14.6, 51.8, 16.7, 54.0, 19.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(54.8, 19.7);
      ctx.bezierCurveTo(63.2, 30.6, 61.2, 46.3, 50.3, 54.8);
      ctx.bezierCurveTo(39.4, 63.2, 23.7, 61.2, 15.2, 50.3);
      ctx.bezierCurveTo(6.8, 39.4, 8.8, 23.7, 19.7, 15.2);
      ctx.bezierCurveTo(30.6, 6.8, 46.3, 8.8, 54.8, 19.7);
      ctx.closePath();
      ctx.strokeStyle = "rgb(0, 145, 222)";
      ctx.stroke();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(57.5, 36.3);
      ctx.bezierCurveTo(55.9, 34.2, 50.8, 43.3, 45.2, 46.9);
      ctx.bezierCurveTo(33.8, 54.3, 30.8, 52.3, 30.3, 55.5);
      ctx.bezierCurveTo(29.7, 59.3, 40.9, 59.0, 49.6, 52.5);
      ctx.bezierCurveTo(58.4, 46.1, 59.0, 38.5, 57.5, 36.3);
      ctx.closePath();
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(48.4, 32.7);
      ctx.lineTo(21.6, 32.7);
      ctx.lineTo(21.6, 28.9);
      ctx.lineTo(48.4, 28.9);
      ctx.lineTo(48.4, 32.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // up/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 39.2);
      ctx.lineTo(21.6, 39.2);
      ctx.lineTo(21.6, 35.4);
      ctx.lineTo(48.4, 35.4);
      ctx.lineTo(48.4, 39.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
   var alpha = ctx.globalAlpha;
      var gradient;

      // back/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(70.0, 35.0);
      ctx.bezierCurveTo(70.0, 54.3, 54.3, 70.0, 35.0, 70.0);
      ctx.bezierCurveTo(15.7, 70.0, 0.0, 54.3, 0.0, 35.0);
      ctx.bezierCurveTo(0.0, 15.7, 15.7, 0.0, 35.0, 0.0);
      ctx.bezierCurveTo(54.3, 0.0, 70.0, 15.7, 70.0, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(172, 255, 217)";
      ctx.fill();
      ctx.restore();

      // down/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 35.0);
      ctx.bezierCurveTo(60.0, 48.8, 48.8, 60.0, 35.0, 60.0);
      ctx.bezierCurveTo(21.2, 60.0, 10.0, 48.8, 10.0, 35.0);
      ctx.bezierCurveTo(10.0, 21.2, 21.2, 10.0, 35.0, 10.0);
      ctx.bezierCurveTo(48.8, 10.0, 60.0, 21.2, 60.0, 35.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(23.6, 12.7, 46.4, 57.3);
      gradient.addColorStop(0.00, "rgb(190, 241, 251)");
      gradient.addColorStop(0.29, "rgb(110, 167, 204)");
      gradient.addColorStop(0.61, "rgb(30, 93, 157)");
      gradient.addColorStop(1.00, "rgb(63, 162, 190)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // down/Path
      ctx.globalAlpha = alpha * 0.56;
      ctx.beginPath();
      ctx.moveTo(43.2, 15.8);
      ctx.bezierCurveTo(44.3, 19.5, 37.4, 20.8, 29.4, 25.1);
      ctx.bezierCurveTo(21.6, 29.2, 15.8, 33.7, 14.7, 30.0);
      ctx.bezierCurveTo(13.6, 26.3, 16.8, 16.2, 25.5, 13.7);
      ctx.bezierCurveTo(34.2, 11.1, 42.2, 12.1, 43.2, 15.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(219, 255, 255)";
      ctx.fill();

      // down/Path
      ctx.globalAlpha = alpha * 0.88;
      ctx.beginPath();
      ctx.moveTo(32.3, 13.9);
      ctx.bezierCurveTo(33.0, 15.2, 29.4, 16.8, 25.4, 19.7);
      ctx.bezierCurveTo(21.4, 22.5, 18.6, 25.1, 17.9, 23.9);
      ctx.bezierCurveTo(17.2, 22.6, 18.6, 18.3, 23.1, 15.9);
      ctx.bezierCurveTo(27.5, 13.5, 31.6, 12.7, 32.3, 13.9);
      ctx.closePath();
      ctx.fill();

      // down/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(54.0, 19.6);
      ctx.bezierCurveTo(62.5, 30.5, 61.0, 45.9, 50.1, 54.4);
      ctx.bezierCurveTo(44.4, 58.8, 37.3, 60.4, 30.7, 59.3);
      ctx.bezierCurveTo(24.7, 58.3, 19.3, 54.7, 15.3, 49.6);
      ctx.bezierCurveTo(12.8, 46.4, 18.3, 50.5, 24.8, 51.2);
      ctx.bezierCurveTo(30.4, 51.8, 39.5, 49.6, 43.4, 47.2);
      ctx.bezierCurveTo(50.7, 42.6, 52.4, 39.2, 53.7, 34.0);
      ctx.bezierCurveTo(57.3, 18.8, 37.3, 8.5, 45.8, 13.0);
      ctx.bezierCurveTo(48.8, 14.6, 51.8, 16.7, 54.0, 19.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // down/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(54.8, 19.7);
      ctx.bezierCurveTo(63.2, 30.6, 61.2, 46.3, 50.3, 54.8);
      ctx.bezierCurveTo(39.4, 63.2, 23.7, 61.2, 15.2, 50.3);
      ctx.bezierCurveTo(6.8, 39.4, 8.8, 23.7, 19.7, 15.2);
      ctx.bezierCurveTo(30.6, 6.8, 46.3, 8.8, 54.8, 19.7);
      ctx.closePath();
      ctx.strokeStyle = "rgb(0, 87, 118)";
      ctx.stroke();

      // down/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(57.5, 36.3);
      ctx.bezierCurveTo(55.9, 34.2, 50.8, 43.3, 45.2, 46.9);
      ctx.bezierCurveTo(33.8, 54.3, 30.8, 52.3, 30.3, 55.5);
      ctx.bezierCurveTo(29.7, 59.3, 40.9, 59.0, 49.6, 52.5);
      ctx.bezierCurveTo(58.4, 46.1, 59.0, 38.5, 57.5, 36.3);
      ctx.closePath();
      ctx.fill();

      // down/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(48.4, 32.7);
      ctx.lineTo(21.6, 32.7);
      ctx.lineTo(21.6, 28.9);
      ctx.lineTo(48.4, 28.9);
      ctx.lineTo(48.4, 32.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // down/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 39.2);
      ctx.lineTo(21.6, 39.2);
      ctx.lineTo(21.6, 35.4);
      ctx.lineTo(48.4, 35.4);
      ctx.lineTo(48.4, 39.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

}
/*========================================================================================================*/
//draw the over state
this.over_LF=function(){
   
    var ctx = this.htmlElement.getContext("2d");
    var alpha = ctx.globalAlpha;
      var gradient;

      // back/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(70.0, 35.0);
      ctx.bezierCurveTo(70.0, 54.3, 54.3, 70.0, 35.0, 70.0);
      ctx.bezierCurveTo(15.7, 70.0, 0.0, 54.3, 0.0, 35.0);
      ctx.bezierCurveTo(0.0, 15.7, 15.7, 0.0, 35.0, 0.0);
      ctx.bezierCurveTo(54.3, 0.0, 70.0, 15.7, 70.0, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(172, 255, 217)";
      ctx.fill();
      ctx.restore();

      // over/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 35.0);
      ctx.bezierCurveTo(60.0, 48.8, 48.8, 60.0, 35.0, 60.0);
      ctx.bezierCurveTo(21.2, 60.0, 10.0, 48.8, 10.0, 35.0);
      ctx.bezierCurveTo(10.0, 21.2, 21.2, 10.0, 35.0, 10.0);
      ctx.bezierCurveTo(48.8, 10.0, 60.0, 21.2, 60.0, 35.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(23.6, 12.7, 46.4, 57.3);
      gradient.addColorStop(0.00, "rgb(165, 231, 251)");
      gradient.addColorStop(0.29, "rgb(104, 179, 221)");
      gradient.addColorStop(0.61, "rgb(42, 127, 190)");
      gradient.addColorStop(1.00, "rgb(63, 162, 190)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 0.56;
      ctx.beginPath();
      ctx.moveTo(43.2, 15.8);
      ctx.bezierCurveTo(44.3, 19.5, 37.4, 20.8, 29.4, 25.1);
      ctx.bezierCurveTo(21.6, 29.2, 15.8, 33.7, 14.7, 30.0);
      ctx.bezierCurveTo(13.6, 26.3, 16.8, 16.2, 25.5, 13.7);
      ctx.bezierCurveTo(34.2, 11.1, 42.2, 12.1, 43.2, 15.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(219, 255, 255)";
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 0.88;
      ctx.beginPath();
      ctx.moveTo(32.3, 13.9);
      ctx.bezierCurveTo(33.0, 15.2, 29.4, 16.8, 25.4, 19.7);
      ctx.bezierCurveTo(21.4, 22.5, 18.6, 25.1, 17.9, 23.9);
      ctx.bezierCurveTo(17.2, 22.6, 18.6, 18.3, 23.1, 15.9);
      ctx.bezierCurveTo(27.5, 13.5, 31.6, 12.7, 32.3, 13.9);
      ctx.closePath();
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(54.0, 19.6);
      ctx.bezierCurveTo(62.5, 30.5, 61.0, 45.9, 50.1, 54.4);
      ctx.bezierCurveTo(44.4, 58.8, 37.3, 60.4, 30.7, 59.3);
      ctx.bezierCurveTo(24.7, 58.3, 19.3, 54.7, 15.3, 49.6);
      ctx.bezierCurveTo(12.8, 46.4, 18.3, 50.5, 24.8, 51.2);
      ctx.bezierCurveTo(30.4, 51.8, 39.5, 49.6, 43.4, 47.2);
      ctx.bezierCurveTo(50.7, 42.6, 52.4, 39.2, 53.7, 34.0);
      ctx.bezierCurveTo(57.3, 18.8, 37.3, 8.5, 45.8, 13.0);
      ctx.bezierCurveTo(48.8, 14.6, 51.8, 16.7, 54.0, 19.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(54.8, 19.7);
      ctx.bezierCurveTo(63.2, 30.6, 61.2, 46.3, 50.3, 54.8);
      ctx.bezierCurveTo(39.4, 63.2, 23.7, 61.2, 15.2, 50.3);
      ctx.bezierCurveTo(6.8, 39.4, 8.8, 23.7, 19.7, 15.2);
      ctx.bezierCurveTo(30.6, 6.8, 46.3, 8.8, 54.8, 19.7);
      ctx.closePath();
      ctx.strokeStyle = "rgb(0, 118, 163)";
      ctx.stroke();

      // over/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(57.5, 36.3);
      ctx.bezierCurveTo(55.9, 34.2, 50.8, 43.3, 45.2, 46.9);
      ctx.bezierCurveTo(33.8, 54.3, 30.8, 52.3, 30.3, 55.5);
      ctx.bezierCurveTo(29.7, 59.3, 40.9, 59.0, 49.6, 52.5);
      ctx.bezierCurveTo(58.4, 46.1, 59.0, 38.5, 57.5, 36.3);
      ctx.closePath();
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(48.4, 32.7);
      ctx.lineTo(21.6, 32.7);
      ctx.lineTo(21.6, 28.9);
      ctx.lineTo(48.4, 28.9);
      ctx.lineTo(48.4, 32.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // over/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 39.2);
      ctx.lineTo(21.6, 39.2);
      ctx.lineTo(21.6, 35.4);
      ctx.lineTo(48.4, 35.4);
      ctx.lineTo(48.4, 39.2);
      ctx.closePath();
      ctx.fill();

      // over/Path
      ctx.globalAlpha = alpha * 0.05;
      ctx.beginPath();
      ctx.moveTo(59.5, 35.0);
      ctx.bezierCurveTo(59.5, 48.8, 48.3, 60.0, 34.5, 60.0);
      ctx.bezierCurveTo(20.7, 60.0, 9.5, 48.8, 9.5, 35.0);
      ctx.bezierCurveTo(9.5, 21.2, 20.7, 10.0, 34.5, 10.0);
      ctx.bezierCurveTo(48.3, 10.0, 59.5, 21.2, 59.5, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_LF=function(){
    var ctx = this.htmlElement.getContext("2d");
    var alpha = ctx.globalAlpha;
      var gradient;

      // back/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(70.0, 35.0);
      ctx.bezierCurveTo(70.0, 54.3, 54.3, 70.0, 35.0, 70.0);
      ctx.bezierCurveTo(15.7, 70.0, 0.0, 54.3, 0.0, 35.0);
      ctx.bezierCurveTo(0.0, 15.7, 15.7, 0.0, 35.0, 0.0);
      ctx.bezierCurveTo(54.3, 0.0, 70.0, 15.7, 70.0, 35.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(172, 255, 217)";
      ctx.fill();
      ctx.restore();

      // up/Group
      ctx.save();

      // up/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 35.0);
      ctx.bezierCurveTo(60.0, 48.8, 48.8, 60.0, 35.0, 60.0);
      ctx.bezierCurveTo(21.2, 60.0, 10.0, 48.8, 10.0, 35.0);
      ctx.bezierCurveTo(10.0, 21.2, 21.2, 10.0, 35.0, 10.0);
      ctx.bezierCurveTo(48.8, 10.0, 60.0, 21.2, 60.0, 35.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(23.6, 12.7, 46.4, 57.3);
      gradient.addColorStop(0.00, "rgb(165, 231, 251)");
      gradient.addColorStop(0.29, "rgb(104, 179, 221)");
      gradient.addColorStop(0.61, "rgb(42, 127, 190)");
      gradient.addColorStop(1.00, "rgb(63, 162, 190)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.56;
      ctx.beginPath();
      ctx.moveTo(43.2, 15.8);
      ctx.bezierCurveTo(44.3, 19.5, 37.4, 20.8, 29.4, 25.1);
      ctx.bezierCurveTo(21.6, 29.2, 15.8, 33.7, 14.7, 30.0);
      ctx.bezierCurveTo(13.6, 26.3, 16.8, 16.2, 25.5, 13.7);
      ctx.bezierCurveTo(34.2, 11.1, 42.2, 12.1, 43.2, 15.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(219, 255, 255)";
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.88;
      ctx.beginPath();
      ctx.moveTo(32.3, 13.9);
      ctx.bezierCurveTo(33.0, 15.2, 29.4, 16.8, 25.4, 19.7);
      ctx.bezierCurveTo(21.4, 22.5, 18.6, 25.1, 17.9, 23.9);
      ctx.bezierCurveTo(17.2, 22.6, 18.6, 18.3, 23.1, 15.9);
      ctx.bezierCurveTo(27.5, 13.5, 31.6, 12.7, 32.3, 13.9);
      ctx.closePath();
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(54.0, 19.6);
      ctx.bezierCurveTo(62.5, 30.5, 61.0, 45.9, 50.1, 54.4);
      ctx.bezierCurveTo(44.4, 58.8, 37.3, 60.4, 30.7, 59.3);
      ctx.bezierCurveTo(24.7, 58.3, 19.3, 54.7, 15.3, 49.6);
      ctx.bezierCurveTo(12.8, 46.4, 18.3, 50.5, 24.8, 51.2);
      ctx.bezierCurveTo(30.4, 51.8, 39.5, 49.6, 43.4, 47.2);
      ctx.bezierCurveTo(50.7, 42.6, 52.4, 39.2, 53.7, 34.0);
      ctx.bezierCurveTo(57.3, 18.8, 37.3, 8.5, 45.8, 13.0);
      ctx.bezierCurveTo(48.8, 14.6, 51.8, 16.7, 54.0, 19.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(54.8, 19.7);
      ctx.bezierCurveTo(63.2, 30.6, 61.2, 46.3, 50.3, 54.8);
      ctx.bezierCurveTo(39.4, 63.2, 23.7, 61.2, 15.2, 50.3);
      ctx.bezierCurveTo(6.8, 39.4, 8.8, 23.7, 19.7, 15.2);
      ctx.bezierCurveTo(30.6, 6.8, 46.3, 8.8, 54.8, 19.7);
      ctx.closePath();
      ctx.strokeStyle = "rgb(0, 145, 222)";
      ctx.stroke();

      // up/Group/Path
      ctx.globalAlpha = alpha * 0.10;
      ctx.beginPath();
      ctx.moveTo(57.5, 36.3);
      ctx.bezierCurveTo(55.9, 34.2, 50.8, 43.3, 45.2, 46.9);
      ctx.bezierCurveTo(33.8, 54.3, 30.8, 52.3, 30.3, 55.5);
      ctx.bezierCurveTo(29.7, 59.3, 40.9, 59.0, 49.6, 52.5);
      ctx.bezierCurveTo(58.4, 46.1, 59.0, 38.5, 57.5, 36.3);
      ctx.closePath();
      ctx.fill();

      // up/Group/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(48.4, 32.7);
      ctx.lineTo(21.6, 32.7);
      ctx.lineTo(21.6, 28.9);
      ctx.lineTo(48.4, 28.9);
      ctx.lineTo(48.4, 32.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // up/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 39.2);
      ctx.lineTo(21.6, 39.2);
      ctx.lineTo(21.6, 35.4);
      ctx.lineTo(48.4, 35.4);
      ctx.lineTo(48.4, 39.2);
      ctx.closePath();
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
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("mousedown",function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener("mouseup",function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.addEventListener("mouseover",function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.addEventListener("mouseout",function(e){c.out_LF();c.outFunction(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.htmlElement.attachEvent('onmousedown',function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.attachEvent('onmouseup',function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.attachEvent('onmouseover',function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.attachEvent('onmouseout',function(e){c.out_LF();c.outfunction(e);});
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.htmlElement.addEventListener('touchstart',function(e){e.preventDefault();c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener('touchend',function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}
//this is the android events
if(window.platformFlag=="AND"){
this.htmlElement.addEventListener("touchstart",function(e){e.preventDefault();c.down_LF();	c.downFunction(e);});
this.htmlElement.addEventListener("touchend",function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}


}
/*========================================================================================================*/
//call all the function to make this button visable
this.build();
this.out_LF();
//bind events for this function
this.CreateButtonEvents(this);

	
	
	
	
}
