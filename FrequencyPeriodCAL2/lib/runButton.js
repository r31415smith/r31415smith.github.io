function runButton(left,top){

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
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(30, 103, 85)";

      ctx.save();
      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.runButtonString,38, 29.0);
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(90, 90, 90)";
var color3 = "rgb(130, 130, 130)";


var color4 = "rgb(30, 103, 85)";

      ctx.save();

      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.runButtonString,38, 29.0);
      ctx.restore();     

}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 223, 255)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(0, 155, 125)";


      ctx.save();

      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.runButtonString,38, 29.0);
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(30, 103, 85)";

      ctx.save();
      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.runButtonString,38, 29.0);
      ctx.restore();
}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(220, 80, 100)";
      ctx.save();
      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.stopButtonString,38, 29.0);
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(90, 90, 90)";
var color3 = "rgb(130, 130, 130)";


var color4 = "rgb(220, 103, 80)";

      ctx.save();

      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
     ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.stopButtonString,38, 29.0);
      ctx.restore();      

}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 223, 255)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(245, 115, 125)";


      ctx.save();

      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.stopButtonString,38, 29.0);
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
var color1 = "rgb(145, 207, 235)";
var color2 = "rgb(130, 130, 130)";
var color3 = "rgb(240, 240, 240)";
var color4 = "rgb(220, 80, 100)";

      ctx.save();
      ctx.fillStyle = color1;//background color
      ctx.fillRect(4.0,4.0,70.0,36.0);
      ctx.fill();

      //button Left Side
      ctx.beginPath();
      ctx.moveTo(10.4, 32.9);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(10.4, 32.9);
      ctx.closePath();
      gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
      gradient.addColorStop(0.00, color2);//outside color on LHS
      gradient.addColorStop(1.00, color1);//inside color on LHS
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(67.8, 11.3);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();

      //Lower Side of the button
      ctx.beginPath();
      ctx.moveTo(74.2, 40.1);
      ctx.lineTo(4.0, 40.1);
      ctx.lineTo(10.4, 32.9);
      ctx.lineTo(67.8, 32.9);
      ctx.lineTo(74.2, 40.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
      gradient.addColorStop(0.00, color2);//outside color of the gradient
      gradient.addColorStop(1.00, color1);//inside color of the gradient
      ctx.fillStyle = gradient;
      ctx.fill();

      // run/Group/Path
      ctx.beginPath();
      ctx.moveTo(67.8, 11.3);
      ctx.lineTo(10.4, 11.3);
      ctx.lineTo(4.0, 4.1);
      ctx.lineTo(74.2, 4.1);
      ctx.lineTo(67.8, 11.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
      gradient.addColorStop(0.00, color3);
      gradient.addColorStop(1.00, color1);
      ctx.fillStyle = gradient;
      ctx.fill();
      // run/Run
      ctx.restore();
      ctx.save;
      ctx.font = "Bold 20.0px 'Arial'";
      ctx.fillStyle = color4;
      ctx.textAlign = 'center';
      ctx.fillText(this.stopButtonString,38, 29.0);
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
