/************************************************************
 * keyPad 
 * in charge of the keypad user interface element
 * 
 ************************************************************/
function keyPad(){

// --- main container element for this widget 
  this.htmlElement = document.createElement("div");

// --- each canvas is a button on the keypad --- 
  this.one_key	 = document.createElement("canvas");
  this.two_key = document.createElement("canvas");
  this.three_key = document.createElement("canvas");
  this.four_key = document.createElement("canvas");
  this.five_key = document.createElement("canvas");
  this.six_key = document.createElement("canvas");
  this.seven_key = document.createElement("canvas");
  this.eight_key = document.createElement("canvas");
  this.nine_key = document.createElement("canvas");
  this.e_key = document.createElement("canvas");
  this.zero_key = document.createElement("canvas");
  this.dot_key = document.createElement("canvas");
  this.min_key = document.createElement("canvas");
  this.entr_key = document.createElement("canvas");
  this.back_key = document.createElement("canvas");
  this.clear_key = document.createElement("canvas");
/*========================================================================================================
* build()
* set up canvas elements for this object and add them ti the container div element
*=======================================================================================================*/
this.build = function(){

  this.htmlElement.style.position = "absolute";
  this.htmlElement.setAttribute("tabindex","1");
  this.htmlElement.style.top  = "60px";
  this.htmlElement.style.left = "790px";
  this.htmlElement.style.width  = "155px";
  this.htmlElement.style.height  = "310px";
  this.htmlElement.style.zIndex = "500";
  //this.htmlElement.style.backgroundColor = "#FF99CC";

//-------------------------------------------
  this.one_key.setAttribute("width","50");
  this.one_key.setAttribute("height","50");
  this.one_key.style.position = "absolute";
  this.one_key.style.top = "0px";
  this.one_key.style.left = "0px";
  //this.one_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.one_key);  
//-------------------------------------------
  this.two_key.setAttribute("width","50");
  this.two_key.setAttribute("height","50");
  this.two_key.style.position = "absolute";
  this.two_key.style.top = "0px";
  this.two_key.style.left = "51px";
  //this.two_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.two_key);
//-------------------------------------------
  this.three_key.setAttribute("width","50");
  this.three_key.setAttribute("height","50");
  this.three_key.style.position = "absolute";
  this.three_key.style.top = "0px";
  this.three_key.style.left = "102px";
  //this.three_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.three_key);
//-------------------------------------------
  this.four_key.setAttribute("width","50");
  this.four_key.setAttribute("height","50");
  this.four_key.style.position = "absolute";
  this.four_key.style.top = "51px";
  this.four_key.style.left = "0px";
  //this.four_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.four_key);
//-------------------------------------------
  this.five_key.setAttribute("width","50");
  this.five_key.setAttribute("height","50");
  this.five_key.style.position = "absolute";
  this.five_key.style.top = "51px";
  this.five_key.style.left = "51px";
  //this.five_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.five_key);
//-------------------------------------------
  this.six_key.setAttribute("width","50");
  this.six_key.setAttribute("height","50");
  this.six_key.style.position = "absolute";
  this.six_key.style.top = "51px";
  this.six_key.style.left = "102px";
  //this.six_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.six_key);
//-------------------------------------------
  this.seven_key.setAttribute("width","50");
  this.seven_key.setAttribute("height","50");
  this.seven_key.style.position = "absolute";
  this.seven_key.style.top = "102px";
  this.seven_key.style.left = "0px";
  //this.seven_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.seven_key);
//-------------------------------------------
  this.eight_key.setAttribute("width","50");
  this.eight_key.setAttribute("height","50");
  this.eight_key.style.position = "absolute";
  this.eight_key.style.top = "102px";
  this.eight_key.style.left = "51px";
  //this.eight_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.eight_key);  
//-------------------------------------------
  this.nine_key.setAttribute("width","50");
  this.nine_key.setAttribute("height","50");
  this.nine_key.style.position = "absolute";
  this.nine_key.style.top = "102px";
  this.nine_key.style.left = "102px";
  //this.nine_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.nine_key);
//-------------------------------------------
  this.e_key.setAttribute("width","50");
  this.e_key.setAttribute("height","50");
  this.e_key.style.position = "absolute";
  this.e_key.style.top = "153px";
  this.e_key.style.left = "0px";
  //this.e_key.style.backgroundColor = "#FFFFFF";
  this.htmlElement.appendChild(this.e_key);
//-------------------------------------------
  this.zero_key.setAttribute("width","50");
  this.zero_key.setAttribute("height","50");
  this.zero_key.style.position = "absolute";
  this.zero_key.style.top = "153px";
  this.zero_key.style.left = "51px";
  //this.zero_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.zero_key);
//-------------------------------------------
  this.dot_key.setAttribute("width","50");
  this.dot_key.setAttribute("height","50");
  this.dot_key.style.position = "absolute";
  this.dot_key.style.top = "153px";
  this.dot_key.style.left = "102px";
  //this.dot_key.style.backgroundColor = "#FFFFFF";
  this.htmlElement.appendChild(this.dot_key);
//-------------------------------------------
  this.min_key.setAttribute("width","50");
  this.min_key.setAttribute("height","50");
  this.min_key.style.position = "absolute";
  this.min_key.style.top = "204px";
  this.min_key.style.left = "0px";
  //this.min_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.min_key);
//-------------------------------------------
  this.entr_key.setAttribute("width","100");
  this.entr_key.setAttribute("height","50");
  this.entr_key.style.position = "absolute";
  this.entr_key.style.top = "204px";
  this.entr_key.style.left = "51px";
  //this.entr_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.entr_key);
//-------------------------------------------
  this.back_key.setAttribute("width","50");
  this.back_key.setAttribute("height","50");
  this.back_key.style.position = "absolute";
  this.back_key.style.top = "255px";
  this.back_key.style.left = "0px";
  //this.back_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.back_key);
//-------------------------------------------
  this.clear_key.setAttribute("width","100");
  this.clear_key.setAttribute("height","50");
  this.clear_key.style.position = "absolute";
  this.clear_key.style.top = "255px";
  this.clear_key.style.left = "51px";
  //this.clear_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.clear_key);
//-------------------------------------------
	
}
/*============== draw the unpressed state for the one key =======================================================*/
this.one_up = function(){

var ctx = this.one_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("1", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*======================= draw the unpressed state for the two key ====================================================*/
this.two_up = function(){
var ctx = this.two_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("2", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();	
}
/*=================== draw the unpressed state for the three key ========================================================*/
this.three_up = function(){
var ctx = this.three_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("3", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*================================= draw the unpressed state for the four key ==========================================*/
this.four_up = function(){
var ctx = this.four_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("4", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*=============================== draw the unpressed state for the five key ============================================*/
this.five_up = function(){
var ctx = this.five_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("5", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*=============================== draw the unpressed state for the one six ============================================*/
this.six_up = function(){
var ctx = this.six_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("6", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*=========================== draw the unpressed state for the seven key ================================================*/
this.seven_up = function(){
var ctx = this.seven_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("7", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*================================  draw the unpressed state for the eight key  ===========================================*/
this.eight_up = function(){
var ctx = this.eight_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("8", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*===================================  draw the unpressed state for the nine key  ========================================*/
this.nine_up = function(){
var ctx = this.nine_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("9", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*====================================  draw the unpressed state for the 'e' key  =======================================*/
this.e_up = function(){
var ctx = this.e_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("e", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*===================================  draw the unpressed state for the zero key  ========================================*/
this.zero_up = function(){
var ctx = this.zero_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("0", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*=============================================  draw the unpressed state for the '.' key  ==============================*/
this.dot_up = function(){
var ctx = this.dot_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText(".", 20, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*===============================================  draw the unpressed state for the minus key  ============================*/
this.min_up = function(){
var ctx = this.min_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";
      
      ctx.fillText("-", 18, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
}
/*===========================================  draw the unpressed state for the enter key  ================================*/
this.entr_up = function(){
var ctx = this.entr_key.getContext("2d");	

      ctx.save();
      ctx.fillStyle = "rgb(206, 228, 173)";
      ctx.fillRect(0,0,100,50);
      ctx.font = "Bold 20.0px 'Arial'";

      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("ENTER", 15.5, 29.8);
      
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,100,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,100,1);
      ctx.fillRect(99,0,1,50);
      ctx.restore();

}
/*===============================================  draw the unpressed state for the backspace key  ============================*/
this.back_up = function(){
var ctx = this.back_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillRect(0,0,50,50);

      ctx.beginPath();
      ctx.moveTo(39.1, 39.3);
      ctx.lineTo(10.9, 25.0);
      ctx.lineTo(39.1, 10.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();

      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,50,1);
      ctx.fillRect(49,0,1,50);
      ctx.restore();
      
      ctx.restore();
}
/*===============================================  draw the unpressed state for the clear key  ============================*/
this.clear_up = function(){
var ctx = this.clear_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(255, 224, 224)";
      ctx.fillRect(0,0,100,50);
      ctx.font = "Bold 20.0px 'Arial'";

      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("CLEAR", 15.5, 29.8);
      
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,100,1);
      ctx.fillRect(0,0,1,50);
      ctx.fillRect(0,49,100,1);
      ctx.fillRect(99,0,1,50);
      ctx.restore();
}
/*======================================= draw the pressed-down state for the one key ====================================*/
this.one_down = function(){
	
	
	
var ctx = this.one_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("1", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the two key ==================================*/
this.two_down = function(){
var ctx = this.two_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("2", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*======================================== draw the pressed-down state for the three key ===================================*/
this.three_down = function(){
var ctx = this.three_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("3", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the four key ==================================*/
this.four_down = function(){
var ctx = this.four_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("4", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the five key ==================================*/
this.five_down = function(){
var ctx = this.five_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("5", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the six key ==================================*/
this.six_down = function(){
var ctx = this.six_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("6", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the seven key ==================================*/
this.seven_down = function(){
var ctx = this.seven_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("7", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*=========================================== draw the pressed-down state for the eight key ================================*/
this.eight_down = function(){
var ctx = this.eight_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("8", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================== draw the pressed-down state for the nine key =================================*/
this.nine_down = function(){
var ctx = this.nine_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("9", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================== draw the pressed-down state for the 'e' key =================================*/
this.e_down = function(){
var ctx = this.e_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("e", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*======================================== draw the pressed-down state for the zero key ===================================*/
this.zero_down = function(){
var ctx = this.zero_key.getContext("2d");	
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("0", 15, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*======================================== draw the pressed-down state for the '.' key ===================================*/
this.dot_down = function(){
var ctx = this.dot_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText(".", 20, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*========================================= draw the pressed-down state for the minus key ==================================*/
this.min_down = function(){
var ctx = this.min_key.getContext("2d");
      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);
      ctx.font = "Bold 30.9px 'Arial'";
      ctx.save();
      ctx.fillStyle = "rgb(207, 207, 207)";
      
      ctx.fillText("-", 18, 32.4);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*====================================== draw the pressed-down state for the enter key =====================================*/
this.entr_down = function(){
var ctx = this.entr_key.getContext("2d");
     
      ctx.save();
      ctx.fillStyle = "rgb(176, 198, 139)";
      ctx.fillRect(0,0,100,50);
      ctx.font = "Bold 20.0px 'Arial'";

      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillText("ENTER", 15.5, 29.8);
      
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,100,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,100,8);
      ctx.fillRect(98,0,8,50);
      ctx.restore();
}
/*======================================= draw the pressed-down state for the backspace key ====================================*/
this.back_down = function(){
var ctx = this.back_key.getContext("2d");

      ctx.save();
      ctx.fillStyle = "rgb(153, 153, 153)";     
      ctx.fillRect(0,0,50,50);

	  ctx.beginPath();
      ctx.moveTo(39.1, 39.3);
      ctx.lineTo(10.9, 25.0);
      ctx.lineTo(39.1, 10.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fill();
	      
      ctx.fillStyle = "rgb(0, 0, 0)";     
      ctx.fillRect(0,0,50,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,50,2);
      ctx.fillRect(48,0,2,50);
      ctx.restore();
}
/*======================================= draw the pressed-down state for the clear key ====================================*/
this.clear_down = function(){
var ctx = this.clear_key.getContext("2d"); 	
     
      ctx.save();
      ctx.fillStyle = "rgb(224,160,160)";
      ctx.fillRect(0,0,100,50);
      ctx.font = "Bold 20.0px 'Arial'";

      ctx.fillStyle = "rgb(207, 207, 207)";
      ctx.fillText("CLEAR", 15.5, 29.8);
      
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0,0,100,2);
      ctx.fillRect(0,0,2,50);
      ctx.fillRect(0,48,100,8);
      ctx.fillRect(98,0,8,50);
      ctx.restore();
      
}
/*========================================================================================================
* CreateButtonEvents()
* this function is responsable for looking at what sort of device is being used
* and assigning aprorpiate style of event listeners to the button canvas elements
*=======================================================================================================*/
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
	
  this.one_key.addEventListener("mousedown",function(e){c.one_down();c.regPad();c.currentInputObject.append('1');});
  this.one_key.addEventListener("mouseup",function(e){c.one_up();});
  this.two_key.addEventListener("mousedown",function(e){ c.two_down();c.regPad();c.currentInputObject.append('2');});
  this.two_key.addEventListener("mouseup",function(e){ c.two_up();});
  this.three_key.addEventListener("mousedown",function(e){c.three_down();c.regPad();c.currentInputObject.append('3');});
  this.three_key.addEventListener("mouseup",function(e){ c.three_up();});
  this.four_key.addEventListener("mousedown",function(e){ c.four_down();c.regPad();c.currentInputObject.append('4');});
  this.four_key.addEventListener("mouseup",function(e){ c.four_up();});
  this.five_key.addEventListener("mousedown",function(e){ c.five_down();c.regPad();c.currentInputObject.append('5');});
  this.five_key.addEventListener("mouseup",function(e){ c.five_up();});
  this.six_key.addEventListener("mousedown",function(e){c.six_down();c.regPad();c.currentInputObject.append('6');});
  this.six_key.addEventListener("mouseup",function(e){c.six_up(); });
  this.seven_key.addEventListener("mousedown",function(e){ c.seven_down();c.regPad();c.currentInputObject.append('7');});
  this.seven_key.addEventListener("mouseup",function(e){ c.seven_up();});
  this.eight_key.addEventListener("mousedown",function(e){c.eight_down();c.regPad();c.currentInputObject.append('8');});
  this.eight_key.addEventListener("mouseup",function(e){ c.eight_up();});
  this.nine_key.addEventListener("mousedown",function(e){c.nine_down();c.regPad();c.currentInputObject.append('9');});
  this.nine_key.addEventListener("mouseup",function(e){c.nine_up(); });
  this.e_key.addEventListener("mousedown",function(e){c.e_down();c.regPad();c.currentInputObject.append('e');});
  this.e_key.addEventListener("mouseup",function(e){c.e_up(); });
  this.zero_key.addEventListener("mousedown",function(e){c.zero_down();c.regPad();c.currentInputObject.append('0');});
  this.zero_key.addEventListener("mouseup",function(e){c.zero_up(); });
  this.dot_key.addEventListener("mousedown",function(e){c.dot_down();c.regPad();c.currentInputObject.append('.');});
  this.dot_key.addEventListener("mouseup",function(e){c.dot_up(); });
  this.min_key.addEventListener("mousedown",function(e){c.min_down();c.regPad();c.currentInputObject.append('-');});
  this.min_key.addEventListener("mouseup",function(e){c.min_up(); });
  this.entr_key.addEventListener("mousedown",function(e){c.entr_down();c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  this.entr_key.addEventListener("mouseup",function(e){c.entr_up();});
  this.back_key.addEventListener("mousedown",function(e){c.back_down();c.regPad();c.currentInputObject.backSpace();});
  this.back_key.addEventListener("mouseup",function(e){c.back_up();});
  this.clear_key.addEventListener("mousedown",function(e){c.clear_down();c.regPad();c.currentInputObject.clear();});
  this.clear_key.addEventListener("mouseup",function(e){c.clear_up(); });
  //this.htmlElement.addEventListener("focus",function(e){c.focusIn_LF(e);});
  this.htmlElement.addEventListener("blur",function(e){c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  //this.htmlElement.addEventListener("keyup",function(e){c.returnOut_LF(e);});
  //this.htmlElement.addEventListener("keyup",function(e){alert(e.keyCode);});

}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){

  this.one_key.attachEvent("onmousedown",function(e){c.one_down();c.regPad();c.currentInputObject.append('1');});
  this.one_key.attachEvent("onmouseup",function(e){c.one_up();});
  this.two_key.attachEvent("onmousedown",function(e){ c.two_down();c.regPad();c.currentInputObject.append('2');});
  this.two_key.attachEvent("onmouseup",function(e){ c.two_up();});
  this.three_key.attachEvent("onmousedown",function(e){c.three_down();c.regPad();c.currentInputObject.append('3');});
  this.three_key.attachEvent("onmouseup",function(e){ c.three_up();});
  this.four_key.attachEvent("onmousedown",function(e){ c.four_down();c.regPad();c.currentInputObject.append('4');});
  this.four_key.attachEvent("onmouseup",function(e){ c.four_up();});
  this.five_key.attachEvent("onmousedown",function(e){ c.five_down();c.regPad();c.currentInputObject.append('5');});
  this.five_key.attachEvent("onmouseup",function(e){ c.five_up();});
  this.six_key.attachEvent("onmousedown",function(e){c.six_down();c.regPad();c.currentInputObject.append('6');});
  this.six_key.attachEvent("onmouseup",function(e){c.six_up(); });
  this.seven_key.attachEvent("onmousedown",function(e){ c.seven_down();c.regPad();c.currentInputObject.append('7');});
  this.seven_key.attachEvent("onmouseup",function(e){ c.seven_up();});
  this.eight_key.attachEvent("onmousedown",function(e){c.eight_down();c.regPad();c.currentInputObject.append('8');});
  this.eight_key.attachEvent("onmouseup",function(e){ c.eight_up();});
  this.nine_key.attachEvent("onmousedown",function(e){c.nine_down();c.regPad();c.currentInputObject.append('9');});
  this.nine_key.attachEvent("onmouseup",function(e){c.nine_up(); });
  this.e_key.attachEvent("onmousedown",function(e){c.e_down();c.regPad();c.currentInputObject.append('e');});
  this.e_key.attachEvent("onmouseup",function(e){c.e_up(); });
  this.zero_key.attachEvent("onmousedown",function(e){c.zero_down();c.regPad();c.currentInputObject.append('0');});
  this.zero_key.attachEvent("onmouseup",function(e){c.zero_up(); });
  this.dot_key.attachEvent("onmousedown",function(e){c.dot_down();c.regPad();c.currentInputObject.append('.');});
  this.dot_key.attachEvent("onmouseup",function(e){c.dot_up(); });
  this.min_key.attachEvent("onmousedown",function(e){c.min_down();c.regPad();c.currentInputObject.append('-');});
  this.min_key.attachEvent("onmouseup",function(e){c.min_up(); });
  this.entr_key.attachEvent("onmousedown",function(e){c.entr_down();c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  this.entr_key.attachEvent("onmouseup",function(e){c.entr_up(); });
  this.back_key.attachEvent("onmousedown",function(e){c.back_down();c.regPad();c.currentInputObject.backSpace();});
  this.back_key.attachEvent("onmouseup",function(e){c.back_up();});
  this.clear_key.attachEvent("onmousedown",function(e){c.clear_down();c.regPad();c.currentInputObject.clear();});
  this.clear_key.attachEvent("onmouseup",function(e){c.clear_up(); });
  //this.htmlElement.attachEvent("focus",function(e){c.focusIn_LF(e);});
  this.htmlElement.attachEvent("blur",function(e){c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  //this.htmlElement.attachEvent("keyup",function(e){c.returnOut_LF(e);});
  //this.htmlElement.attachEvent("keyup",function(e){alert(e.keyCode);});

}



//this is the android events
if(window.platformFlag=="AND" || window.platformFlag=="IOS"){

  this.one_key.addEventListener("touchstart",function(e){c.one_down();c.regPad();c.currentInputObject.append('1');});
  this.one_key.addEventListener("touchend",function(e){c.one_up();});
  this.two_key.addEventListener("touchstart",function(e){ c.two_down();c.regPad();c.currentInputObject.append('2');});
  this.two_key.addEventListener("touchend",function(e){ c.two_up();});
  this.three_key.addEventListener("touchstart",function(e){c.three_down();c.regPad();c.currentInputObject.append('3');});
  this.three_key.addEventListener("touchend",function(e){ c.three_up();});
  this.four_key.addEventListener("touchstart",function(e){ c.four_down();c.regPad();c.currentInputObject.append('4');});
  this.four_key.addEventListener("touchend",function(e){ c.four_up();});
  this.five_key.addEventListener("touchstart",function(e){ c.five_down();c.regPad();c.currentInputObject.append('5');});
  this.five_key.addEventListener("touchend",function(e){ c.five_up();});
  this.six_key.addEventListener("touchstart",function(e){c.six_down();c.regPad();c.currentInputObject.append('6');});
  this.six_key.addEventListener("touchend",function(e){c.six_up(); });
  this.seven_key.addEventListener("touchstart",function(e){ c.seven_down();c.regPad();c.currentInputObject.append('7');});
  this.seven_key.addEventListener("touchend",function(e){ c.seven_up();});
  this.eight_key.addEventListener("touchstart",function(e){c.eight_down();c.regPad();c.currentInputObject.append('8');});
  this.eight_key.addEventListener("touchend",function(e){ c.eight_up();});
  this.nine_key.addEventListener("touchstart",function(e){c.nine_down();c.regPad();c.currentInputObject.append('9');});
  this.nine_key.addEventListener("touchend",function(e){c.nine_up(); });
  this.e_key.addEventListener("touchstart",function(e){c.e_down();c.regPad();c.currentInputObject.append('e');});
  this.e_key.addEventListener("touchend",function(e){c.e_up(); });
  this.zero_key.addEventListener("touchstart",function(e){c.zero_down();c.regPad();c.currentInputObject.append('0');});
  this.zero_key.addEventListener("touchend",function(e){c.zero_up(); });
  this.dot_key.addEventListener("touchstart",function(e){c.dot_down();c.regPad();c.currentInputObject.append('.');});
  this.dot_key.addEventListener("touchend",function(e){c.dot_up(); });
  this.min_key.addEventListener("touchstart",function(e){c.min_down();c.regPad();c.currentInputObject.append('-');});
  this.min_key.addEventListener("touchend",function(e){c.min_up(); });
  this.entr_key.addEventListener("touchstart",function(e){c.entr_down();c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  this.entr_key.addEventListener("touchend",function(e){c.entr_up(); });
  this.back_key.addEventListener("touchstart",function(e){c.back_down();c.regPad();c.currentInputObject.backSpace();});
  this.back_key.addEventListener("touchend",function(e){c.back_up();});
  this.clear_key.addEventListener("touchstart",function(e){c.clear_down();c.regPad();c.currentInputObject.clear();});
  this.clear_key.addEventListener("touchend",function(e){c.clear_up(); });
  //this.htmlElement.addEventListener("focus",function(e){c.focusIn_LF(e);});
  this.htmlElement.addEventListener("blur",function(e){c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  //this.htmlElement.addEventListener("keyup",function(e){c.returnOut_LF(e);});
  //this.htmlElement.addEventListener("keyup",function(e){alert(e.keyCode);});

}


}
/*===========================================================================*/
this.currentInputObject = null;//holds a reference to the entry field object being eddited
//(this objec tis set from the outised of this class)
/*===========================================================================
 * regPad()
 * tell the entry field that its being eddited. 
 * before executing code assosicated with leaving the entry field
 * there is a time dealy in the eintry field object of 0.001 seconds
 * this allows this object to register it self with the entry field
 * after the time runs out the input field object check to see if the
 * registration flag has been set and does not execute the rest of the code 
 * if it has been set
 ===========================================================================*/
this.regPad = function(){

/*make sure that an Input object has been activated
 its forseable that end user presses a key on keypad before selecting
 an input fild*/
if(this.currentInputObject!=null){
this.currentInputObject.entering_keypad = 1;	
}

}
/*===========================================================================
 * clearRegPad() 
 * clears the Reg Pad from the  input fields incase
 * user wants to enter a new value in the input field later using the
 * physical keys on the computer 
 ===========================================================================*/
this.clearRegPad = function(){

if(this.currentInputObject!=null){
this.currentInputObject.entering_keypad = 0;	
}

}
/*===========================================================================
 * sendChar()
 * send a charachter to the selected input field
 ===========================================================================*/
this.sendChar = function(chr){
var c = this;
if(this.currentInputObject!=null){
this.currentInputObject.append(chr);
}
	
}
/*===========================================================================*/
this.build();
this.CreateButtonEvents(this);
this.one_up();
this.two_up();
this.three_up();
this.four_up();
this.five_up();
this.six_up();
this.seven_up();
this.eight_up();
this.nine_up();
this.e_up();
this.zero_up();
this.dot_up();
this.min_up();
this.entr_up();
this.back_up();
this.clear_up();

}
