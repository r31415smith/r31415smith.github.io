function toggle(left,top){


//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 60;
this.width  = 80;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 1;
this.string = "String"

/*========================================================================================================*/
//set all the atributes for this html_Element
this.build = function(){
	
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#999999";

}

this.runFunction = function(e){};
/*========================================================================================================*/
this.stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
	ctx.clearRect(0,0,60,80);
	
	
	var alpha = ctx.globalAlpha;
      var gradient;

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(26.7, 13.0);
      ctx.bezierCurveTo(26.7, 6.1, 21.1, 0.5, 14.2, 0.5);
      ctx.bezierCurveTo(7.3, 0.5, 1.7, 6.1, 1.7, 13.0);
      ctx.bezierCurveTo(1.7, 19.9, 7.3, 25.5, 14.2, 25.5);
      ctx.bezierCurveTo(21.1, 25.5, 26.7, 19.9, 26.7, 13.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(2.9, 7.7, 25.6, 18.3);
      gradient.addColorStop(0.00, "rgb(211, 255, 244)");
      gradient.addColorStop(0.67, "rgb(105, 187, 143)");
      gradient.addColorStop(1.00, "rgb(0, 119, 42)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer1/Group/Path
      ctx.globalAlpha = alpha * 0.24;
      ctx.beginPath();
      ctx.moveTo(8.7, 13.4);
      ctx.bezierCurveTo(8.7, 13.4, 10.8, 6.7, 15.3, 6.7);
      ctx.bezierCurveTo(18.0, 6.7, 16.6, 4.0, 14.8, 3.1);
      ctx.bezierCurveTo(13.7, 2.5, 12.2, 2.4, 12.2, 2.4);
      ctx.bezierCurveTo(12.2, 2.4, 4.7, 2.0, 4.7, 11.2);
      ctx.bezierCurveTo(4.7, 20.5, 8.7, 13.4, 8.7, 13.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Group/Path
      ctx.globalAlpha = alpha * 0.35;
      ctx.beginPath();
      ctx.moveTo(10.1, 7.8);
      ctx.bezierCurveTo(10.1, 7.8, 13.4, 6.3, 15.3, 5.9);
      ctx.bezierCurveTo(16.6, 5.6, 14.1, 3.4, 14.1, 3.4);
      ctx.bezierCurveTo(14.1, 3.4, 10.0, 1.0, 6.7, 6.3);
      ctx.bezierCurveTo(3.2, 12.0, 10.1, 7.8, 10.1, 7.8);
      ctx.closePath();
      ctx.fill();

      // layer1/String
      ctx.restore();
      ctx.font = "16.0px 'Myriad Pro'";
      ctx.fillText(this.string, 0.0, 46.4);
      ctx.restore();
}
/*========================================================================================================*/
this.running_LF=function(){
      var ctx = this.htmlElement.getContext("2d");
	  ctx.clearRect(0,0,60,80);
      
      var alpha = ctx.globalAlpha;

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(26.7, 13.0);
      ctx.bezierCurveTo(26.7, 6.1, 21.1, 0.5, 14.2, 0.5);
      ctx.bezierCurveTo(7.3, 0.5, 1.7, 6.1, 1.7, 13.0);
      ctx.bezierCurveTo(1.7, 19.9, 7.3, 25.5, 14.2, 25.5);
      ctx.bezierCurveTo(21.1, 25.5, 26.7, 19.9, 26.7, 13.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(126, 126, 126)";
      ctx.fill();
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // layer1/Group/Path
      ctx.globalAlpha = alpha * 0.35;
      ctx.beginPath();
      ctx.moveTo(10.1, 7.8);
      ctx.bezierCurveTo(10.1, 7.8, 13.4, 6.3, 15.3, 5.9);
      ctx.bezierCurveTo(16.6, 5.6, 14.1, 3.4, 14.1, 3.4);
      ctx.bezierCurveTo(14.1, 3.4, 10.0, 1.0, 6.7, 6.3);
      ctx.bezierCurveTo(3.2, 12.0, 10.1, 7.8, 10.1, 7.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/String
      ctx.restore();
      ctx.font = "16.0px 'Myriad Pro'";
      ctx.fillStyle = "rgb(126, 126, 126)";
      ctx.fillText(this.string, 0.0, 46.4);
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
	if(c.running!=0){
	c.stoped_LF();
	c.running=0;
	c.stop(c);	
	}
});


}
/*========================================================================================================*/
this.touchScreenEvents=function(c){

this.htmlElement.addEventListener("touchstart",function(e){
	if(c.running!=0){
	c.stoped_LF();
	c.running=0;
	c.stop(c);	
	}
});


}
/*========================================================================================================*/
this.ieEvents=function(c){

this.htmlElement.attachEvent("mousedown",function(e){
	if(c.running!=0){
	c.stoped_LF();
	c.running=0;
	c.stop(c);	
	}
});

	
}
/*========================================================================================================*/


//call all the function to make this button visable
this.build();
this.running_LF();
//bind events for this function
this.CreateButtonEvents(this);
	
}
