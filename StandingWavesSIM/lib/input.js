function input(left,top,width,height){

this.htmlElement = document.createElement("input");


if(window.platformFlag=="AND"){
this.enterValue = 9;
}else{
this.enterValue = 13;
}


this.tempValueStorage=null;
this.value="";
//define default input values
this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;

/*========================================================================================================*/
this.build = function(){
this.htmlElement.style.position = "absolute";
this.htmlElement.setAttribute("type","number");
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.width = this.width+"px";
this.htmlElement.style.height = this.height+"px";
this.htmlElement.style.backgroundColor="#ffffff";
this.htmlElement.style.borderStyle="solid";
this.htmlElement.style.borderColor="#000000";
this.htmlElement.style.fontSize="100%";
this.htmlElement.style.zIndex = "500";	
}
/*========================================================================================================*/
this.inFunction = function(){}
this.outFunction = function(v){}
/*========================================================================================================*/
this.focusIn_LF=function(e){
this.htmlElement.style.backgroundColor = "#99CCFF";
this.tempValueStorage=this.htmlElement.value;
this.htmlElement.value="";
this.inFunction();
}
/*========================================================================================================*/
this.focusOut_LF=function(e){
this.htmlElement.style.backgroundColor = "#FFFFFF";
//alert(this.htmlElement.value);
var b = parseFloat(this.htmlElement.value);
if(isNaN(b)){this.htmlElement.value = this.tempValueStorage;}
else{
	
this.outFunction(parseFloat(this.htmlElement.value));
}

}
/*========================================================================================================*/
this.returnOut_LF=function(e){

if(e.keyCode==this.enterValue){
this.htmlElement.blur();
}
else{
//var b = parseFloat(this.htmlElement.value);
//if(!isNaN(this.htmlElement.value)){
//alert('nana');
//this.outFunction(parseFloat(b));
//}
//-----
}


}
/*========================================================================================================*/
this.bind = function(evnt,fctn){

if(evnt=="out"){this.outFunction=fctn;}
if(evnt=="in"){this.inFunction=fctn;}

}
/*========================================================================================================*/
this.unbind=function(){

this.inFunction = null;
this.outFunction = null;

}
/*========================================================================================================*/
this.CreateButtonEvents=function(c){


//bind events for non internet explorer borswers
if(window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("focus",function(e){c.focusIn_LF(e);});
this.htmlElement.addEventListener("blur",function(e){c.focusOut_LF(e);});
this.htmlElement.addEventListener("keyup",function(e){c.returnOut_LF(e);});
}

//bind internet expolorer specific events
if(window.browserFlag=="IE"){
this.htmlElement.attachEvent("onfocus",function(e){c.focusIn_LF(e);});
this.htmlElement.attachEvent("onblur",function(e){c.focusOut_LF(e);});
this.htmlElement.attachEvent("onkeyup",function(e){c.returnOut_LF(e);});
}

}
/*========================================================================================================*/
this.setValue = function(v){
this.htmlElement.value = v;
this.value = v;
}
//call all the function to make this button visable
/*========================================================================================================*/
this.build();

//bind events for this function
this.CreateButtonEvents(this);


}


