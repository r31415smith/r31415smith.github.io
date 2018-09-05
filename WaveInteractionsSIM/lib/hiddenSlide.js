function hiddenSlide(left,top,width,height){
	
this.htmlElement = document.createElement("canvas");

this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;


this.xPosition=0;
this.yPosition=0;
/*========================================================================================================*/
this.build = function(){
	
	
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.width = this.width+"px";
this.htmlElement.style.height = this.height+"px";
this.htmlElement.style.zIndex = "500";	
//this.htmlElement.style.backgroundColor = "#cccccc";

}
/*========================================================================================================*/
this.CreateButtonEvents=function(c){

c.slideHandle = null;
c.slideFunction = function(e){
c.xPosition=e.pageX-findPos(c.htmlElement).X;
c.yPosition=e.pageY-findPos(c.htmlElement).Y;
}

c.htmlElement.addEventListener("mousedown",function(e){
	c.slideHandle = c.slideFunction;
	c.userSlideFuncHandle=c.userSlideFunction;
});

c.htmlElement.addEventListener("mousemove",function(e){
	c.slideHandle(e);
	c.userSlideFuncHandle(c.xPosition,c.yPosition);
});

c.htmlElement.addEventListener("mouseout",function(e){
	c.userOutFunction();
	c.slideHandle = null;
	c.userSlideFuncHandle=null;
});

c.htmlElement.addEventListener("mouseup",function(e){
	c.userUpFunction();
	c.slideHandle = null;
	c.userSlideFuncHandle=null;
});

}
/*========================================================================================================*/
this.userSlideFuncHandle=null;//used to bind and unbind the user function in desktop and IE events
this.userSlideFunction=function(){}
this.userUpFunction=function(){}
this.userDownFunction=function(){}
this.userOutFunction=function(){}
/*========================================================================================================*/
this.bind=function(evnt,fctn){

if(evnt=="slide"){this.userSlideFunction=fctn;}
if(evnt=="mouseup"){this.userUpFunction=fctn;this.userOutFunction=fctn;}
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


this.CreateButtonEvents(this);
//this.desktopEvents(this);
//this.touchScreenEvents(this);

}
