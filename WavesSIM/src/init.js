/*
** This Class Initiates all HTML object elements
** it instantiates the Incline Plane class
** and passes created HTML elements to it
*/
window.onload = function(){

try{

var parent = document.getElementById("parent")

var background = document.createElement("canvas");
background.setAttribute("width","980");
background.setAttribute("height","490");
background.style.position = "absolute";
background.style.top = "0px";
background.style.left = "0px";
//background.style.backgroundColor = "#CCCCCC";
parent.appendChild(background);//move down
//-------------------------------------------------------

var b = new backView(background);
var e = new control();

}catch(err){
alert("problem:"+err.message);
}

}
