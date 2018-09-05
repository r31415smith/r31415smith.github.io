function whiteKeyCenter(left,top,ind,str){
	
this.canvas = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 150;
this.width  = 60;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;


this.ind = ind;
this.str = str;

this.down_flag = 0;

/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
this.canvas.setAttribute("width",this.width);
this.canvas.setAttribute("height",this.height);
this.canvas.style.position = "absolute";
this.canvas.style.top = this.top+"px";
this.canvas.style.left = this.left+"px";
//this.canvas.style.backgroundColor = "#FF0000";
this.canvas.style.zIndex = "500";
	
}
/*========================================================================================================*/
this.drawKeyUp = function(){
var ctx = this.canvas.getContext("2d");

// layer3/Group
      ctx.save();

      // layer3/Group/Group
      ctx.save();

      // layer3/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.0, 150.0);
      ctx.lineTo(60.0, 150.0);
      ctx.lineTo(60.0, 93.0);
      ctx.lineTo(36.0, 93.0);
      ctx.lineTo(36.0, 0.0);
      ctx.lineTo(24.0, 0.0);
      ctx.lineTo(24.0, 93.0);
      ctx.lineTo(0.0, 93.0);
      ctx.lineTo(0.0, 150.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(25.0, 94.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(238, 236, 236)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(3.0, 96.0);
      ctx.lineTo(27.0, 96.0);
      ctx.lineTo(25.0, 94.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(3.0, 96.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(220, 220, 219)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(33.0, 96.0);
      ctx.lineTo(57.0, 96.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(33.0, 96.0);
      ctx.closePath();
      ctx.fill();

      // layer3/Group/Group/Group

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(57.0, 147.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(57.0, 96.0);
      ctx.lineTo(57.0, 147.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.0, 96.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(33.0, 3.0);
      ctx.lineTo(33.0, 96.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(25.0, 94.0);
      ctx.lineTo(27.0, 96.0);
      ctx.lineTo(27.0, 3.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(25.0, 94.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(186, 186, 185)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(3.0, 147.0);
      ctx.lineTo(3.0, 96.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(186, 186, 185)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(57.0, 147.0);
      ctx.lineTo(3.0, 147.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.0, 3.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(33.0, 3.0);
      ctx.lineTo(27.0, 3.0);
      ctx.closePath();
      ctx.fill();

      // layer3/Group/D
      ctx.restore();
      ctx.restore();
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 26.1, 138.0);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText(this.str, 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
	
}
/*========================================================================================================*/
this.drawKeyDown = function(){
var ctx = this.canvas.getContext("2d");

	var alpha = ctx.globalAlpha;

      // layer3/Group
      ctx.save();

      // layer3/Group/Group
      ctx.save();

      // layer3/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.0, 150.0);
      ctx.lineTo(60.0, 150.0);
      ctx.lineTo(60.0, 93.0);
      ctx.lineTo(36.0, 93.0);
      ctx.lineTo(36.0, 0.0);
      ctx.lineTo(24.0, 0.0);
      ctx.lineTo(24.0, 93.0);
      ctx.lineTo(0.0, 93.0);
      ctx.lineTo(0.0, 150.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(25.0, 94.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(238, 236, 236)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(3.0, 96.0);
      ctx.lineTo(27.0, 96.0);
      ctx.lineTo(25.0, 94.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(3.0, 96.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(220, 220, 219)";
      ctx.fill();

      // layer3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(33.0, 96.0);
      ctx.lineTo(57.0, 96.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(33.0, 96.0);
      ctx.closePath();
      ctx.fill();

      // layer3/Group/Group/Group

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(57.0, 147.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(59.0, 94.0);
      ctx.lineTo(57.0, 96.0);
      ctx.lineTo(57.0, 147.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.0, 96.0);
      ctx.lineTo(35.0, 94.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(33.0, 3.0);
      ctx.lineTo(33.0, 96.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(25.0, 94.0);
      ctx.lineTo(27.0, 96.0);
      ctx.lineTo(27.0, 3.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(25.0, 94.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(186, 186, 185)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(3.0, 147.0);
      ctx.lineTo(3.0, 96.0);
      ctx.lineTo(1.0, 94.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(186, 186, 185)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1.0, 149.0);
      ctx.lineTo(59.0, 149.0);
      ctx.lineTo(57.0, 147.0);
      ctx.lineTo(3.0, 147.0);
      ctx.lineTo(1.0, 149.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(27.0, 3.0);
      ctx.lineTo(25.0, 1.0);
      ctx.lineTo(35.0, 1.0);
      ctx.lineTo(33.0, 3.0);
      ctx.lineTo(27.0, 3.0);
      ctx.closePath();
      ctx.fill();

      // layer3/Group/D
      ctx.restore();
      ctx.restore();
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 26.1, 138.0);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText(this.str, 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // layer6/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.46;
      ctx.beginPath();
      ctx.moveTo(0.0, 150.0);
      ctx.lineTo(60.0, 150.0);
      ctx.lineTo(60.0, 93.0);
      ctx.lineTo(36.0, 93.0);
      ctx.lineTo(36.0, 0.0);
      ctx.lineTo(24.0, 0.0);
      ctx.lineTo(24.0, 93.0);
      ctx.lineTo(0.0, 93.0);
      ctx.lineTo(0.0, 150.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(67, 152, 191)";
      ctx.fill();
      ctx.restore();
}
/*========================================================================================================*/
/*========================================================================================================*/
this.userFunction = function(f){}
this.bind = function(fnct){
this.userFunction = fnct;
}
/*========================================================================================================*/
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.canvas.addEventListener("mousedown",function(e){c.userFunction(c.ind);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.canvas.attachEvent('onmousedown',function(e){c.userFunction(c.ind);});
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.canvas.addEventListener('touchstart',function(e){c.userFunction(c.ind);});
}
//this is the android events
if(window.platformFlag=="AND"){
this.canvas.addEventListener("touchstart",function(e){c.userFunction(c.ind);});
}


}
/*========================================================================================================*/
this.build();
this.drawKeyUp();
this.CreateButtonEvents(this);

}