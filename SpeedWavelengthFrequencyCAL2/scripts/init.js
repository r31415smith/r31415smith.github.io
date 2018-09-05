window.onload = function(){

try
  {

var parent = document.getElementById("audioHarmonicsPlayer")


var background = document.createElement("canvas");
background.setAttribute("width","980");
background.setAttribute("height","490");
background.style.position = "absolute";
background.style.top = "0px";
background.style.left = "0px";
//background.style.backgroundColor = "#99FFFF";

parent.appendChild(background);//move down
//-------------------------------------------------------



var graph = document.createElement("canvas");
graph.setAttribute("width","600");
graph.setAttribute("height","62");
graph.style.position = "absolute";
graph.style.top = "30px";
graph.style.left = "24px";
//graph.style.backgroundColor = "#999999";
//graph.style.display ="none";


parent.appendChild(graph);//move down
//---------------------------------------------------------------------------------------

var vol1 = document.createElement("canvas");
vol1.setAttribute("width","160");
vol1.setAttribute("height","28");
vol1.style.position = "absolute";
vol1.style.top = "96px";
vol1.style.left = "470px";
//vol1.style.backgroundColor = "#999999";
//graph.style.display ="none";


parent.appendChild(vol1);//move down
//---------------------------------------------------------------------------------------


var b = new backView(background);
var e = new control(graph,vol1);

 }
catch(err)
  {
 alert("problem:"+err);
  }


}
