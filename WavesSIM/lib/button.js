/*
** general purpose button. 
** 
*/
function button(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 45;
this.width  = 85;

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
    
    var color1 = "rgb(145, 207, 235)";
    var color2 = "rgb(130, 130, 130)";
    var color3 = "rgb(240, 240, 240)";
    var color4 = "rgb(30, 103, 85)";

    ctx.save();
    ctx.fillStyle = color1;//background color
    ctx.fillRect(4.0,4.0,70.0,36.0);
    ctx.fill();

    //button Left Side
    ctx.beginPath();
    ctx.moveTo(10.4, 32.9);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(10.4, 32.9);
    ctx.closePath();
    gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
    gradient.addColorStop(0.00, color2);//outside color on LHS
    gradient.addColorStop(1.00, color1);//inside color on LHS
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(67.8, 11.3);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();

    //Lower Side of the button
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(10.4, 32.9);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
    gradient.addColorStop(0.00, color2);//outside color of the gradient
    gradient.addColorStop(1.00, color1);//inside color of the gradient
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(67.8, 11.3);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(67.8, 11.3);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();
    // run/Run
    ctx.restore();
    ctx.font = "Bold 20.0px 'Arial'";
    ctx.fillStyle = color4;
    ctx.fillText(this.buttonString, 14.4, 29.0);
    ctx.restore();
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
    var color1 = "rgb(145, 207, 235)";
    var color2 = "rgb(90, 90, 90)";
    var color3 = "rgb(130, 130, 130)";
    var color4 = "rgb(30, 103, 85)";

    ctx.save();

    ctx.fillStyle = color1;//background color
    ctx.fillRect(4.0,4.0,70.0,36.0);
    ctx.fill();

    //button Left Side
    ctx.beginPath();
    ctx.moveTo(10.4, 32.9);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(10.4, 32.9);
    ctx.closePath();
    gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
    gradient.addColorStop(0.00, color2);//outside color on LHS
    gradient.addColorStop(1.00, color1);//inside color on LHS
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(67.8, 11.3);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();

    //Lower Side of the button
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(10.4, 32.9);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
    gradient.addColorStop(0.00, color2);//outside color of the gradient
    gradient.addColorStop(1.00, color1);//inside color of the gradient
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(67.8, 11.3);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(67.8, 11.3);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();
    // run/Run
    ctx.restore();
    ctx.font = "Bold 20.0px 'Arial'";
    ctx.fillStyle = color4;
    ctx.fillText(this.buttonString, 14.4, 29.0);
    ctx.restore();    

}
/*========================================================================================================*/
//draw the over state
this.over_LF=function(){
   
    var ctx = this.htmlElement.getContext("2d");
    var color1 = "rgb(145, 223, 255)";
    var color2 = "rgb(130, 130, 130)";
    var color3 = "rgb(240, 240, 240)";
    var color4 = "rgb(0, 155, 125)";


    ctx.save();

    ctx.fillStyle = color1;//background color
    ctx.fillRect(4.0,4.0,70.0,36.0);
    ctx.fill();

    //button Left Side
    ctx.beginPath();
    ctx.moveTo(10.4, 32.9);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(10.4, 32.9);
    ctx.closePath();
    gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
    gradient.addColorStop(0.00, color2);//outside color on LHS
    gradient.addColorStop(1.00, color1);//inside color on LHS
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(67.8, 11.3);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();

    //Lower Side of the button
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(10.4, 32.9);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
    gradient.addColorStop(0.00, color2);//outside color of the gradient
    gradient.addColorStop(1.00, color1);//inside color of the gradient
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(67.8, 11.3);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(67.8, 11.3);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();
    // run/Run
    ctx.restore();
    ctx.font = "Bold 20.0px 'Arial'";
    ctx.fillStyle = color4;
    ctx.fillText(this.buttonString, 14.4, 29.0);
    ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_LF=function(){
    var ctx = this.htmlElement.getContext("2d");
    var color1 = "rgb(145, 207, 235)";
    var color2 = "rgb(130, 130, 130)";
    var color3 = "rgb(240, 240, 240)";
    var color4 = "rgb(30, 103, 85)";

    ctx.save();
    ctx.fillStyle = color1;//background color
    ctx.fillRect(4.0,4.0,70.0,36.0);
    ctx.fill();

    //button Left Side
    ctx.beginPath();
    ctx.moveTo(10.4, 32.9);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(10.4, 32.9);
    ctx.closePath();
    gradient = ctx.createLinearGradient(4.0, 22.1, 10.4, 22.1);
    gradient.addColorStop(0.00, color2);//outside color on LHS
    gradient.addColorStop(1.00, color1);//inside color on LHS
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(67.8, 11.3);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(74.0, 22.1, 67.7, 22.1);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();

    //Lower Side of the button
    ctx.beginPath();
    ctx.moveTo(74.2, 40.1);
    ctx.lineTo(4.0, 40.1);
    ctx.lineTo(10.4, 32.9);
    ctx.lineTo(67.8, 32.9);
    ctx.lineTo(74.2, 40.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 40.0, 39.1, 33.2);
    gradient.addColorStop(0.00, color2);//outside color of the gradient
    gradient.addColorStop(1.00, color1);//inside color of the gradient
    ctx.fillStyle = gradient;
    ctx.fill();

    // run/Group/Path
    ctx.beginPath();
    ctx.moveTo(67.8, 11.3);
    ctx.lineTo(10.4, 11.3);
    ctx.lineTo(4.0, 4.1);
    ctx.lineTo(74.2, 4.1);
    ctx.lineTo(67.8, 11.3);
    ctx.closePath();
    gradient = ctx.createLinearGradient(39.1, 4.3, 39.1, 11.2);
    gradient.addColorStop(0.00, color3);
    gradient.addColorStop(1.00, color1);
    ctx.fillStyle = gradient;
    ctx.fill();
    // run/Run
    ctx.restore();
    ctx.font = "Bold 20.0px 'Arial'";
    ctx.fillStyle = color4;
    ctx.fillText(this.buttonString, 14.4, 29.0);
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
