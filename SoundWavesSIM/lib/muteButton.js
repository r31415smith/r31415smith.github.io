function muteButton(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 60;
this.width  = 60;

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
//this.htmlElement.style.backgroundColor = "#CCCCCC";
}
/*========================================================================================================*/
//blank functions that will be asigned new functions with the use of the bind method
this.downFunction = function(e){};
this.upfunction   = function(e){};
this.overFunction = function(e){};
this.outFunction  = function(e){};

this.runFunction = function(e){};
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.stoped_LF=function(){
var ctx = this.htmlElement.getContext("2d");
ctx.clearRect(0,0,60,60);
var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(60.0, 60.0);
      ctx.lineTo(0.0, 60.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(16.2, 42.5);
      ctx.lineTo(6.9, 41.2);
      ctx.lineTo(6.9, 18.8);
      ctx.lineTo(16.2, 17.5);
      ctx.lineTo(16.2, 42.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(29.4, 50.6);
      ctx.lineTo(16.9, 44.4);
      ctx.lineTo(16.9, 15.6);
      ctx.lineTo(29.4, 9.4);
      ctx.lineTo(29.4, 50.6);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Group

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(33.6, 40.6);
      ctx.lineTo(31.9, 38.9);
      ctx.lineTo(51.3, 19.4);
      ctx.lineTo(53.1, 21.2);
      ctx.lineTo(33.6, 40.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 50, 50)";
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(53.1, 38.9);
      ctx.lineTo(51.3, 40.6);
      ctx.lineTo(31.9, 21.2);
      ctx.lineTo(33.6, 19.4);
      ctx.lineTo(53.1, 38.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.running_LF=function(){
var ctx = this.htmlElement.getContext("2d");
ctx.clearRect(0,0,60,60);
var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(60.0, 60.0);
      ctx.lineTo(0.0, 60.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();

      // layer3/Group
      ctx.save();

      // layer3/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(16.2, 42.5);
      ctx.lineTo(6.9, 41.2);
      ctx.lineTo(6.9, 18.8);
      ctx.lineTo(16.2, 17.5);
      ctx.lineTo(16.2, 42.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 203, 255)";
      ctx.fill();

      // layer3/Group/Path
      ctx.beginPath();
      ctx.moveTo(29.4, 50.6);
      ctx.lineTo(16.9, 44.4);
      ctx.lineTo(16.9, 15.6);
      ctx.lineTo(29.4, 9.4);
      ctx.lineTo(29.4, 50.6);
      ctx.closePath();
      ctx.fill();

      // layer3/Group/Group

      // layer3/Group/Group/Group
      ctx.save();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(44.1, 48.6);
      ctx.lineTo(41.4, 45.9);
      ctx.bezierCurveTo(45.7, 41.6, 48.1, 36.0, 48.1, 29.9);
      ctx.bezierCurveTo(48.1, 23.9, 45.7, 18.2, 41.4, 13.9);
      ctx.lineTo(44.1, 11.2);
      ctx.bezierCurveTo(49.1, 16.2, 51.9, 22.9, 51.9, 29.9);
      ctx.bezierCurveTo(51.9, 37.0, 49.1, 43.6, 44.1, 48.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(38.4, 43.1);
      ctx.lineTo(35.7, 40.5);
      ctx.bezierCurveTo(41.8, 34.4, 41.8, 24.6, 35.7, 18.6);
      ctx.lineTo(38.4, 15.9);
      ctx.bezierCurveTo(45.9, 23.4, 45.9, 35.6, 38.4, 43.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 152)";
      ctx.fill();

      // layer3/Group/Group/Group
      ctx.restore();

      // layer3/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(32.7, 39.2);
      ctx.lineTo(30.0, 36.5);
      ctx.bezierCurveTo(33.6, 32.9, 33.6, 27.1, 30.0, 23.5);
      ctx.lineTo(32.7, 20.8);
      ctx.bezierCurveTo(37.8, 25.9, 37.8, 34.1, 32.7, 39.2);
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
	c.running_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.stoped_LF();
	c.running=0;
	c.stop(c);
	}
});


}
/*========================================================================================================*/
this.touchScreenEvents=function(c){

this.htmlElement.addEventListener("touchstart",function(e){
	if(c.running==0){
	c.running_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.stoped_LF();
	c.running=0;
	c.stop(c);
	}
});


}
/*========================================================================================================*/
this.ieEvents=function(c){

this.htmlElement.attachEvent("mousedown",function(e){
	if(c.running==0){
	c.running_LF();
	c.running=1;
	c.run(c);
	}
	else{
	c.stoped_LF();
	c.running=0;
	c.stop(c);
	}
});

	
}
/*========================================================================================================*/


//call all the function to make this button visable
this.build();
this.stoped_LF();
//bind events for this function
this.CreateButtonEvents(this);	
	
	
	
	
}
