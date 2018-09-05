window.onload= function(){
//use a try catch statement in case the "energyConservation" tag is not in the html,
//so other scripted progrems dont hang up
try
  {
var parAud = document.getElementById("parent");

var background = document.createElement("canvas");
background.setAttribute("width","980");
background.setAttribute("height","480");
background.style.position = "absolute";
background.style.top = "0px";
background.style.left = "0px";
//background.style.backgroundColor = "#FFCCCC";

parAud.appendChild(background);//move down
//---------------------------------------------------------------------------------------


var b = new backView(background);
var c = new control();


  }
catch(err)
  {
 alert("problem:"+err);
  }

//alert("fini"); // this is the last line of code that runs on load
}

/*------------------------------------- end class -------------------------------------------*/
