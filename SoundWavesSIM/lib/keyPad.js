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
  
  this.inputArray = new Array();
/*========================================================================================================
* build()
* set up canvas elements for this object and add them ti the container div element
*=======================================================================================================*/
this.build = function(){

  this.htmlElement.style.position = "absolute";
  this.htmlElement.setAttribute("tabindex","1");
  this.htmlElement.style.top  = "180px";
  this.htmlElement.style.left = "780px";
  this.htmlElement.style.width  = "155px";
  this.htmlElement.style.height  = "300px";
  this.htmlElement.style.zIndex = "500";
  //this.htmlElement.style.backgroundColor = "#FF99CC";

//-------------------------------------------
  this.one_key.setAttribute("width","65");
  this.one_key.setAttribute("height","50");
  this.one_key.style.position = "absolute";
  this.one_key.style.top = "0px";
  this.one_key.style.left = "0px";
  //this.one_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.one_key);  
//-------------------------------------------
  this.two_key.setAttribute("width","65");
  this.two_key.setAttribute("height","50");
  this.two_key.style.position = "absolute";
  this.two_key.style.top = "0px";
  this.two_key.style.left = "65px";
  //this.two_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.two_key);
//-------------------------------------------
  this.three_key.setAttribute("width","65");
  this.three_key.setAttribute("height","50");
  this.three_key.style.position = "absolute";
  this.three_key.style.top = "0px";
  this.three_key.style.left = "130px";
  //this.three_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.three_key);
//-------------------------------------------
  this.four_key.setAttribute("width","65");
  this.four_key.setAttribute("height","50");
  this.four_key.style.position = "absolute";
  this.four_key.style.top = "50px";
  this.four_key.style.left = "0px";
  //this.four_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.four_key);
//-------------------------------------------
  this.five_key.setAttribute("width","65");
  this.five_key.setAttribute("height","50");
  this.five_key.style.position = "absolute";
  this.five_key.style.top = "50px";
  this.five_key.style.left = "65px";
  //this.five_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.five_key);
//-------------------------------------------
  this.six_key.setAttribute("width","65");
  this.six_key.setAttribute("height","50");
  this.six_key.style.position = "absolute";
  this.six_key.style.top = "50px";
  this.six_key.style.left = "130px";
  //this.six_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.six_key);
//-------------------------------------------
  this.seven_key.setAttribute("width","65");
  this.seven_key.setAttribute("height","50");
  this.seven_key.style.position = "absolute";
  this.seven_key.style.top = "100px";
  this.seven_key.style.left = "0px";
  //this.seven_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.seven_key);
//-------------------------------------------
  this.eight_key.setAttribute("width","65");
  this.eight_key.setAttribute("height","50");
  this.eight_key.style.position = "absolute";
  this.eight_key.style.top = "100px";
  this.eight_key.style.left = "65px";
  //this.eight_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.eight_key);  
//-------------------------------------------
  this.nine_key.setAttribute("width","65");
  this.nine_key.setAttribute("height","50");
  this.nine_key.style.position = "absolute";
  this.nine_key.style.top = "100px";
  this.nine_key.style.left = "130px";
  //this.nine_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.nine_key);
//-------------------------------------------
  this.e_key.setAttribute("width","65");
  this.e_key.setAttribute("height","50");
  this.e_key.style.position = "absolute";
  this.e_key.style.top = "150px";
  this.e_key.style.left = "0px";
  //this.e_key.style.backgroundColor = "#FF0000";
  this.htmlElement.appendChild(this.e_key);
//-------------------------------------------
  this.zero_key.setAttribute("width","65");
  this.zero_key.setAttribute("height","50");
  this.zero_key.style.position = "absolute";
  this.zero_key.style.top = "150px";
  this.zero_key.style.left = "65px";
  //this.zero_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.zero_key);
//-------------------------------------------
  this.dot_key.setAttribute("width","65");
  this.dot_key.setAttribute("height","50");
  this.dot_key.style.position = "absolute";
  this.dot_key.style.top = "150px";
  this.dot_key.style.left = "130px";
  //this.dot_key.style.backgroundColor = "#0000FF";
  this.htmlElement.appendChild(this.dot_key);
//-------------------------------------------
  this.min_key.setAttribute("width","65");
  this.min_key.setAttribute("height","50");
  this.min_key.style.position = "absolute";
  this.min_key.style.top = "200px";
  this.min_key.style.left = "0px";
  //this.min_key.style.backgroundColor = "#999999";
  this.htmlElement.appendChild(this.min_key);
//-------------------------------------------
  this.entr_key.setAttribute("width","130");
  this.entr_key.setAttribute("height","50");
  this.entr_key.style.position = "absolute";
  this.entr_key.style.top = "200px";
  this.entr_key.style.left = "65px";
  //this.entr_key.style.backgroundColor = "#00CCCC";
  this.htmlElement.appendChild(this.entr_key);
//-------------------------------------------
  this.back_key.setAttribute("width","65");
  this.back_key.setAttribute("height","50");
  this.back_key.style.position = "absolute";
  this.back_key.style.top = "250px";
  this.back_key.style.left = "0px";
  //this.back_key.style.backgroundColor = "#99CCCC";
  this.htmlElement.appendChild(this.back_key);
//-------------------------------------------
  this.clear_key.setAttribute("width","130");
  this.clear_key.setAttribute("height","50");
  this.clear_key.style.position = "absolute";
  this.clear_key.style.top = "250px";
  this.clear_key.style.left = "65px";
  //this.clear_key.style.backgroundColor = "#000000";
  this.htmlElement.appendChild(this.clear_key);
//-------------------------------------------
	
}
/*============== draw the unpressed state for the one key =======================================================*/
this.one_up = function(){

var ctx = this.one_key.getContext("2d");

      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("1", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================= draw the unpressed state for the two key ====================================================*/
this.two_up = function(){
var ctx = this.two_key.getContext("2d");

      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("2", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();	
}
/*=================== draw the unpressed state for the three key ========================================================*/
this.three_up = function(){
var ctx = this.three_key.getContext("2d");	
      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 19.5, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("3", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*================================= draw the unpressed state for the four key ==========================================*/
this.four_up = function(){
var ctx = this.four_key.getContext("2d");	
      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("4", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*=============================== draw the unpressed state for the five key ============================================*/
this.five_up = function(){
var ctx = this.five_key.getContext("2d");	
	  ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("5", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*=============================== draw the unpressed state for the one six ============================================*/
this.six_up = function(){
var ctx = this.six_key.getContext("2d");	
	  ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.5, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("6", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*=========================== draw the unpressed state for the seven key ================================================*/
this.seven_up = function(){
var ctx = this.seven_key.getContext("2d");	
      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("7", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*================================  draw the unpressed state for the eight key  ===========================================*/
this.eight_up = function(){
var ctx = this.eight_key.getContext("2d");	
      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("8", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*===================================  draw the unpressed state for the nine key  ========================================*/
this.nine_up = function(){
var ctx = this.nine_key.getContext("2d");	
      ctx.save();

      // 9/Group/Group
      ctx.save();

      // 9/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      // 9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      // 9/Group/9
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.5, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("9", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*====================================  draw the unpressed state for the 'e' key  =======================================*/
this.e_up = function(){
var ctx = this.e_key.getContext("2d");	
      ctx.save();

      // e/Group/Group
      ctx.save();

      // e/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      // e/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // e/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      // e/Group/E
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 19.2, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("E", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*===================================  draw the unpressed state for the zero key  ========================================*/
this.zero_up = function(){
var ctx = this.zero_key.getContext("2d");	
      ctx.save();

      // 0/Group/Group
      ctx.save();

      // 0/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      // 0/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 0/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      // 0/Group/0
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("0", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*=============================================  draw the unpressed state for the '.' key  ==============================*/
this.dot_up = function(){
var ctx = this.dot_key.getContext("2d");	
      ctx.save();
      ctx.save();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(65.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(62.0, 47.0);
      ctx.lineTo(62.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(65.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(65.0, 0.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 26.3, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText(".", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*===============================================  draw the unpressed state for the minus key  ============================*/
this.min_up = function(){
var ctx = this.min_key.getContext("2d");	
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
      ctx.fillStyle = "rgb(229, 229, 229)";
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
      ctx.fillStyle = "rgb(204, 204, 204)";
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
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // /Group/Group/Compound Path/Path
      ctx.moveTo(20.8, 28.8);
      ctx.lineTo(20.8, 26.3);
      ctx.lineTo(40.2, 26.3);
      ctx.lineTo(40.2, 28.8);
      ctx.lineTo(20.8, 28.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*===========================================  draw the unpressed state for the enter key  ================================*/
this.entr_up = function(){
var ctx = this.entr_key.getContext("2d");	

      ctx.save();

      // enter/Group/Group
      ctx.save();

      // enter/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(127.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(127.0, 3.0);
      ctx.lineTo(127.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(206, 228, 173)";
      ctx.fill();

      // enter/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(130.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(127.0, 47.0);
      ctx.lineTo(127.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(130.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(184, 216, 136)";
      ctx.fill();

      // enter/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(127.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(228, 240, 211)";
      ctx.fill();

      // enter/Group/ENTER
      ctx.restore();
      ctx.font = "Bold 23.4px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 17.0, 33.2);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("ENTER", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();

}
/*===============================================  draw the unpressed state for the backspace key  ============================*/
this.back_up = function(){
var ctx = this.back_key.getContext("2d");	
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
      ctx.fillStyle = "rgb(255, 223, 223)";
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
      ctx.fillStyle = "rgb(255, 213, 213)";
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
      ctx.fillStyle = "rgb(255, 234, 234)";
      ctx.fill();

      // /Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(43.8, 26.0);
      ctx.lineTo(43.8, 39.0);
      ctx.lineTo(30.5, 32.5);
      ctx.lineTo(17.2, 26.0);
      ctx.lineTo(30.5, 19.5);
      ctx.lineTo(43.8, 13.0);
      ctx.lineTo(43.8, 26.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*===============================================  draw the unpressed state for the clear key  ============================*/
this.clear_up = function(){
var ctx = this.clear_key.getContext("2d");	
      ctx.save();

      // clear/Group/Group
      ctx.save();

      // clear/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(127.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(127.0, 3.0);
      ctx.lineTo(127.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 223, 223)";
      ctx.fill();

      // clear/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(130.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 47.0);
      ctx.lineTo(127.0, 47.0);
      ctx.lineTo(127.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(130.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 213, 213)";
      ctx.fill();

      // clear/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(127.0, 3.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 234, 234)";
      ctx.fill();

      // clear/Group/CLEAR
      ctx.restore();
      ctx.font = "Bold 23.4px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 12.2, 34.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("CLEAR", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================================= draw the pressed-down state for the one key ====================================*/
this.one_down = function(){
var ctx = this.one_key.getContext("2d");	
      ctx.save();
      ctx.save();

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

      // 1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 1/Group/1
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("1", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the two key ==================================*/
this.two_down = function(){
var ctx = this.two_key.getContext("2d");	
      ctx.save();

      // 2/Group/Group
      ctx.save();

      // 2/Group/Group/Path
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

      // 2/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 2/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 2/Group/2
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("2", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================================== draw the pressed-down state for the three key ===================================*/
this.three_down = function(){
var ctx = this.three_key.getContext("2d");
      ctx.save();

      // 3/Group/Group
      ctx.save();

      // 3/Group/Group/Path
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

      // 3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 3/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 3/Group/3
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 19.5, 36.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("3", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the four key ==================================*/
this.four_down = function(){
var ctx = this.four_key.getContext("2d");	
      ctx.save();

      // 4/Group/Group
      ctx.save();

      // 4/Group/Group/Path
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

      // 4/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 4/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 4/Group/4
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("4", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the five key ==================================*/
this.five_down = function(){
var ctx = this.five_key.getContext("2d");
      ctx.save();

      // 5/Group/Group
      ctx.save();

      // 5/Group/Group/Path
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

      // 5/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 5/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 5/Group/5
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("5", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the six key ==================================*/
this.six_down = function(){
var ctx = this.six_key.getContext("2d");	
      ctx.save();

      // 6/Group/Group
      ctx.save();

      // 6/Group/Group/Path
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

      // 6/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 6/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 6/Group/6
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.5, 34.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("6", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the seven key ==================================*/
this.seven_down = function(){
var ctx = this.seven_key.getContext("2d");	
      ctx.save();

      // 7/Group/Group
      ctx.save();

      // 7/Group/Group/Path
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

      // 7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 7/Group/7
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.0, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("7", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*=========================================== draw the pressed-down state for the eight key ================================*/
this.eight_down = function(){
var ctx = this.eight_key.getContext("2d");
      ctx.save();

      // 8/Group/Group
      ctx.save();

      // 8/Group/Group/Path
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

      // 8/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 8/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 8/Group/8
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("8", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================== draw the pressed-down state for the nine key =================================*/
this.nine_down = function(){
var ctx = this.nine_key.getContext("2d");
      ctx.save();

      // 9/Group/Group
      ctx.save();

      // 9/Group/Group/Path
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

      // 9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 9/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 9/Group/9
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.5, 35.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("9", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================== draw the pressed-down state for the 'e' key =================================*/
this.e_down = function(){
var ctx = this.e_key.getContext("2d");	
      ctx.save();

      // e/Group/Group
      ctx.save();

      // e/Group/Group/Path
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

      // e/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // e/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // e/Group/E
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 19.2, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("E", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================================== draw the pressed-down state for the zero key ===================================*/
this.zero_down = function(){
var ctx = this.zero_key.getContext("2d");	
      ctx.save();

      // 0/Group/Group
      ctx.save();

      // 0/Group/Group/Path
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

      // 0/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // 0/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // 0/Group/0
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 21.3, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("0", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================================== draw the pressed-down state for the '.' key ===================================*/
this.dot_down = function(){
var ctx = this.dot_key.getContext("2d");
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
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // /Group/
      ctx.restore();
      ctx.font = "Bold 28.1px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 26.3, 35.0);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText(".", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*========================================= draw the pressed-down state for the minus key ==================================*/
this.min_down = function(){
var ctx = this.min_key.getContext("2d");
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
      ctx.fillStyle = "rgb(136, 136, 136)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();

      // /Group/Group
      ctx.restore();

      // /Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // /Group/Group/Compound Path/Path
      ctx.moveTo(20.8, 28.8);
      ctx.lineTo(20.8, 26.3);
      ctx.lineTo(40.2, 26.3);
      ctx.lineTo(40.2, 28.8);
      ctx.lineTo(20.8, 28.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*====================================== draw the pressed-down state for the enter key =====================================*/
this.entr_down = function(){
var ctx = this.entr_key.getContext("2d");
     
      ctx.save();

      // enter/Group/Group
      ctx.save();

      // enter/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(130.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(130.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(126, 122, 82)";
      ctx.fill();

      // enter/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(129.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(129.0, 1.0);
      ctx.lineTo(129.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(184, 216, 136)";
      ctx.fill();

      // enter/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(126.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(126.0, 3.0);
      ctx.lineTo(126.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(206, 228, 173)";
      ctx.fill();

      // enter/Group/ENTER
      ctx.restore();
      ctx.font = "Bold 23.4px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 17.0, 33.2);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("ENTER", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
/*======================================= draw the pressed-down state for the backspace key ====================================*/
this.back_down = function(){
var ctx = this.back_key.getContext("2d");

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
      ctx.fillStyle = "rgb(131, 97, 100)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(64.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(64.0, 1.0);
      ctx.lineTo(64.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(228, 168, 177)";
      ctx.fill();

      // /Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(62.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(62.0, 3.0);
      ctx.lineTo(62.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 213, 213)";
      ctx.fill();

      // /Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(43.8, 26.0);
      ctx.lineTo(43.8, 39.0);
      ctx.lineTo(30.5, 32.5);
      ctx.lineTo(17.2, 26.0);
      ctx.lineTo(30.5, 19.5);
      ctx.lineTo(43.8, 13.0);
      ctx.lineTo(43.8, 26.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
}
/*======================================= draw the pressed-down state for the clear key ====================================*/
this.clear_down = function(){
var ctx = this.clear_key.getContext("2d"); 	
     
      ctx.save();

      // clear/Group/Group
      ctx.save();

      // clear/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(130.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(130.0, 0.0);
      ctx.lineTo(130.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(131, 97, 100)";
      ctx.fill();

      // clear/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(129.0, 49.0);
      ctx.lineTo(1.0, 49.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(129.0, 1.0);
      ctx.lineTo(129.0, 49.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(228, 168, 177)";
      ctx.fill();

      // clear/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(126.0, 47.0);
      ctx.lineTo(3.0, 47.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(126.0, 3.0);
      ctx.lineTo(126.0, 47.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 213, 213)";
      ctx.fill();

      // clear/Group/CLEAR
      ctx.restore();
      ctx.font = "Bold 23.4px 'Arial'";
      ctx.save();
      ctx.transform(1.209, 0.000, 0.000, 1.000, 12.2, 34.3);
      ctx.fillStyle = "rgb(153, 153, 153)";
      ctx.fillText("CLEAR", 0, 0);
      ctx.restore();
      ctx.restore();
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

  this.one_key.addEventListener("touchstart",function(e){e.preventDefault();c.one_down();c.regPad();c.currentInputObject.append('1');});
  this.one_key.addEventListener("touchend",function(e){c.one_up();});
  this.two_key.addEventListener("touchstart",function(e){e.preventDefault(); c.two_down();c.regPad();c.currentInputObject.append('2');});
  this.two_key.addEventListener("touchend",function(e){ c.two_up();});
  this.three_key.addEventListener("touchstart",function(e){e.preventDefault();c.three_down();c.regPad();c.currentInputObject.append('3');});
  this.three_key.addEventListener("touchend",function(e){ c.three_up();});
  this.four_key.addEventListener("touchstart",function(e){e.preventDefault(); c.four_down();c.regPad();c.currentInputObject.append('4');});
  this.four_key.addEventListener("touchend",function(e){ c.four_up();});
  this.five_key.addEventListener("touchstart",function(e){e.preventDefault(); c.five_down();c.regPad();c.currentInputObject.append('5');});
  this.five_key.addEventListener("touchend",function(e){ c.five_up();});
  this.six_key.addEventListener("touchstart",function(e){e.preventDefault();c.six_down();c.regPad();c.currentInputObject.append('6');});
  this.six_key.addEventListener("touchend",function(e){c.six_up(); });
  this.seven_key.addEventListener("touchstart",function(e){e.preventDefault(); c.seven_down();c.regPad();c.currentInputObject.append('7');});
  this.seven_key.addEventListener("touchend",function(e){ c.seven_up();});
  this.eight_key.addEventListener("touchstart",function(e){e.preventDefault();c.eight_down();c.regPad();c.currentInputObject.append('8');});
  this.eight_key.addEventListener("touchend",function(e){ c.eight_up();});
  this.nine_key.addEventListener("touchstart",function(e){e.preventDefault();c.nine_down();c.regPad();c.currentInputObject.append('9');});
  this.nine_key.addEventListener("touchend",function(e){c.nine_up(); });
  this.e_key.addEventListener("touchstart",function(e){e.preventDefault();c.e_down();c.regPad();c.currentInputObject.append('e');});
  this.e_key.addEventListener("touchend",function(e){c.e_up(); });
  this.zero_key.addEventListener("touchstart",function(e){e.preventDefault();c.zero_down();c.regPad();c.currentInputObject.append('0');});
  this.zero_key.addEventListener("touchend",function(e){c.zero_up(); });
  this.dot_key.addEventListener("touchstart",function(e){e.preventDefault();c.dot_down();c.regPad();c.currentInputObject.append('.');});
  this.dot_key.addEventListener("touchend",function(e){c.dot_up(); });
  this.min_key.addEventListener("touchstart",function(e){e.preventDefault();c.min_down();c.regPad();c.currentInputObject.append('-');});
  this.min_key.addEventListener("touchend",function(e){c.min_up(); });
  this.entr_key.addEventListener("touchstart",function(e){e.preventDefault();c.entr_down();c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
  this.entr_key.addEventListener("touchend",function(e){c.entr_up(); });
  this.back_key.addEventListener("touchstart",function(e){e.preventDefault();c.back_down();c.regPad();c.currentInputObject.backSpace();});
  this.back_key.addEventListener("touchend",function(e){c.back_up();});
  this.clear_key.addEventListener("touchstart",function(e){e.preventDefault();c.clear_down();c.regPad();c.currentInputObject.clear();});
  this.clear_key.addEventListener("touchend",function(e){c.clear_up(); });
  //this.htmlElement.addEventListener("focus",function(e){c.focusIn_LF(e);});
  this.htmlElement.addEventListener("blur",function(e){e.preventDefault();c.clearRegPad();c.currentInputObject.focusOut_LF();c.currentInputObject=null;});
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
this.registerInput = function(obj){

var id = this.inputArray.length;

this.inputArray[id] = obj;

return id;
}
/*===========================================================================*/
this.inputInit = function(id){

if(this.currentInputObject!=null&&this.currentInputObject.id!=id){
this.currentInputObject.entering_keypad = 0;
this.currentInputObject.focusOut_LF();
this.currentInputObject=null;	
}

this.currentInputObject = this.inputArray[id];

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
