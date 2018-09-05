/*
** This is the Slide Object 
*/
function zoomSlide(left,top,width,height){
	
this.background = document.createElement("canvas");
this.slideElement = document.createElement("canvas");
this.htmlElement = document.createElement("div");

this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;

this.label = "Volume control";
this.slidePosition=26;

/*========================================================================================================*/
this.build = function(){
	
this.htmlElement.appendChild(this.background);
this.htmlElement.appendChild(this.slideElement);
	
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.width = this.width+"px";
this.htmlElement.style.height = this.height+"px";
this.htmlElement.style.zIndex = "500";	
//this.htmlElement.style.backgroundColor = "#cccccc";


this.background.setAttribute("width",this.width);
this.background.setAttribute("height",this.height);
this.background.style.position = "absolute";
this.background.style.top =  "0px";
this.background.style.left = "0px";
//this.background.style.backgroundColor = "#FFcccc";

this.slideElement.setAttribute("width",this.width);
this.slideElement.setAttribute("height",this.height);
this.slideElement.style.position = "absolute";
this.slideElement.style.top =  "0px";
this.slideElement.style.left = "0px";
//this.slideElement.style.backgroundColor = "#FF0000";
}
/*========================================================================================================*/
this.drawBackground = function(){
var ctx = this.background.getContext("2d");


var alpha = ctx.globalAlpha;



      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.0, 27.0);
      ctx.bezierCurveTo(21.0, 28.7, 19.7, 30.0, 18.0, 30.0);
      ctx.lineTo(4.0, 30.0);
      ctx.bezierCurveTo(2.3, 30.0, 1.0, 28.7, 1.0, 27.0);
      ctx.lineTo(1.0, 13.0);
      ctx.bezierCurveTo(1.0, 11.3, 2.3, 10.0, 4.0, 10.0);
      ctx.lineTo(18.0, 10.0);
      ctx.bezierCurveTo(19.7, 10.0, 21.0, 11.3, 21.0, 13.0);
      ctx.lineTo(21.0, 27.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(158, 166, 163)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(10.0, 28.0);
      ctx.lineTo(10.0, 12.0);
      ctx.lineTo(12.0, 12.0);
      ctx.lineTo(12.0, 28.0);
      ctx.lineTo(10.0, 28.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
//-----------------------------------------------------
var l = this.width-50;

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(24.0, 23.0);
      ctx.lineTo(24.0, 17.0);
      ctx.lineTo(l+24.0, 17.0);
      ctx.lineTo(l+24.0, 23.0);
      ctx.lineTo(24.0, 23.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(158, 166, 163)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(l+23.0, 21.0);
      ctx.lineTo(25.0, 21.0);
      ctx.lineTo(25.0, 19.0);
      ctx.lineTo(l+23.0, 19.0);
      ctx.lineTo(l+23.0, 21.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

//---------------------------------------------------------------------------------
var L = 120;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(147.0, 27.0);
      ctx.bezierCurveTo(147.0, 28.7, 145.7, 30.0, 144.0, 30.0);
      ctx.lineTo(130.0, 30.0);
      ctx.bezierCurveTo(128.3, 30.0, 127.0, 28.7, 127.0, 27.0);
      ctx.lineTo(127.0, 13.0);
      ctx.bezierCurveTo(127.0, 11.3, 128.3, 10.0, 130.0, 10.0);
      ctx.lineTo(144.0, 10.0);
      ctx.bezierCurveTo(145.7, 10.0, 147.0, 11.3, 147.0, 13.0);
      ctx.lineTo(147.0, 27.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(158, 166, 163)";
      ctx.fill();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(136.0, 28.0);
      ctx.lineTo(136.0, 12.0);
      ctx.lineTo(138.0, 12.0);
      ctx.lineTo(138.0, 28.0);
      ctx.lineTo(136.0, 28.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(129.0, 19.0);
      ctx.lineTo(145.0, 19.0);
      ctx.lineTo(145.0, 21.0);
      ctx.lineTo(129.0, 21.0);
      ctx.lineTo(129.0, 19.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}

this.drawSlider=function(){
	var x = this.slidePosition;
	var y = 9;
	 var ctx = this.slideElement.getContext("2d");
     
     ctx.clearRect(0,0,this.width,this.height);
      // slide/Path
      // layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+8.0, y+20.0);
      ctx.bezierCurveTo(x+8.0, y+21.1, x+7.1, y+22.0, x+6.0, y+22.0);
      ctx.lineTo(x+2.0, y+22.0);
      ctx.bezierCurveTo(x+0.9, y+22.0, x+0.0, y+21.1, x+0.0, y+20.0);
      ctx.lineTo(x+0.0, y+2.0);
      ctx.bezierCurveTo(x+0.0, y+0.9, x+0.9, y+0.0, x+2.0, y+0.0);
      ctx.lineTo(x+6.0, y+0.0);
      ctx.bezierCurveTo(x+7.1, y+0.0, x+8.0, y+0.9, x+8.0, y+2.0);
      ctx.lineTo(x+8.0, y+20.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
	
}
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

c.slideHandle = null;
c.slideFunction = function(e){
c.slidePosition=e.pageX-findPos(c.htmlElement).X-10;

if(c.slidePosition<25){c.slidePosition=25;}
if(c.slidePosition>this.width-35){c.slidePosition=this.width-35;}
c.drawSlider();
}

c.slideElement.addEventListener("mousedown",function(e){c.slideHandle = c.slideFunction;c.userFuncHandle=c.userFunction;});
c.slideElement.addEventListener("mousemove",function(e){c.slideHandle(e);c.userFuncHandle(c.slidePosition)});
c.slideElement.addEventListener("mouseout",function(e){c.slideHandle = null;c.userFuncHandle=null;});
c.slideElement.addEventListener("mouseup",function(e){c.slideHandle = null;c.userFuncHandle=null;});

}
/*========================================================================================================*/
this.touchScreenEvents=function(c){

this.htmlElement.addEventListener("touchmove",function(e){
e.preventDefault();	
c.slidePosition=e.changedTouches[0].pageX-findPos(c.htmlElement).X-10;

if(c.slidePosition<0){c.slidePosition=0;}
if(c.slidePosition>c.width-32){c.slidePosition=c.width-32;}
c.drawSlider();
c.userFunction(c.slidePosition);

});

}
/*========================================================================================================*/
this.ieEvents=function(c){

c.slideHandle = null;
c.slideFunction = function(e){
c.slidePosition=e.pageX-findPos(c.htmlElement).X-10;

if(c.slidePosition<0){c.slidePosition=0;}
if(c.slidePosition>this.width-32){c.slidePosition=this.width-32;}
c.drawSlider();
}

c.slideElement.attachEvent("mousedown",function(e){c.slideHandle = c.slideFunction;c.userFuncHandle=c.userFunction;});
c.slideElement.attachEvent("mousemove",function(e){c.slideHandle(e);c.userFuncHandle(c.slidePosition)});
c.slideElement.attachEvent("mouseout",function(e){c.slideHandle = null;c.userFuncHandle=null;});
c.slideElement.attachEvent("mouseup",function(e){c.slideHandle = null;c.userFuncHandle=null;});
	
}
/*========================================================================================================*/
this.userFuncHandle=null;//used to bind and unbind the user function in desktop and IE events
this.userFunction=function(){}

/*========================================================================================================*/
this.bind=function(evnt,fctn){

if(evnt=="slide"){this.userFunction=fctn;}

}
/*========================================================================================================*/
function findPos(obj){
var curleft = 0;
var curtop = 0;

if (obj.offsetParent) {
    do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
       } while (obj = obj.offsetParent);

    return {X:curleft,Y:curtop};
}
}



this.build();
this.drawBackground();
this.drawSlider();

this.CreateButtonEvents();
//this.desktopEvents(this);
//this.touchScreenEvents(this);


}


