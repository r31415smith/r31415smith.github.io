function muteButton(left,top){

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
// layer9/Group
      ctx.save();

      // layer9/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Group

      // layer9/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(28.6, 35.6);
      ctx.lineTo(26.9, 33.9);
      ctx.lineTo(46.3, 14.4);
      ctx.lineTo(48.1, 16.2);
      ctx.lineTo(28.6, 35.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // layer9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.1, 33.9);
      ctx.lineTo(46.3, 35.6);
      ctx.lineTo(26.9, 16.2);
      ctx.lineTo(28.6, 14.4);
      ctx.lineTo(48.1, 33.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer9/Group
      ctx.save();

      // layer9/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Group

      // layer9/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(28.6, 35.6);
      ctx.lineTo(26.9, 33.9);
      ctx.lineTo(46.3, 14.4);
      ctx.lineTo(48.1, 16.2);
      ctx.lineTo(28.6, 35.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // layer9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.1, 33.9);
      ctx.lineTo(46.3, 35.6);
      ctx.lineTo(26.9, 16.2);
      ctx.lineTo(28.6, 14.4);
      ctx.lineTo(48.1, 33.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer9/Group
      ctx.save();

      // layer9/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Group

      // layer9/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(28.6, 35.6);
      ctx.lineTo(26.9, 33.9);
      ctx.lineTo(46.3, 14.4);
      ctx.lineTo(48.1, 16.2);
      ctx.lineTo(28.6, 35.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // layer9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.1, 33.9);
      ctx.lineTo(46.3, 35.6);
      ctx.lineTo(26.9, 16.2);
      ctx.lineTo(28.6, 14.4);
      ctx.lineTo(48.1, 33.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer9/Group
      ctx.save();

      // layer9/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer9/Group/Group

      // layer9/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(28.6, 35.6);
      ctx.lineTo(26.9, 33.9);
      ctx.lineTo(46.3, 14.4);
      ctx.lineTo(48.1, 16.2);
      ctx.lineTo(28.6, 35.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // layer9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(48.1, 33.9);
      ctx.lineTo(46.3, 35.6);
      ctx.lineTo(26.9, 16.2);
      ctx.lineTo(28.6, 14.4);
      ctx.lineTo(48.1, 33.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer8/Group
      ctx.save();

      // layer8/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Group

      // layer8/Group/Group/Group
      ctx.save();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(39.1, 43.6);
      ctx.lineTo(36.4, 40.9);
      ctx.bezierCurveTo(40.7, 36.6, 43.1, 31.0, 43.1, 24.9);
      ctx.bezierCurveTo(43.1, 18.9, 40.7, 13.2, 36.4, 8.9);
      ctx.lineTo(39.1, 6.2);
      ctx.bezierCurveTo(44.1, 11.2, 46.9, 17.9, 46.9, 24.9);
      ctx.bezierCurveTo(46.9, 32.0, 44.1, 38.6, 39.1, 43.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.4, 38.1);
      ctx.lineTo(30.7, 35.5);
      ctx.bezierCurveTo(36.8, 29.4, 36.8, 19.6, 30.7, 13.6);
      ctx.lineTo(33.4, 10.9);
      ctx.bezierCurveTo(40.9, 18.4, 40.9, 30.6, 33.4, 38.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.7, 34.2);
      ctx.lineTo(25.0, 31.5);
      ctx.bezierCurveTo(28.6, 27.9, 28.6, 22.1, 25.0, 18.5);
      ctx.lineTo(27.7, 15.8);
      ctx.bezierCurveTo(32.8, 20.9, 32.8, 29.1, 27.7, 34.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer8/Group
      ctx.save();

      // layer8/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Group

      // layer8/Group/Group/Group
      ctx.save();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(39.1, 43.6);
      ctx.lineTo(36.4, 40.9);
      ctx.bezierCurveTo(40.7, 36.6, 43.1, 31.0, 43.1, 24.9);
      ctx.bezierCurveTo(43.1, 18.9, 40.7, 13.2, 36.4, 8.9);
      ctx.lineTo(39.1, 6.2);
      ctx.bezierCurveTo(44.1, 11.2, 46.9, 17.9, 46.9, 24.9);
      ctx.bezierCurveTo(46.9, 32.0, 44.1, 38.6, 39.1, 43.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.4, 38.1);
      ctx.lineTo(30.7, 35.5);
      ctx.bezierCurveTo(36.8, 29.4, 36.8, 19.6, 30.7, 13.6);
      ctx.lineTo(33.4, 10.9);
      ctx.bezierCurveTo(40.9, 18.4, 40.9, 30.6, 33.4, 38.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.7, 34.2);
      ctx.lineTo(25.0, 31.5);
      ctx.bezierCurveTo(28.6, 27.9, 28.6, 22.1, 25.0, 18.5);
      ctx.lineTo(27.7, 15.8);
      ctx.bezierCurveTo(32.8, 20.9, 32.8, 29.1, 27.7, 34.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer8/Group
      ctx.save();

      // layer8/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Group

      // layer8/Group/Group/Group
      ctx.save();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(39.1, 43.6);
      ctx.lineTo(36.4, 40.9);
      ctx.bezierCurveTo(40.7, 36.6, 43.1, 31.0, 43.1, 24.9);
      ctx.bezierCurveTo(43.1, 18.9, 40.7, 13.2, 36.4, 8.9);
      ctx.lineTo(39.1, 6.2);
      ctx.bezierCurveTo(44.1, 11.2, 46.9, 17.9, 46.9, 24.9);
      ctx.bezierCurveTo(46.9, 32.0, 44.1, 38.6, 39.1, 43.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.4, 38.1);
      ctx.lineTo(30.7, 35.5);
      ctx.bezierCurveTo(36.8, 29.4, 36.8, 19.6, 30.7, 13.6);
      ctx.lineTo(33.4, 10.9);
      ctx.bezierCurveTo(40.9, 18.4, 40.9, 30.6, 33.4, 38.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.7, 34.2);
      ctx.lineTo(25.0, 31.5);
      ctx.bezierCurveTo(28.6, 27.9, 28.6, 22.1, 25.0, 18.5);
      ctx.lineTo(27.7, 15.8);
      ctx.bezierCurveTo(32.8, 20.9, 32.8, 29.1, 27.7, 34.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
// layer8/Group
      ctx.save();

      // layer8/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(11.2, 37.5);
      ctx.lineTo(1.9, 36.2);
      ctx.lineTo(1.9, 13.8);
      ctx.lineTo(11.2, 12.5);
      ctx.lineTo(11.2, 37.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(24.4, 45.6);
      ctx.lineTo(11.9, 39.4);
      ctx.lineTo(11.9, 10.6);
      ctx.lineTo(24.4, 4.4);
      ctx.lineTo(24.4, 45.6);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 0.6);
      ctx.lineTo(0.0, 0.6);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 0.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 49.4);
      ctx.lineTo(50.0, 49.4);
      ctx.lineTo(50.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(49.4, 50.0);
      ctx.lineTo(49.4, 0.0);
      ctx.lineTo(50.0, 0.0);
      ctx.lineTo(50.0, 50.0);
      ctx.lineTo(49.4, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.6, 0.0);
      ctx.lineTo(0.6, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.closePath();
      ctx.fill();

      // layer8/Group/Group

      // layer8/Group/Group/Group
      ctx.save();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(39.1, 43.6);
      ctx.lineTo(36.4, 40.9);
      ctx.bezierCurveTo(40.7, 36.6, 43.1, 31.0, 43.1, 24.9);
      ctx.bezierCurveTo(43.1, 18.9, 40.7, 13.2, 36.4, 8.9);
      ctx.lineTo(39.1, 6.2);
      ctx.bezierCurveTo(44.1, 11.2, 46.9, 17.9, 46.9, 24.9);
      ctx.bezierCurveTo(46.9, 32.0, 44.1, 38.6, 39.1, 43.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.4, 38.1);
      ctx.lineTo(30.7, 35.5);
      ctx.bezierCurveTo(36.8, 29.4, 36.8, 19.6, 30.7, 13.6);
      ctx.lineTo(33.4, 10.9);
      ctx.bezierCurveTo(40.9, 18.4, 40.9, 30.6, 33.4, 38.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer8/Group/Group/Group
      ctx.restore();

      // layer8/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.7, 34.2);
      ctx.lineTo(25.0, 31.5);
      ctx.bezierCurveTo(28.6, 27.9, 28.6, 22.1, 25.0, 18.5);
      ctx.lineTo(27.7, 15.8);
      ctx.bezierCurveTo(32.8, 20.9, 32.8, 29.1, 27.7, 34.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();
      ctx.restore();
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
