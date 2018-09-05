window.onload = function(){

try
  {

var parent = document.getElementById("parent")


var background = document.createElement("canvas");
background.setAttribute("width","980");
background.setAttribute("height","490");
background.style.position = "absolute";
background.style.top = "0px";
background.style.left = "0px";
//background.style.backgroundColor = "#CCCCFF";
parent.appendChild(background);//move down
//------------------------------------------------------- 
var pnd = document.createElement("canvas");
pnd.setAttribute("width","240");
//pnd.setAttribute("height","320");
pnd.setAttribute("height","360");
pnd.style.position = "absolute";
//pnd.style.top = "25px";
pnd.style.top = "1px";
//pnd.style.left = "397px";
pnd.style.left = "475px";
//pnd.style.backgroundColor = "#99CCFF";
 

parent.appendChild(pnd);//move down
//-------------------------------------------------------







var b = new backView(background);
var e = new control(pnd);

 }
catch(err)
  {
 //alert("problem:"+err);
  }


}
