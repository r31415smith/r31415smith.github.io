function videoView(control){


this.control = control;




this.htmlElement = document.createElement("canvas");
this.ctx = this.htmlElement.getContext("2d");


this.playIntervalHandle;


/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){

this.htmlElement.setAttribute("width",550);
this.htmlElement.setAttribute("height",300);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "30px";
this.htmlElement.style.left = "10px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#FF9999";



}
/*========================================================================================================*/
this.play = function(){

this.in_progress = 1;
var interval = 1000/this.fps;
var c = this;

this.playIntervalHandle = setInterval(function(){


},interval);

}
/*========================================================================================================*/
this.stop = function(){


}
/*========================================================================================================*/
this.stepFront = function(){


}
/*========================================================================================================*/
this.stepBack = function(){


}
/*========================================================================================================*/
this.reset = function(){



}
/*========================================================================================================*/
this.draw = function(c){


}
/*========================================================================================================*/
this.build();
this.draw(this);

}


