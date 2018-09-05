function blackKey(left,top,ind,str){
	
this.canvas = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 92;
this.width  = 47;

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
this.canvas.style.zIndex = "1000";
	
}
/*========================================================================================================*/
this.drawKeyUp = function(){
var ctx = this.canvas.getContext("2d");

// layer2/Group
      ctx.save();

      // layer2/Group/Group
      ctx.save();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(47.0, 92.0);
      ctx.lineTo(0.0, 92.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(47.0, 0.0);
      ctx.lineTo(47.0, 92.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(33, 33, 33)";
      ctx.fill();

      // layer2/Group/Group/Group

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(46.0, 1.0);
      ctx.lineTo(44.0, 3.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(84, 84, 85)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(3.0, 89.0);
      ctx.lineTo(1.0, 91.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 89.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(51, 51, 51)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(46.0, 91.0);
      ctx.lineTo(44.0, 89.0);
      ctx.lineTo(44.0, 3.0);
      ctx.lineTo(46.0, 1.0);
      ctx.lineTo(46.0, 91.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(119, 119, 119)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(46.0, 91.0);
      ctx.lineTo(1.0, 91.0);
      ctx.lineTo(3.0, 89.0);
      ctx.lineTo(44.0, 89.0);
      ctx.lineTo(46.0, 91.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(119, 119, 119)";
      ctx.fill();

      // layer2/Group/C
      ctx.restore();
      ctx.restore();
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 15.2, 33.0);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText(this.str, 0, 0);
      ctx.restore();
      ctx.font = "18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 28.5, 25.4);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText("#", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();

}
/*========================================================================================================*/
this.drawKeyDown = function(){
var ctx = this.canvas.getContext("2d");

var alpha = ctx.globalAlpha;

      // layer2/Group
      ctx.save();

      // layer2/Group/Group
      ctx.save();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(47.0, 92.0);
      ctx.lineTo(0.0, 92.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(47.0, 0.0);
      ctx.lineTo(47.0, 92.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(33, 33, 33)";
      ctx.fill();

      // layer2/Group/Group/Group

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(46.0, 1.0);
      ctx.lineTo(44.0, 3.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(84, 84, 85)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(3.0, 89.0);
      ctx.lineTo(1.0, 91.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 89.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(51, 51, 51)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(46.0, 91.0);
      ctx.lineTo(44.0, 89.0);
      ctx.lineTo(44.0, 3.0);
      ctx.lineTo(46.0, 1.0);
      ctx.lineTo(46.0, 91.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(119, 119, 119)";
      ctx.fill();

      // layer2/Group/Group/Group
      ctx.restore();

      // layer2/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(46.0, 91.0);
      ctx.lineTo(1.0, 91.0);
      ctx.lineTo(3.0, 89.0);
      ctx.lineTo(44.0, 89.0);
      ctx.lineTo(46.0, 91.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(119, 119, 119)";
      ctx.fill();

      // layer2/Group/C
      ctx.restore();
      ctx.restore();
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 15.2, 33.0);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText(this.str, 0, 0);
      ctx.restore();
      ctx.font = "18.0px 'Arial'";
      ctx.save();
      ctx.transform(1.029, 0.000, 0.000, 1.000, 28.5, 25.4);
      ctx.fillStyle = "rgb(135, 134, 134)";
      ctx.fillText("#", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // layer7/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.46;
      ctx.beginPath();
      ctx.moveTo(47.0, 92.0);
      ctx.lineTo(0.0, 92.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(47.0, 0.0);
      ctx.lineTo(47.0, 92.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(150, 152, 219)";
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