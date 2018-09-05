/*
** graphic element 
*/
function grapher(left,top,width,height){

this.htmlElement = document.createElement("canvas");

//----------------- plot array holds ---------------
this.plotAr = new Array();
this.dataAr = new Array();



this.numberOfPlots = 0;
this.start = 0;//starting value of the plot, should be the same for all the plots

this.visableFlag = 1;

this.left = left;
this.top  = top;

this.height = height;
this.width  = width;

//this.vertMaxAr = height/2;
this.vertMaxAr = 5;
this.horizMaxAr = width;

/*========================================================================================================*/
// --- build the canvas element for the grapher ---
this.build = function(){

this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#0099CC";	
}
/*========================================================================================================*/
this.appendValue = function(v){
this.dataAr.push(v);

//var a = (this.height/2) - (this.height/2)*(v/this.vertMaxAr);

var a = (this.height/2)*(1-v/this.vertMaxAr)

this.plotAr.push(a);
this.draw();	
//alert(this.Height/2);
}
/*========================================================================================================*/
this.clearPlot = function(){
this.plotAr = new Array();	
}
this.clearData = function(){
this.dataAr = new Array();
this.plotAr = new Array();
}

/*========================================================================================================*/
this.setMaxY = function(a){
	
}
this.setMaxX = function(a){
	
}
/*========================================================================================================*/
this.draw = function(){
// --- define function variables ---
var	start = this.start;

var x = 0;
var y;
if(this.plotAr.length>this.width){start = this.plotAr.length - this.width - 1;} 

// --- start drawing the plot ---
var ctx = this.htmlElement.getContext("2d");

ctx.clearRect(0,0,600,200);
ctx.save();

ctx.beginPath();
ctx.strokeStyle = this.color;
ctx.moveTo(0,this.plotAr[start]);
 
for (var i=start;i<this.plotAr.length;i++){
x = x+1.2;
y = this.plotAr[i];
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.restore();

return start;
}//end of function
/*========================================================================================================*/
this.slide = function(){
// local varuables used in this function
var	start = this.start;
var x = 0;
var y;
var ctx = this.canvas.getContext("2d");
ctx.save();
//clear the rectangle every time the function draws
//ctx.clearRect ( 0 , 0 , 390, 200 );
 

//paint the distance graph
  
	 ctx.beginPath();
	 ctx.strokeStyle = this.color;
	 ctx.moveTo(0,this.points[start]);
     
for (var i=start;i<this.points.length;i++){
x = x+1;
y = this.points[i];
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.restore();
}//end of unction
/*========================================================================================================*/
this.hide = function(){
var ctx = this.htmlElement.getContext("2d");http://upload.wikimedia.org/wikipedia/commons/7/7a/2004_Kawasaki_Ninja_250_engine_8.jpg

var x = this.width;
var y = this.height;

ctx.clearRect(0,0,x,y);

}
/*========================================================================================================*/
this.build();

}
