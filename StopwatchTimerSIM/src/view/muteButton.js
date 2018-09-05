function muteButton(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 80;
this.width  = 80;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 0;

this.runButtonString = "Run";
this.stopButtonString = "Stop";
/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
	
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
this.htmlElement.style.backgroundColor = "#CCCCCC";
}
/*========================================================================================================*/
//blank functions that will be asigned new functions with the use of the bind method
this.downFunction = function(e){};
this.upfunction   = function(e){};
this.overFunction = function(e){};
this.outFunction  = function(e){};

this.runFunction = function(e){};
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // mute/Group
      ctx.save();

      // mute/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.8, 57.0);
      ctx.lineTo(43.0, 54.2);
      ctx.lineTo(74.1, 23.1);
      ctx.lineTo(76.9, 25.9);
      ctx.lineTo(45.8, 57.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // mute/Group/Path
      ctx.beginPath();
      ctx.moveTo(76.9, 54.2);
      ctx.lineTo(74.1, 57.0);
      ctx.lineTo(43.0, 25.9);
      ctx.lineTo(45.8, 23.1);
      ctx.lineTo(76.9, 54.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // mute/Group
      ctx.save();

      // mute/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.8, 57.0);
      ctx.lineTo(43.0, 54.2);
      ctx.lineTo(74.1, 23.1);
      ctx.lineTo(76.9, 25.9);
      ctx.lineTo(45.8, 57.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // mute/Group/Path
      ctx.beginPath();
      ctx.moveTo(76.9, 54.2);
      ctx.lineTo(74.1, 57.0);
      ctx.lineTo(43.0, 25.9);
      ctx.lineTo(45.8, 23.1);
      ctx.lineTo(76.9, 54.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // mute/Group
      ctx.save();

      // mute/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.8, 57.0);
      ctx.lineTo(43.0, 54.2);
      ctx.lineTo(74.1, 23.1);
      ctx.lineTo(76.9, 25.9);
      ctx.lineTo(45.8, 57.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // mute/Group/Path
      ctx.beginPath();
      ctx.moveTo(76.9, 54.2);
      ctx.lineTo(74.1, 57.0);
      ctx.lineTo(43.0, 25.9);
      ctx.lineTo(45.8, 23.1);
      ctx.lineTo(76.9, 54.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");

// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // mute/Group
      ctx.save();

      // mute/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.8, 57.0);
      ctx.lineTo(43.0, 54.2);
      ctx.lineTo(74.1, 23.1);
      ctx.lineTo(76.9, 25.9);
      ctx.lineTo(45.8, 57.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // mute/Group/Path
      ctx.beginPath();
      ctx.moveTo(76.9, 54.2);
      ctx.lineTo(74.1, 57.0);
      ctx.lineTo(43.0, 25.9);
      ctx.lineTo(45.8, 23.1);
      ctx.lineTo(76.9, 54.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();

}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // play/Group
      ctx.save();

      // play/Group/Group
      ctx.save();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.6, 69.8);
      ctx.lineTo(58.3, 65.5);
      ctx.bezierCurveTo(65.2, 58.6, 68.9, 49.5, 68.9, 39.9);
      ctx.bezierCurveTo(68.9, 30.2, 65.2, 21.1, 58.3, 14.3);
      ctx.lineTo(62.6, 10.0);
      ctx.bezierCurveTo(70.6, 17.9, 75.0, 28.6, 75.0, 39.9);
      ctx.bezierCurveTo(75.0, 51.1, 70.6, 61.8, 62.6, 69.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(53.5, 61.0);
      ctx.lineTo(49.2, 56.7);
      ctx.bezierCurveTo(58.8, 47.1, 58.8, 31.4, 49.2, 21.8);
      ctx.lineTo(53.5, 17.5);
      ctx.bezierCurveTo(65.5, 29.5, 65.5, 49.0, 53.5, 61.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.3, 54.7);
      ctx.lineTo(40.0, 50.4);
      ctx.bezierCurveTo(45.7, 44.6, 45.7, 35.3, 40.0, 29.6);
      ctx.lineTo(44.3, 25.3);
      ctx.bezierCurveTo(52.4, 33.4, 52.4, 46.6, 44.3, 54.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
     
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // play/Group
      ctx.save();

      // play/Group/Group
      ctx.save();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.6, 69.8);
      ctx.lineTo(58.3, 65.5);
      ctx.bezierCurveTo(65.2, 58.6, 68.9, 49.5, 68.9, 39.9);
      ctx.bezierCurveTo(68.9, 30.2, 65.2, 21.1, 58.3, 14.3);
      ctx.lineTo(62.6, 10.0);
      ctx.bezierCurveTo(70.6, 17.9, 75.0, 28.6, 75.0, 39.9);
      ctx.bezierCurveTo(75.0, 51.1, 70.6, 61.8, 62.6, 69.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(53.5, 61.0);
      ctx.lineTo(49.2, 56.7);
      ctx.bezierCurveTo(58.8, 47.1, 58.8, 31.4, 49.2, 21.8);
      ctx.lineTo(53.5, 17.5);
      ctx.bezierCurveTo(65.5, 29.5, 65.5, 49.0, 53.5, 61.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.3, 54.7);
      ctx.lineTo(40.0, 50.4);
      ctx.bezierCurveTo(45.7, 44.6, 45.7, 35.3, 40.0, 29.6);
      ctx.lineTo(44.3, 25.3);
      ctx.bezierCurveTo(52.4, 33.4, 52.4, 46.6, 44.3, 54.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // play/Group
      ctx.save();

      // play/Group/Group
      ctx.save();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.6, 69.8);
      ctx.lineTo(58.3, 65.5);
      ctx.bezierCurveTo(65.2, 58.6, 68.9, 49.5, 68.9, 39.9);
      ctx.bezierCurveTo(68.9, 30.2, 65.2, 21.1, 58.3, 14.3);
      ctx.lineTo(62.6, 10.0);
      ctx.bezierCurveTo(70.6, 17.9, 75.0, 28.6, 75.0, 39.9);
      ctx.bezierCurveTo(75.0, 51.1, 70.6, 61.8, 62.6, 69.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(53.5, 61.0);
      ctx.lineTo(49.2, 56.7);
      ctx.bezierCurveTo(58.8, 47.1, 58.8, 31.4, 49.2, 21.8);
      ctx.lineTo(53.5, 17.5);
      ctx.bezierCurveTo(65.5, 29.5, 65.5, 49.0, 53.5, 61.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.3, 54.7);
      ctx.lineTo(40.0, 50.4);
      ctx.bezierCurveTo(45.7, 44.6, 45.7, 35.3, 40.0, 29.6);
      ctx.lineTo(44.3, 25.3);
      ctx.bezierCurveTo(52.4, 33.4, 52.4, 46.6, 44.3, 54.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");

 // layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.0, 60.0);
      ctx.lineTo(3.0, 58.0);
      ctx.lineTo(3.0, 22.0);
      ctx.lineTo(18.0, 20.0);
      ctx.lineTo(18.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(39.0, 73.0);
      ctx.lineTo(19.0, 63.0);
      ctx.lineTo(19.0, 17.0);
      ctx.lineTo(39.0, 7.0);
      ctx.lineTo(39.0, 73.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Guide

      // layer1/Guide

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(80.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.lineTo(0.0, 79.0);
      ctx.lineTo(80.0, 79.0);
      ctx.lineTo(80.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(79.0, 80.0);
      ctx.lineTo(79.0, 0.0);
      ctx.lineTo(80.0, 0.0);
      ctx.lineTo(80.0, 80.0);
      ctx.lineTo(79.0, 80.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 80.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 80.0);
      ctx.lineTo(0.0, 80.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // play/Group
      ctx.save();

      // play/Group/Group
      ctx.save();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.6, 69.8);
      ctx.lineTo(58.3, 65.5);
      ctx.bezierCurveTo(65.2, 58.6, 68.9, 49.5, 68.9, 39.9);
      ctx.bezierCurveTo(68.9, 30.2, 65.2, 21.1, 58.3, 14.3);
      ctx.lineTo(62.6, 10.0);
      ctx.bezierCurveTo(70.6, 17.9, 75.0, 28.6, 75.0, 39.9);
      ctx.bezierCurveTo(75.0, 51.1, 70.6, 61.8, 62.6, 69.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(53.5, 61.0);
      ctx.lineTo(49.2, 56.7);
      ctx.bezierCurveTo(58.8, 47.1, 58.8, 31.4, 49.2, 21.8);
      ctx.lineTo(53.5, 17.5);
      ctx.bezierCurveTo(65.5, 29.5, 65.5, 49.0, 53.5, 61.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // play/Group/Group
      ctx.restore();

      // play/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.3, 54.7);
      ctx.lineTo(40.0, 50.4);
      ctx.bezierCurveTo(45.7, 44.6, 45.7, 35.3, 40.0, 29.6);
      ctx.lineTo(44.3, 25.3);
      ctx.bezierCurveTo(52.4, 33.4, 52.4, 46.6, 44.3, 54.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
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

}
/*========================================================================================================*/
this.ieEvents=function(c){

this.htmlElement.attachEvent("mousedown",function(e){
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
this.htmlElement.attachEvent("mouseup",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});
this.htmlElement.attachEvent("mouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.attachEvent("mouseout",function(e){
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
