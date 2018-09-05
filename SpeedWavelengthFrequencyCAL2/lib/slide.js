/*
** This is the Slide Object 
*/
function slide(left,top,width,height){
	
this.background = document.createElement("canvas");
this.slideElement = document.createElement("canvas");
this.htmlElement = document.createElement("div");

this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;

this.label = "Volume control";
this.slidePosition=0;

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

      var gradient;

      //background/Volume control
      ctx.save();
      ctx.font = "12.0px 'Arial'";
      ctx.fillText(this.label, 12.5, 45);

var l = this.width-5;//set the ending position of the slider background

      // background/Path
      ctx.beginPath();
      ctx.moveTo(l, 22);
      ctx.bezierCurveTo(l, 24, l-1, 25, l-3, 25);
      ctx.lineTo(8, 25);
      ctx.bezierCurveTo(6.3, 25, 5, 24, 5, 22);
      ctx.lineTo(5, 7.8);
      ctx.bezierCurveTo(5, 6.2, 6.3, 5, 8, 5);
      ctx.lineTo(l-3, 5);
      ctx.bezierCurveTo(l-1, 5, l, 6.2, l, 7.8);
      ctx.lineTo(l, 22);
      ctx.closePath();
      gradient = ctx.createLinearGradient(84.8, 25, 84.8, 5);
      gradient.addColorStop(0.00, "rgb(149, 211, 218)");
      gradient.addColorStop(0.52, "rgb(255, 255, 255)");
      gradient.addColorStop(1.00, "rgb(183, 221, 229)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "rgb(34, 30, 31)";
      ctx.stroke();

      // background/Path
      ctx.beginPath();
      ctx.moveTo(l-3, 16.0);
      ctx.lineTo(7.8, 16.0);
      ctx.lineTo(7.8, 14.0);
      ctx.lineTo(l-3, 14.0);
      ctx.lineTo(l-3, 16.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.restore();
}

this.drawSlider=function(){
	var x = this.slidePosition;
	 var ctx = this.slideElement.getContext("2d");
     
     ctx.clearRect(0,0,this.width,this.height);
      // slide/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21+x, 18.5);
      ctx.bezierCurveTo(21+x, 21.6, 18+x, 24.0, 16.5+x, 24.0);
      ctx.lineTo(15.0+x, 24.0);
      ctx.bezierCurveTo(12+x, 24.0, 10.0+x, 21.6, 10.0+x, 18.5);
      ctx.lineTo(10.0+x, 11.5);
      ctx.bezierCurveTo(10.0+x, 8.4, 12+x, 6.0, 15.0+x, 6.0);
      ctx.lineTo(16.5+x, 6.0);
      ctx.bezierCurveTo(19+x, 6.0, 21+x, 8.4, 21+x, 11.5);
      ctx.lineTo(21+x, 18.5);
      ctx.closePath();
      gradient = ctx.createLinearGradient(12.0+x, 15, 23+x, 15);
      gradient.addColorStop(0.00, "rgb(127, 183, 239)");
      gradient.addColorStop(1.00, "rgb(208, 221, 229)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "rgb(34, 30, 31)";
      ctx.stroke();
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

if(c.slidePosition<0){c.slidePosition=0;}
if(c.slidePosition>this.width-32){c.slidePosition=this.width-32;}
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
//alert(e.screenX);	
c.slidePosition=e.clientX-findPos(c.htmlElement).X-10;

if(c.slidePosition<0){c.slidePosition=0;}
if(c.slidePosition>this.width-32){c.slidePosition=this.width-32;}
c.drawSlider();
}

c.slideElement.attachEvent("onmousedown",function(e){c.slideHandle = c.slideFunction;c.userFuncHandle=c.userFunction;});
c.slideElement.attachEvent("onmousemove",function(e){c.slideHandle(e);c.userFuncHandle(c.slidePosition)});
c.slideElement.attachEvent("onmouseout",function(e){c.slideHandle = null;c.userFuncHandle=null;});
c.slideElement.attachEvent("onmouseup",function(e){c.slideHandle = null;c.userFuncHandle=null;});
	
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


