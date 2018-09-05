function scaleControl(){

this.htmlElement = document.createElement("div");

this.upKey = document.createElement("canvas");
this.dnKey = document.createElement("canvas");

this.top    = 30;
this.left   = 650;

/*==================================================================================*/
this.build = function(){

this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.backgroundColor = "#FF9999";
this.htmlElement.style.zIndex = "500";

this.upKey.setAttribute("width","50");
this.upKey.setAttribute("height","50");
this.upKey.style.position = "absolute";
this.upKey.style.top = "0px";
this.upKey.style.left = "0px";
//this.upKey.style.backgroundColor = "#CCCCCC";
this.htmlElement.appendChild(this.upKey);

this.dnKey.setAttribute("width","50");
this.dnKey.setAttribute("height","50");
this.dnKey.style.position = "absolute";
this.dnKey.style.top = "0px";
this.dnKey.style.left = "70px";
//this.dnKey.style.backgroundColor = "#CCCCCC";
this.htmlElement.appendChild(this.dnKey);

}
/*==================================================================================*/
this.draw = function(){

var ctx = this.upKey.getContext("2d");

	  ctx.save();
      ctx.beginPath();
      ctx.moveTo(50.0, 1.0);
      ctx.lineTo(50.0, 49.0);
      ctx.lineTo(15.0, 25.0);
      ctx.lineTo(50.0, 1.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

var ctx = this.dnKey.getContext("2d");

	  ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.5, 49.0);
      ctx.lineTo(0.5, 1.0);
      ctx.lineTo(35.5, 25.0);
      ctx.lineTo(0.5, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

}
/*==================================================================================*/
this.upFunction = function(){}
this.downFunction = function(){}
/*==================================================================================*/
this.bind=function(evnt,fctn){

    if(evnt=="up"){this.upFunction=fctn;}
    if(evnt=="down"){this.downFunction=fctn;}
}
/*==================================================================================*/
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.dnKey.addEventListener("mousedown",function(e){c.upFunction(e);});
this.upKey.addEventListener("mouseup",function(e){c.downFunction(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.dnKey.attachEvent('onmousedown',function(e){c.upFunction(e);});
this.upKey.attachEvent('onmouseup',function(e){c.downFunction(e);});
}

//this is the ios events
if(window.platformFlag=="IOS" || window.platformFlag=="AND"){
this.dnKey.addEventListener('touchstart',function(e){c.upFunction(e);});
this.upKey.addEventListener('touchend',function(e){c.downFunction(e);});
}


}
/*==================================================================================*/


this.build();
this.draw();
this.CreateButtonEvents(this);

}
