window.onload = function(){

try
  {


var parent = document.getElementById("parent");


var background = document.createElement("canvas");
background.setAttribute("width","980");
//background.setAttribute("height","1500"); // Development purposes only
background.setAttribute("height","490");
background.style.position = "absolute";
background.style.top = "0px";
background.style.left = "0px";
background.style.backgroundColor = "#F2F9F9";
parent.appendChild(background);//move down
//-------------------------------------------

var b = new backView(background);
var c = new control();

}
catch(err)
  {
  alert(err.name + "\n" + err.message)
  }


}


