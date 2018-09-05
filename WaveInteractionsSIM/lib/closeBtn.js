/*
** general purpose button. 
** 
*/
function closeBtn(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 45;
this.width  = 45;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.buttonString="";
/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "300";
//this.htmlElement.style.backgroundColor = "#CC99CC";	
}
/*========================================================================================================*/

/*========================================================================================================*/
//blank functions that will be asigned new functions with the use of the bind method
this.downFunction = function(e){};
this.upfunction   = function(e){};
this.overFunction = function(e){};
this.outFunction  = function(e){};
/*========================================================================================================*/
this.hideButton=function(){this.htmlElement.style.display="none";}
this.showButton=function(){this.htmlElement.style.display="inherit";}
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
 var alpha = ctx.globalAlpha;

      // layer1/Group
      ctx.save();
	ctx.translate(-40,0);
      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(85.0, 27.6);
      ctx.lineTo(57.9, 27.6);
      ctx.lineTo(57.9, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 27.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(66.7, 23.6);
      ctx.lineTo(61.9, 18.8);
      ctx.lineTo(76.2, 4.5);
      ctx.lineTo(81.0, 9.2);
      ctx.lineTo(66.7, 23.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(123, 123, 123)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(61.9, 9.2);
      ctx.lineTo(66.7, 4.5);
      ctx.lineTo(81.0, 18.8);
      ctx.lineTo(76.2, 23.6);
      ctx.lineTo(61.9, 9.2);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.restore();
      ctx.restore();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(85.0, 45.5);
      ctx.lineTo(0.0, 45.5);
      ctx.lineTo(0.0, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 45.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
var alpha = ctx.globalAlpha;

      // layer1/Group
      ctx.save();
ctx.translate(-40,0);
      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(85.0, 27.6);
      ctx.lineTo(57.9, 27.6);
      ctx.lineTo(57.9, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 27.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(66.7, 23.6);
      ctx.lineTo(61.9, 18.8);
      ctx.lineTo(76.2, 4.5);
      ctx.lineTo(81.0, 9.2);
      ctx.lineTo(66.7, 23.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(123, 123, 123)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(61.9, 9.2);
      ctx.lineTo(66.7, 4.5);
      ctx.lineTo(81.0, 18.8);
      ctx.lineTo(76.2, 23.6);
      ctx.lineTo(61.9, 9.2);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.restore();
      ctx.restore();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(85.0, 45.5);
      ctx.lineTo(0.0, 45.5);
      ctx.lineTo(0.0, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 45.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();

}
/*========================================================================================================*/
//draw the over state
this.over_LF=function(){
   
    var ctx = this.htmlElement.getContext("2d");
var alpha = ctx.globalAlpha;

      // layer1/Group
      ctx.save();
ctx.translate(-40,0);
      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(85.0, 27.6);
      ctx.lineTo(57.9, 27.6);
      ctx.lineTo(57.9, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 27.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(66.7, 23.6);
      ctx.lineTo(61.9, 18.8);
      ctx.lineTo(76.2, 4.5);
      ctx.lineTo(81.0, 9.2);
      ctx.lineTo(66.7, 23.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(123, 123, 123)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(61.9, 9.2);
      ctx.lineTo(66.7, 4.5);
      ctx.lineTo(81.0, 18.8);
      ctx.lineTo(76.2, 23.6);
      ctx.lineTo(61.9, 9.2);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.restore();
      ctx.restore();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(85.0, 45.5);
      ctx.lineTo(0.0, 45.5);
      ctx.lineTo(0.0, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 45.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_LF=function(){
    var ctx = this.htmlElement.getContext("2d");
var alpha = ctx.globalAlpha;

      // layer1/Group
      ctx.save();
ctx.translate(-40,0);
      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(85.0, 27.6);
      ctx.lineTo(57.9, 27.6);
      ctx.lineTo(57.9, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 27.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(66.7, 23.6);
      ctx.lineTo(61.9, 18.8);
      ctx.lineTo(76.2, 4.5);
      ctx.lineTo(81.0, 9.2);
      ctx.lineTo(66.7, 23.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(123, 123, 123)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(61.9, 9.2);
      ctx.lineTo(66.7, 4.5);
      ctx.lineTo(81.0, 18.8);
      ctx.lineTo(76.2, 23.6);
      ctx.lineTo(61.9, 9.2);
      ctx.closePath();
      ctx.fill();

      // layer1/Path
      ctx.restore();
      ctx.restore();
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(85.0, 45.5);
      ctx.lineTo(0.0, 45.5);
      ctx.lineTo(0.0, 0.5);
      ctx.lineTo(85.0, 0.5);
      ctx.lineTo(85.0, 45.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
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
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("mousedown",function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener("mouseup",function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.addEventListener("mouseover",function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.addEventListener("mouseout",function(e){c.out_LF();c.outFunction(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.htmlElement.attachEvent('onmousedown',function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.attachEvent('onmouseup',function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.attachEvent('onmouseover',function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.attachEvent('onmouseout',function(e){c.out_LF();c.outFunction(e);});
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.htmlElement.addEventListener('touchstart',function(e){e.preventDefault();c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener('touchend',function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}
//this is the android events
if(window.platformFlag=="AND"){
this.htmlElement.addEventListener("touchstart",function(e){e.preventDefault();c.down_LF();	c.downFunction(e);});
this.htmlElement.addEventListener("touchend",function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}


}
/*========================================================================================================*/
//call all the function to make this button visable
this.build();
this.out_LF();
//bind events for this function
this.CreateButtonEvents(this);

}
