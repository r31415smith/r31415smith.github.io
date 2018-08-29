/*
** general purpose button. 
** 
*/
function printButton(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 45;
this.width  = 85;

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

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(80.0, 44.0);
      ctx.lineTo(0.0, 44.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 44.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 241, 0)";
      ctx.fill();
      ctx.restore();

      // layer4/Group
      ctx.save();

      // layer4/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.8, 2.3);
      ctx.lineTo(39.0, 2.3);
      ctx.lineTo(50.4, 11.3);
      ctx.lineTo(50.4, 16.3);
      ctx.lineTo(17.8, 16.3);
      ctx.lineTo(17.8, 5.0);
      ctx.bezierCurveTo(17.8, 5.0, 17.6, 2.3, 21.8, 2.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 231)";
      ctx.fill();
      ctx.stroke();

      // layer4/Group/Group

      // layer4/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(68.8, 40.0);
      ctx.bezierCurveTo(68.8, 40.9, 68.0, 41.6, 67.0, 41.6);
      ctx.lineTo(15.4, 41.6);
      ctx.bezierCurveTo(14.4, 41.6, 13.6, 40.9, 13.6, 40.0);
      ctx.lineTo(13.6, 17.8);
      ctx.bezierCurveTo(13.6, 17.0, 14.4, 16.3, 15.4, 16.3);
      ctx.lineTo(67.0, 16.3);
      ctx.bezierCurveTo(68.0, 16.3, 68.8, 17.0, 68.8, 17.8);
      ctx.lineTo(68.8, 40.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(226, 255, 255)";
      ctx.fill();

      // layer4/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 41.6);
      ctx.lineTo(64.4, 41.6);
      ctx.bezierCurveTo(67.4, 41.6, 68.4, 40.6, 68.4, 38.6);
      ctx.lineTo(68.6, 20.6);
      ctx.bezierCurveTo(68.6, 20.6, 65.4, 40.6, 48.4, 41.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 239, 241)";
      ctx.fill();

      // layer4/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(68.6, 40.0);
      ctx.bezierCurveTo(68.6, 40.9, 67.8, 41.6, 66.8, 41.6);
      ctx.lineTo(15.2, 41.6);
      ctx.bezierCurveTo(14.2, 41.6, 13.4, 40.9, 13.4, 40.0);
      ctx.lineTo(13.4, 17.8);
      ctx.bezierCurveTo(13.4, 17.0, 14.2, 16.3, 15.2, 16.3);
      ctx.lineTo(66.8, 16.3);
      ctx.bezierCurveTo(67.8, 16.3, 68.6, 17.0, 68.6, 17.8);
      ctx.lineTo(68.6, 40.0);
      ctx.closePath();
      ctx.stroke();

      // layer4/Group/Group
      ctx.restore();

      // layer4/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(22.4, 27.8);
      ctx.bezierCurveTo(22.4, 26.7, 22.3, 25.7, 22.3, 24.9);
      ctx.lineTo(24.7, 24.9);
      ctx.lineTo(24.8, 26.1);
      ctx.lineTo(24.8, 26.1);
      ctx.bezierCurveTo(25.5, 25.2, 26.5, 24.7, 27.8, 24.7);
      ctx.bezierCurveTo(29.7, 24.7, 31.4, 26.4, 31.4, 29.2);
      ctx.bezierCurveTo(31.4, 32.4, 29.4, 33.9, 27.4, 33.9);
      ctx.bezierCurveTo(26.4, 33.9, 25.5, 33.5, 25.2, 32.9);
      ctx.lineTo(25.1, 32.9);
      ctx.lineTo(25.1, 37.3);
      ctx.lineTo(22.4, 37.3);
      ctx.lineTo(22.4, 27.8);
      ctx.closePath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(25.1, 29.9);
      ctx.bezierCurveTo(25.1, 30.1, 25.1, 30.3, 25.2, 30.5);
      ctx.bezierCurveTo(25.3, 31.2, 26.0, 31.8, 26.8, 31.8);
      ctx.bezierCurveTo(28.0, 31.8, 28.7, 30.8, 28.7, 29.3);
      ctx.bezierCurveTo(28.7, 27.9, 28.0, 26.8, 26.8, 26.8);
      ctx.bezierCurveTo(26.0, 26.8, 25.3, 27.4, 25.2, 28.2);
      ctx.bezierCurveTo(25.1, 28.4, 25.1, 28.5, 25.1, 28.7);
      ctx.lineTo(25.1, 29.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // layer4/Group/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(33.1, 27.8);
      ctx.bezierCurveTo(33.1, 26.5, 33.1, 25.6, 33.1, 24.9);
      ctx.lineTo(35.4, 24.9);
      ctx.lineTo(35.5, 26.5);
      ctx.lineTo(35.6, 26.5);
      ctx.bezierCurveTo(36.0, 25.2, 37.1, 24.7, 38.0, 24.7);
      ctx.bezierCurveTo(38.2, 24.7, 38.3, 24.7, 38.5, 24.7);
      ctx.lineTo(38.5, 27.3);
      ctx.bezierCurveTo(38.3, 27.3, 38.1, 27.2, 37.8, 27.2);
      ctx.bezierCurveTo(36.8, 27.2, 36.1, 27.8, 35.9, 28.6);
      ctx.bezierCurveTo(35.9, 28.8, 35.9, 29.0, 35.9, 29.2);
      ctx.lineTo(35.9, 33.7);
      ctx.lineTo(33.1, 33.7);
      ctx.lineTo(33.1, 27.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer4/Group/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(42.8, 22.4);
      ctx.bezierCurveTo(42.8, 23.2, 42.2, 23.8, 41.3, 23.8);
      ctx.bezierCurveTo(40.5, 23.8, 39.9, 23.2, 39.9, 22.4);
      ctx.bezierCurveTo(39.9, 21.7, 40.5, 21.1, 41.4, 21.1);
      ctx.bezierCurveTo(42.2, 21.1, 42.8, 21.7, 42.8, 22.4);
      ctx.closePath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(40.0, 33.7);
      ctx.lineTo(40.0, 24.9);
      ctx.lineTo(42.7, 24.9);
      ctx.lineTo(42.7, 33.7);
      ctx.lineTo(40.0, 33.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer4/Group/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(44.9, 27.7);
      ctx.bezierCurveTo(44.9, 26.6, 44.9, 25.7, 44.8, 24.9);
      ctx.lineTo(47.2, 24.9);
      ctx.lineTo(47.3, 26.1);
      ctx.lineTo(47.4, 26.1);
      ctx.bezierCurveTo(47.8, 25.5, 48.6, 24.7, 50.1, 24.7);
      ctx.bezierCurveTo(51.9, 24.7, 53.3, 25.9, 53.3, 28.5);
      ctx.lineTo(53.3, 33.7);
      ctx.lineTo(50.5, 33.7);
      ctx.lineTo(50.5, 28.8);
      ctx.bezierCurveTo(50.5, 27.7, 50.1, 26.9, 49.1, 26.9);
      ctx.bezierCurveTo(48.4, 26.9, 47.9, 27.4, 47.7, 27.9);
      ctx.bezierCurveTo(47.7, 28.1, 47.7, 28.4, 47.7, 28.6);
      ctx.lineTo(47.7, 33.7);
      ctx.lineTo(44.9, 33.7);
      ctx.lineTo(44.9, 27.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer4/Group/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Group/Compound Path/Path
      ctx.moveTo(58.4, 22.5);
      ctx.lineTo(58.4, 24.9);
      ctx.lineTo(60.4, 24.9);
      ctx.lineTo(60.4, 26.9);
      ctx.lineTo(58.4, 26.9);
      ctx.lineTo(58.4, 30.1);
      ctx.bezierCurveTo(58.4, 31.2, 58.7, 31.6, 59.5, 31.6);
      ctx.bezierCurveTo(59.9, 31.6, 60.1, 31.6, 60.3, 31.6);
      ctx.lineTo(60.3, 33.6);
      ctx.bezierCurveTo(60.0, 33.8, 59.3, 33.9, 58.6, 33.9);
      ctx.bezierCurveTo(57.7, 33.9, 56.9, 33.6, 56.5, 33.1);
      ctx.bezierCurveTo(56.0, 32.6, 55.7, 31.7, 55.7, 30.5);
      ctx.lineTo(55.7, 26.9);
      ctx.lineTo(54.6, 26.9);
      ctx.lineTo(54.6, 24.9);
      ctx.lineTo(55.7, 24.9);
      ctx.lineTo(55.7, 23.2);
      ctx.lineTo(58.4, 22.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	 var ctx = this.htmlElement.getContext("2d");
  	 var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(80.0, 44.0);
      ctx.lineTo(0.0, 44.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 44.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 241, 0)";
      ctx.fill();
      ctx.restore();

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.9, 2.3);
      ctx.lineTo(39.1, 2.3);
      ctx.lineTo(50.5, 11.3);
      ctx.lineTo(50.5, 16.3);
      ctx.lineTo(17.9, 16.3);
      ctx.lineTo(17.9, 5.0);
      ctx.bezierCurveTo(17.9, 5.0, 17.7, 2.3, 21.9, 2.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.stroke();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(68.7, 40.0);
      ctx.bezierCurveTo(68.7, 40.9, 67.9, 41.6, 66.9, 41.6);
      ctx.lineTo(15.3, 41.6);
      ctx.bezierCurveTo(14.3, 41.6, 13.5, 40.9, 13.5, 40.0);
      ctx.lineTo(13.5, 17.8);
      ctx.bezierCurveTo(13.5, 16.9, 14.3, 16.2, 15.3, 16.2);
      ctx.lineTo(66.9, 16.2);
      ctx.bezierCurveTo(67.9, 16.2, 68.7, 16.9, 68.7, 17.8);
      ctx.lineTo(68.7, 40.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(226, 255, 255)";
      ctx.fill();
      ctx.stroke();

      // layer2/Group/Group

      // layer2/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(22.3, 28.1);
      ctx.bezierCurveTo(22.3, 27.0, 22.3, 26.0, 22.2, 25.2);
      ctx.lineTo(24.6, 25.2);
      ctx.lineTo(24.7, 26.4);
      ctx.lineTo(24.8, 26.4);
      ctx.bezierCurveTo(25.4, 25.5, 26.4, 25.0, 27.7, 25.0);
      ctx.bezierCurveTo(29.6, 25.0, 31.4, 26.7, 31.4, 29.5);
      ctx.bezierCurveTo(31.4, 32.7, 29.3, 34.2, 27.4, 34.2);
      ctx.bezierCurveTo(26.3, 34.2, 25.5, 33.8, 25.1, 33.2);
      ctx.lineTo(25.0, 33.2);
      ctx.lineTo(25.0, 37.6);
      ctx.lineTo(22.3, 37.6);
      ctx.lineTo(22.3, 28.1);
      ctx.closePath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(25.0, 30.2);
      ctx.bezierCurveTo(25.0, 30.4, 25.1, 30.6, 25.1, 30.8);
      ctx.bezierCurveTo(25.3, 31.5, 25.9, 32.1, 26.7, 32.1);
      ctx.bezierCurveTo(27.9, 32.1, 28.6, 31.1, 28.6, 29.6);
      ctx.bezierCurveTo(28.6, 28.2, 28.0, 27.1, 26.7, 27.1);
      ctx.bezierCurveTo(26.0, 27.1, 25.3, 27.7, 25.1, 28.5);
      ctx.bezierCurveTo(25.1, 28.7, 25.0, 28.8, 25.0, 29.0);
      ctx.lineTo(25.0, 30.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(33.1, 28.1);
      ctx.bezierCurveTo(33.1, 26.8, 33.1, 25.9, 33.0, 25.2);
      ctx.lineTo(35.3, 25.2);
      ctx.lineTo(35.4, 26.8);
      ctx.lineTo(35.5, 26.8);
      ctx.bezierCurveTo(36.0, 25.5, 37.0, 25.0, 37.9, 25.0);
      ctx.bezierCurveTo(38.1, 25.0, 38.3, 25.0, 38.5, 25.0);
      ctx.lineTo(38.5, 27.6);
      ctx.bezierCurveTo(38.3, 27.6, 38.0, 27.5, 37.7, 27.5);
      ctx.bezierCurveTo(36.7, 27.5, 36.0, 28.1, 35.9, 28.9);
      ctx.bezierCurveTo(35.8, 29.1, 35.8, 29.3, 35.8, 29.5);
      ctx.lineTo(35.8, 34.0);
      ctx.lineTo(33.1, 34.0);
      ctx.lineTo(33.1, 28.1);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(42.7, 22.7);
      ctx.bezierCurveTo(42.7, 23.5, 42.2, 24.1, 41.3, 24.1);
      ctx.bezierCurveTo(40.4, 24.1, 39.8, 23.5, 39.8, 22.7);
      ctx.bezierCurveTo(39.8, 22.0, 40.4, 21.4, 41.3, 21.4);
      ctx.bezierCurveTo(42.2, 21.4, 42.7, 22.0, 42.7, 22.7);
      ctx.closePath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(39.9, 34.0);
      ctx.lineTo(39.9, 25.2);
      ctx.lineTo(42.6, 25.2);
      ctx.lineTo(42.6, 34.0);
      ctx.lineTo(39.9, 34.0);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(44.8, 28.0);
      ctx.bezierCurveTo(44.8, 26.9, 44.8, 26.0, 44.8, 25.2);
      ctx.lineTo(47.1, 25.2);
      ctx.lineTo(47.3, 26.4);
      ctx.lineTo(47.3, 26.4);
      ctx.bezierCurveTo(47.7, 25.8, 48.6, 25.0, 50.0, 25.0);
      ctx.bezierCurveTo(51.8, 25.0, 53.2, 26.2, 53.2, 28.8);
      ctx.lineTo(53.2, 34.0);
      ctx.lineTo(50.5, 34.0);
      ctx.lineTo(50.5, 29.1);
      ctx.bezierCurveTo(50.5, 28.0, 50.1, 27.2, 49.1, 27.2);
      ctx.bezierCurveTo(48.3, 27.2, 47.9, 27.7, 47.7, 28.2);
      ctx.bezierCurveTo(47.6, 28.4, 47.6, 28.7, 47.6, 28.9);
      ctx.lineTo(47.6, 34.0);
      ctx.lineTo(44.8, 34.0);
      ctx.lineTo(44.8, 28.0);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(58.3, 22.8);
      ctx.lineTo(58.3, 25.2);
      ctx.lineTo(60.3, 25.2);
      ctx.lineTo(60.3, 27.2);
      ctx.lineTo(58.3, 27.2);
      ctx.lineTo(58.3, 30.4);
      ctx.bezierCurveTo(58.3, 31.5, 58.6, 31.9, 59.4, 31.9);
      ctx.bezierCurveTo(59.8, 31.9, 60.0, 31.9, 60.2, 31.9);
      ctx.lineTo(60.2, 33.9);
      ctx.bezierCurveTo(59.9, 34.1, 59.2, 34.2, 58.5, 34.2);
      ctx.bezierCurveTo(57.6, 34.2, 56.9, 33.9, 56.4, 33.4);
      ctx.bezierCurveTo(55.9, 32.9, 55.7, 32.0, 55.7, 30.8);
      ctx.lineTo(55.7, 27.2);
      ctx.lineTo(54.5, 27.2);
      ctx.lineTo(54.5, 25.2);
      ctx.lineTo(55.7, 25.2);
      ctx.lineTo(55.7, 23.5);
      ctx.lineTo(58.3, 22.8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_LF=function(){
   
    var ctx = this.htmlElement.getContext("2d");
   var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(80.0, 44.0);
      ctx.lineTo(0.0, 44.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 44.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 241, 0)";
      ctx.fill();
      ctx.restore();

      // layer4/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.8, 2.3);
      ctx.lineTo(39.0, 2.3);
      ctx.lineTo(50.4, 11.3);
      ctx.lineTo(50.4, 16.3);
      ctx.lineTo(17.8, 16.3);
      ctx.lineTo(17.8, 5.0);
      ctx.bezierCurveTo(17.8, 5.0, 17.6, 2.3, 21.8, 2.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 231)";
      ctx.fill();
      ctx.stroke();

      // layer4/Group

      // layer4/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(68.8, 40.0);
      ctx.bezierCurveTo(68.8, 40.9, 68.0, 41.6, 67.0, 41.6);
      ctx.lineTo(15.4, 41.6);
      ctx.bezierCurveTo(14.4, 41.6, 13.6, 40.9, 13.6, 40.0);
      ctx.lineTo(13.6, 17.8);
      ctx.bezierCurveTo(13.6, 17.0, 14.4, 16.3, 15.4, 16.3);
      ctx.lineTo(67.0, 16.3);
      ctx.bezierCurveTo(68.0, 16.3, 68.8, 17.0, 68.8, 17.8);
      ctx.lineTo(68.8, 40.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(226, 255, 255)";
      ctx.fill();

      // layer4/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.4, 41.6);
      ctx.lineTo(64.4, 41.6);
      ctx.bezierCurveTo(67.4, 41.6, 68.4, 40.6, 68.4, 38.6);
      ctx.lineTo(68.6, 20.6);
      ctx.bezierCurveTo(68.6, 20.6, 65.4, 40.6, 48.4, 41.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 239, 241)";
      ctx.fill();

      // layer4/Group/Path
      ctx.beginPath();
      ctx.moveTo(68.6, 40.0);
      ctx.bezierCurveTo(68.6, 40.9, 67.8, 41.6, 66.8, 41.6);
      ctx.lineTo(15.2, 41.6);
      ctx.bezierCurveTo(14.2, 41.6, 13.4, 40.9, 13.4, 40.0);
      ctx.lineTo(13.4, 17.8);
      ctx.bezierCurveTo(13.4, 17.0, 14.2, 16.3, 15.2, 16.3);
      ctx.lineTo(66.8, 16.3);
      ctx.bezierCurveTo(67.8, 16.3, 68.6, 17.0, 68.6, 17.8);
      ctx.lineTo(68.6, 40.0);
      ctx.closePath();
      ctx.stroke();

      // layer4/Group
      ctx.restore();

      // layer4/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(22.4, 27.8);
      ctx.bezierCurveTo(22.4, 26.7, 22.3, 25.7, 22.3, 24.9);
      ctx.lineTo(24.7, 24.9);
      ctx.lineTo(24.8, 26.1);
      ctx.lineTo(24.8, 26.1);
      ctx.bezierCurveTo(25.5, 25.2, 26.5, 24.7, 27.8, 24.7);
      ctx.bezierCurveTo(29.7, 24.7, 31.4, 26.4, 31.4, 29.2);
      ctx.bezierCurveTo(31.4, 32.4, 29.4, 33.9, 27.4, 33.9);
      ctx.bezierCurveTo(26.4, 33.9, 25.5, 33.5, 25.2, 32.9);
      ctx.lineTo(25.1, 32.9);
      ctx.lineTo(25.1, 37.3);
      ctx.lineTo(22.4, 37.3);
      ctx.lineTo(22.4, 27.8);
      ctx.closePath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(25.1, 29.9);
      ctx.bezierCurveTo(25.1, 30.1, 25.1, 30.3, 25.2, 30.5);
      ctx.bezierCurveTo(25.3, 31.2, 26.0, 31.8, 26.8, 31.8);
      ctx.bezierCurveTo(28.0, 31.8, 28.7, 30.8, 28.7, 29.3);
      ctx.bezierCurveTo(28.7, 27.9, 28.0, 26.8, 26.8, 26.8);
      ctx.bezierCurveTo(26.0, 26.8, 25.3, 27.4, 25.2, 28.2);
      ctx.bezierCurveTo(25.1, 28.4, 25.1, 28.5, 25.1, 28.7);
      ctx.lineTo(25.1, 29.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer4/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(33.1, 27.8);
      ctx.bezierCurveTo(33.1, 26.5, 33.1, 25.6, 33.1, 24.9);
      ctx.lineTo(35.4, 24.9);
      ctx.lineTo(35.5, 26.5);
      ctx.lineTo(35.6, 26.5);
      ctx.bezierCurveTo(36.0, 25.2, 37.1, 24.7, 38.0, 24.7);
      ctx.bezierCurveTo(38.2, 24.7, 38.3, 24.7, 38.5, 24.7);
      ctx.lineTo(38.5, 27.3);
      ctx.bezierCurveTo(38.3, 27.3, 38.1, 27.2, 37.8, 27.2);
      ctx.bezierCurveTo(36.8, 27.2, 36.1, 27.8, 35.9, 28.6);
      ctx.bezierCurveTo(35.9, 28.8, 35.9, 29.0, 35.9, 29.2);
      ctx.lineTo(35.9, 33.7);
      ctx.lineTo(33.1, 33.7);
      ctx.lineTo(33.1, 27.8);
      ctx.closePath();
      ctx.fill();

      // layer4/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(42.8, 22.4);
      ctx.bezierCurveTo(42.8, 23.2, 42.2, 23.8, 41.3, 23.8);
      ctx.bezierCurveTo(40.5, 23.8, 39.9, 23.2, 39.9, 22.4);
      ctx.bezierCurveTo(39.9, 21.7, 40.5, 21.1, 41.4, 21.1);
      ctx.bezierCurveTo(42.2, 21.1, 42.8, 21.7, 42.8, 22.4);
      ctx.closePath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(40.0, 33.7);
      ctx.lineTo(40.0, 24.9);
      ctx.lineTo(42.7, 24.9);
      ctx.lineTo(42.7, 33.7);
      ctx.lineTo(40.0, 33.7);
      ctx.closePath();
      ctx.fill();

      // layer4/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(44.9, 27.7);
      ctx.bezierCurveTo(44.9, 26.6, 44.9, 25.7, 44.8, 24.9);
      ctx.lineTo(47.2, 24.9);
      ctx.lineTo(47.3, 26.1);
      ctx.lineTo(47.4, 26.1);
      ctx.bezierCurveTo(47.8, 25.5, 48.6, 24.7, 50.1, 24.7);
      ctx.bezierCurveTo(51.9, 24.7, 53.3, 25.9, 53.3, 28.5);
      ctx.lineTo(53.3, 33.7);
      ctx.lineTo(50.5, 33.7);
      ctx.lineTo(50.5, 28.8);
      ctx.bezierCurveTo(50.5, 27.7, 50.1, 26.9, 49.1, 26.9);
      ctx.bezierCurveTo(48.4, 26.9, 47.9, 27.4, 47.7, 27.9);
      ctx.bezierCurveTo(47.7, 28.1, 47.7, 28.4, 47.7, 28.6);
      ctx.lineTo(47.7, 33.7);
      ctx.lineTo(44.9, 33.7);
      ctx.lineTo(44.9, 27.7);
      ctx.closePath();
      ctx.fill();

      // layer4/Group/Compound Path
      ctx.beginPath();

      // layer4/Group/Compound Path/Path
      ctx.moveTo(58.4, 22.5);
      ctx.lineTo(58.4, 24.9);
      ctx.lineTo(60.4, 24.9);
      ctx.lineTo(60.4, 26.9);
      ctx.lineTo(58.4, 26.9);
      ctx.lineTo(58.4, 30.1);
      ctx.bezierCurveTo(58.4, 31.2, 58.7, 31.6, 59.5, 31.6);
      ctx.bezierCurveTo(59.9, 31.6, 60.1, 31.6, 60.3, 31.6);
      ctx.lineTo(60.3, 33.6);
      ctx.bezierCurveTo(60.0, 33.8, 59.3, 33.9, 58.6, 33.9);
      ctx.bezierCurveTo(57.7, 33.9, 56.9, 33.6, 56.5, 33.1);
      ctx.bezierCurveTo(56.0, 32.6, 55.7, 31.7, 55.7, 30.5);
      ctx.lineTo(55.7, 26.9);
      ctx.lineTo(54.6, 26.9);
      ctx.lineTo(54.6, 24.9);
      ctx.lineTo(55.7, 24.9);
      ctx.lineTo(55.7, 23.2);
      ctx.lineTo(58.4, 22.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_LF=function(){
    var ctx = this.htmlElement.getContext("2d");
    var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(80.0, 44.0);
      ctx.lineTo(0.0, 44.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 44.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 241, 0)";
      ctx.fill();
      ctx.restore();

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.9, 2.3);
      ctx.lineTo(39.1, 2.3);
      ctx.lineTo(50.5, 11.3);
      ctx.lineTo(50.5, 16.3);
      ctx.lineTo(17.9, 16.3);
      ctx.lineTo(17.9, 5.0);
      ctx.bezierCurveTo(17.9, 5.0, 17.7, 2.3, 21.9, 2.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.stroke();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(68.7, 40.0);
      ctx.bezierCurveTo(68.7, 40.9, 67.9, 41.6, 66.9, 41.6);
      ctx.lineTo(15.3, 41.6);
      ctx.bezierCurveTo(14.3, 41.6, 13.5, 40.9, 13.5, 40.0);
      ctx.lineTo(13.5, 17.8);
      ctx.bezierCurveTo(13.5, 16.9, 14.3, 16.2, 15.3, 16.2);
      ctx.lineTo(66.9, 16.2);
      ctx.bezierCurveTo(67.9, 16.2, 68.7, 16.9, 68.7, 17.8);
      ctx.lineTo(68.7, 40.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(226, 255, 255)";
      ctx.fill();
      ctx.stroke();

      // layer2/Group/Group

      // layer2/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(22.3, 28.1);
      ctx.bezierCurveTo(22.3, 27.0, 22.3, 26.0, 22.2, 25.2);
      ctx.lineTo(24.6, 25.2);
      ctx.lineTo(24.7, 26.4);
      ctx.lineTo(24.8, 26.4);
      ctx.bezierCurveTo(25.4, 25.5, 26.4, 25.0, 27.7, 25.0);
      ctx.bezierCurveTo(29.6, 25.0, 31.4, 26.7, 31.4, 29.5);
      ctx.bezierCurveTo(31.4, 32.7, 29.3, 34.2, 27.4, 34.2);
      ctx.bezierCurveTo(26.3, 34.2, 25.5, 33.8, 25.1, 33.2);
      ctx.lineTo(25.0, 33.2);
      ctx.lineTo(25.0, 37.6);
      ctx.lineTo(22.3, 37.6);
      ctx.lineTo(22.3, 28.1);
      ctx.closePath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(25.0, 30.2);
      ctx.bezierCurveTo(25.0, 30.4, 25.1, 30.6, 25.1, 30.8);
      ctx.bezierCurveTo(25.3, 31.5, 25.9, 32.1, 26.7, 32.1);
      ctx.bezierCurveTo(27.9, 32.1, 28.6, 31.1, 28.6, 29.6);
      ctx.bezierCurveTo(28.6, 28.2, 28.0, 27.1, 26.7, 27.1);
      ctx.bezierCurveTo(26.0, 27.1, 25.3, 27.7, 25.1, 28.5);
      ctx.bezierCurveTo(25.1, 28.7, 25.0, 28.8, 25.0, 29.0);
      ctx.lineTo(25.0, 30.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(33.1, 28.1);
      ctx.bezierCurveTo(33.1, 26.8, 33.1, 25.9, 33.0, 25.2);
      ctx.lineTo(35.3, 25.2);
      ctx.lineTo(35.4, 26.8);
      ctx.lineTo(35.5, 26.8);
      ctx.bezierCurveTo(36.0, 25.5, 37.0, 25.0, 37.9, 25.0);
      ctx.bezierCurveTo(38.1, 25.0, 38.3, 25.0, 38.5, 25.0);
      ctx.lineTo(38.5, 27.6);
      ctx.bezierCurveTo(38.3, 27.6, 38.0, 27.5, 37.7, 27.5);
      ctx.bezierCurveTo(36.7, 27.5, 36.0, 28.1, 35.9, 28.9);
      ctx.bezierCurveTo(35.8, 29.1, 35.8, 29.3, 35.8, 29.5);
      ctx.lineTo(35.8, 34.0);
      ctx.lineTo(33.1, 34.0);
      ctx.lineTo(33.1, 28.1);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(42.7, 22.7);
      ctx.bezierCurveTo(42.7, 23.5, 42.2, 24.1, 41.3, 24.1);
      ctx.bezierCurveTo(40.4, 24.1, 39.8, 23.5, 39.8, 22.7);
      ctx.bezierCurveTo(39.8, 22.0, 40.4, 21.4, 41.3, 21.4);
      ctx.bezierCurveTo(42.2, 21.4, 42.7, 22.0, 42.7, 22.7);
      ctx.closePath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(39.9, 34.0);
      ctx.lineTo(39.9, 25.2);
      ctx.lineTo(42.6, 25.2);
      ctx.lineTo(42.6, 34.0);
      ctx.lineTo(39.9, 34.0);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(44.8, 28.0);
      ctx.bezierCurveTo(44.8, 26.9, 44.8, 26.0, 44.8, 25.2);
      ctx.lineTo(47.1, 25.2);
      ctx.lineTo(47.3, 26.4);
      ctx.lineTo(47.3, 26.4);
      ctx.bezierCurveTo(47.7, 25.8, 48.6, 25.0, 50.0, 25.0);
      ctx.bezierCurveTo(51.8, 25.0, 53.2, 26.2, 53.2, 28.8);
      ctx.lineTo(53.2, 34.0);
      ctx.lineTo(50.5, 34.0);
      ctx.lineTo(50.5, 29.1);
      ctx.bezierCurveTo(50.5, 28.0, 50.1, 27.2, 49.1, 27.2);
      ctx.bezierCurveTo(48.3, 27.2, 47.9, 27.7, 47.7, 28.2);
      ctx.bezierCurveTo(47.6, 28.4, 47.6, 28.7, 47.6, 28.9);
      ctx.lineTo(47.6, 34.0);
      ctx.lineTo(44.8, 34.0);
      ctx.lineTo(44.8, 28.0);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Group/Compound Path/Path
      ctx.moveTo(58.3, 22.8);
      ctx.lineTo(58.3, 25.2);
      ctx.lineTo(60.3, 25.2);
      ctx.lineTo(60.3, 27.2);
      ctx.lineTo(58.3, 27.2);
      ctx.lineTo(58.3, 30.4);
      ctx.bezierCurveTo(58.3, 31.5, 58.6, 31.9, 59.4, 31.9);
      ctx.bezierCurveTo(59.8, 31.9, 60.0, 31.9, 60.2, 31.9);
      ctx.lineTo(60.2, 33.9);
      ctx.bezierCurveTo(59.9, 34.1, 59.2, 34.2, 58.5, 34.2);
      ctx.bezierCurveTo(57.6, 34.2, 56.9, 33.9, 56.4, 33.4);
      ctx.bezierCurveTo(55.9, 32.9, 55.7, 32.0, 55.7, 30.8);
      ctx.lineTo(55.7, 27.2);
      ctx.lineTo(54.5, 27.2);
      ctx.lineTo(54.5, 25.2);
      ctx.lineTo(55.7, 25.2);
      ctx.lineTo(55.7, 23.5);
      ctx.lineTo(58.3, 22.8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
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
