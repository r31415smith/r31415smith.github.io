/*
**
** 
*/
function stepBack(left,top){

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

this.buttonString="";
/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
this.htmlElement.style.backgroundColor = "#FFCCCC";	
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
      ctx.moveTo(43.5, 25.0);
      ctx.lineTo(43.5, 42.4);
      ctx.lineTo(32.5, 33.7);
      ctx.lineTo(21.5, 25.0);
      ctx.lineTo(32.5, 16.3);
      ctx.lineTo(43.5, 7.6);
      ctx.lineTo(43.5, 25.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	
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

      // /Path
      ctx.restore();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(43.5, 25.0);
      ctx.lineTo(43.5, 42.4);
      ctx.lineTo(32.5, 33.7);
      ctx.lineTo(21.5, 25.0);
      ctx.lineTo(32.5, 16.3);
      ctx.lineTo(43.5, 7.6);
      ctx.lineTo(43.5, 25.0);
      ctx.closePath();
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
this.htmlElement.addEventListener("mouseup",function(e){c.up_LF();c.upFunction(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.htmlElement.attachEvent('onmousedown',function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.attachEvent('onmouseup',function(e){c.up_LF();c.upFunction(e);});
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
this.up_LF();
//bind events for this function
this.CreateButtonEvents(this);

}
