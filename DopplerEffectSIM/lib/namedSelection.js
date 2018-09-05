function namedSelection(left,top,name){


//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 35;
this.width  = 100;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 0;

this.name = name;

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
//this.htmlElement.style.backgroundColor = "#9999CC";
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
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(206, 228, 173)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(176, 198, 139)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------   
}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(206, 228, 173)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(206, 228, 173)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(255, 224, 224)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(224, 160, 160)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(255, 224, 224)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
  var ctx = this.htmlElement.getContext("2d");
//-------------------------------------------------- 
  ctx.save();
      ctx.beginPath();
      ctx.moveTo(99.4, 26.5);
      ctx.bezierCurveTo(99.4, 29.2, 97.2, 31.5, 94.5, 31.5);
      ctx.lineTo(6.3, 31.5);
      ctx.bezierCurveTo(3.6, 31.5, 1.4, 29.2, 1.4, 26.5);
      ctx.lineTo(1.4, 13.5);
      ctx.bezierCurveTo(1.4, 10.8, 3.6, 8.5, 6.3, 8.5);
      ctx.lineTo(94.5, 8.5);
      ctx.bezierCurveTo(97.2, 8.5, 99.4, 10.8, 99.4, 13.5);
      ctx.lineTo(99.4, 26.5);
      ctx.closePath();
  ctx.fillStyle = "rgb(255, 224, 224)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.stroke();
//--------------------------------------------------
  ctx.font = "18.0px 'Arial'";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.textAlign = 'center';
  ctx.fillText(this.name, 50, 24.5);
  ctx.restore();
  ctx.restore();
//--------------------------------------------------
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
