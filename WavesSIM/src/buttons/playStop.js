function playStop(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 50;
this.width  = 65;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 0;

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

      // /Group
      ctx.save();

      // /Group/Group
      ctx.save();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(195, 207, 194)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(195, 207, 194)";
      ctx.fill();

      // /Path
      ctx.restore();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(17.5, 25.0);
      ctx.lineTo(17.5, 7.6);
      ctx.lineTo(47.5, 25.0);
      ctx.lineTo(17.5, 42.4);
      ctx.lineTo(17.5, 25.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");

	 ctx.save();

      // /Group/Group
      ctx.save();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(81, 81, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(81, 81, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Path
      ctx.restore();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(17.5, 25.0);
      ctx.lineTo(17.5, 7.6);
      ctx.lineTo(47.5, 25.0);
      ctx.lineTo(17.5, 42.4);
      ctx.lineTo(17.5, 25.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");

      // /Group
      ctx.save();

      // /Group/Group
      ctx.save();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(195, 207, 194)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(195, 207, 194)";
      ctx.fill();

      // /Group
      ctx.restore();
      ctx.restore();

      // /Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(29.4, 37.6);
      ctx.lineTo(22.1, 37.6);
      ctx.lineTo(22.1, 12.4);
      ctx.lineTo(29.4, 12.4);
      ctx.lineTo(29.4, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(42.9, 37.6);
      ctx.lineTo(35.6, 37.6);
      ctx.lineTo(35.6, 12.4);
      ctx.lineTo(42.9, 12.4);
      ctx.lineTo(42.9, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(29.4, 37.6);
      ctx.lineTo(22.1, 37.6);
      ctx.lineTo(22.1, 12.4);
      ctx.lineTo(29.4, 12.4);
      ctx.lineTo(29.4, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(42.9, 37.6);
      ctx.lineTo(35.6, 37.6);
      ctx.lineTo(35.6, 12.4);
      ctx.lineTo(42.9, 12.4);
      ctx.lineTo(42.9, 37.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();

}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
var ctx = this.htmlElement.getContext("2d");

      // /Group
      ctx.save();

      // /Group/Group
      ctx.save();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(81, 81, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(81, 81, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(65, 122, 81)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 173, 150)";
      ctx.fill();

      // /Group
      ctx.restore();
      ctx.restore();

      // /Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(29.4, 37.6);
      ctx.lineTo(22.1, 37.6);
      ctx.lineTo(22.1, 12.4);
      ctx.lineTo(29.4, 12.4);
      ctx.lineTo(29.4, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(42.9, 37.6);
      ctx.lineTo(35.6, 37.6);
      ctx.lineTo(35.6, 12.4);
      ctx.lineTo(42.9, 12.4);
      ctx.lineTo(42.9, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(29.4, 37.6);
      ctx.lineTo(22.1, 37.6);
      ctx.lineTo(22.1, 12.4);
      ctx.lineTo(29.4, 12.4);
      ctx.lineTo(29.4, 37.6);
      ctx.closePath();
      ctx.fill();

      // /Group/Path
      ctx.beginPath();
      ctx.moveTo(42.9, 37.6);
      ctx.lineTo(35.6, 37.6);
      ctx.lineTo(35.6, 12.4);
      ctx.lineTo(42.9, 12.4);
      ctx.lineTo(42.9, 37.6);
      ctx.closePath();
      ctx.fill();
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
	c.up_stoped_LF();
	}
	else{
	c.up_running_LF();	
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
	c.up_stoped_LF();
	}
	else{
	c.up_running_LF();	
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
	c.up_stoped_LF();
	}
	else{
	c.up_running_LF();	
	}
	
});

	
}
/*========================================================================================================*/


//call all the function to make this button visable
this.build();
this.up_stoped_LF();
//bind events for this function
this.CreateButtonEvents(this);

}
