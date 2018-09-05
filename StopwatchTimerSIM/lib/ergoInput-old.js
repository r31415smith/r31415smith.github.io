/************************************************************
 * ergoInput 
 * 
 * is the immitation of the native html input field
 * this was created in order to prevent tablets from 
 * shwosing the native keyboard when user enters the field
 * 
 ************************************************************/
function ergoInput(left,top,width,height,keyPadObject){


//user is able to set the width height and x,y position in pexels on the page
this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;
//used to hold reference to the keyPad object for derect comunication
this.keyPadObject = keyPadObject;

//the element that will be added to the main parent div
this.htmlElement = document.createElement("canvas");

// define a few values that are liable to be different acreoss paltofrms
// in order to be able to easily change them
this.enterValue = 13;
this.leftValue = 37;
this.rightValue = 39;

//holds previous value whilecurrent value is being analized for valididty
this.tempValueStorage=null;

//flag to indicate if user has clicked somewhere on the custom keypad
this.entering_keypad = 0;

//holds the curent value of this input field
this.value="";

//store maximum and minum values
this.max;	
this.min;

/*========================================================================================================
* build()
* sets up the html Element associated with this object
*=======================================================================================================*/
this.build = function(){
this.htmlElement.style.position = "absolute";
this.htmlElement.setAttribute("type","number");
this.htmlElement.setAttribute("tabindex","1");
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.backgroundColor="#ffffff";
this.htmlElement.style.borderStyle="solid";
this.htmlElement.style.borderColor="#000000";
this.htmlElement.style.fontSize="100%";
this.htmlElement.style.zIndex = "500";	
}
/*========================================================================================================
* place holders for functions passed in here in the implementing object
* in and out functions are called when user clicks in or clicks out respectively
* ( NOTE: on tablets the out function is called when user presses simulated keypad enter button )
*=======================================================================================================*/
this.inFunction  = function(){}
this.outFunction = function(v){}
/*========================================================================================================
* 
*=======================================================================================================*/
this.focusIn_LF=function(e){

this.tempValueStorage = this.value;
	
this.htmlElement.style.backgroundColor = "#99CCFF";
var c = this;
setTimeout(function(){c.keyPadObject.currentInputObject = c;},10);
this.inFunction();
}
/*========================================================================================================
* 
*=======================================================================================================*/
this.focusOut_LF=function(e){
	
this.htmlElement.style.backgroundColor = "#FFFFFF";


var b = parseFloat(this.value);

if(isNaN(b)){this.value=0;}

//check that vlue is
if(this.max!=undefined&&this.max<parseFloat(this.value)){
this.value = this.tempValueStorage;
}

if(this.min!=undefined && this.min>parseFloat(this.value)){
this.value = this.tempValueStorage;
}

this.outFunction(parseFloat(this.value));
}
/*========================================================================================================
* 
*=======================================================================================================*/
this.returnOut_LF=function(e){

if(e.keyCode==97  || e.keyCode==49){this.append('1');}//1
if(e.keyCode==98  || e.keyCode==50){this.append('2');}//2
if(e.keyCode==99  || e.keyCode==51){this.append('3');}//3
if(e.keyCode==100 || e.keyCode==52){this.append('4');}//4
if(e.keyCode==101 || e.keyCode==53){this.append('5');}//5
if(e.keyCode==102 || e.keyCode==54){this.append('6');}//6
if(e.keyCode==103 || e.keyCode==55){this.append('7');}//7
if(e.keyCode==104 || e.keyCode==56){this.append('8');}//8
if(e.keyCode==105 || e.keyCode==57){this.append('9');}//9
if(e.keyCode==96  || e.keyCode==48){this.append('0');}//0

if(e.keyCode==69){this.append('e');}//e
if(e.keyCode==12){this.clear();}//clear
if(e.keyCode==8){this.backSpace();}//delete
if(e.keyCode==190||e.keyCode==110){this.append('.');}//point
if(e.keyCode==173||e.keyCode==109||e.keyCode==189){this.append('-');}//minus

if(e.keyCode==this.enterValue){this.htmlElement.blur();}//enter
//if(e.keyCode==this.leftValue){}//if(e.keyCode==this.rightValue){}

}
/*========================================================================================================
* called by the implementing class
*=======================================================================================================*/
this.bind = function(evnt,fctn){

if(evnt=="out"){this.outFunction=fctn;}
if(evnt=="in"){this.inFunction=fctn;}

}
/*========================================================================================================
* 
*=======================================================================================================*/
this.CreateButtonEvents=function(c){

if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("focus",function(e){c.focusIn_LF(e);});
this.htmlElement.addEventListener("blur",function(e){setTimeout(function(){if(c.entering_keypad==0){c.focusOut_LF(e);}},1);});
this.htmlElement.addEventListener("keydown",function(e){e.preventDefault();});
this.htmlElement.addEventListener("keyup",function(e){c.returnOut_LF(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.htmlElement.attachEvent("onfocus",function(e){c.focusIn_LF(e);});
this.htmlElement.attachEvent("onblur",function(e){csetTimeout(function(){if(c.entering_keypad==0){c.focusOut_LF(e);}},1);});
this.htmlElement.attachEvent("onkeydown",function(e){e.returnValue = false;});
this.htmlElement.attachEvent("onkeyup",function(e){c.returnOut_LF(e);});
}/**/

if(window.platformFlag=="AND" || window.platformFlag=="IOS"){
this.htmlElement.addEventListener("mousedown",function(e){c.focusIn_LF(e);});
}

}
/*========================================================================================================
* 
*=======================================================================================================*/
this.setValue = function(v){
	
this.value = v;
this.draw();
}
/*========================================================================================================
* 
*=======================================================================================================*/
this.append = function(val){
var c = this;


setTimeout(function(){
//if(c.value == 0 || c.value == "0"){c.value = "";}


c.value=c.value+val;
c.draw();	
},1);	
	

}
/*========================================================================================================
* 
*=======================================================================================================*/
this.clear = function(){
	
this.value="";
this.draw();

}
/*========================================================================================================
* 
*=======================================================================================================*/
this.backSpace = function(){
	
	this.value=this.value+"";

	this.value=this.value.substr(0,this.value.length-1);
	this.draw();
	
	
}
/*========================================================================================================*/
this.minusSign = function(){

}
/*========================================================================================================
* 
*=======================================================================================================*/
this.draw = function(){
var ctx = this.htmlElement.getContext("2d");
	  //ctx.clearRect(0,0,200,200);
	  ctx.clearRect(0,0,parseFloat(this.width),parseFloat(this.height));
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.font = "15px 'Arial'";
      ctx.fillText(this.value, 2, 18);
 
      ctx.restore();
}
/*========================================================================================================
* 
*=======================================================================================================*/
this.setMax = function(v){
this.max = v;	
}
this.setMin = function(v){
this.min = v;	
}
/*========================================================================================================
* 
*=======================================================================================================*/
this.build();

this.CreateButtonEvents(this);
}/* end of ergoInput */
