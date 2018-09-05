/*
**This class is responsable for graphong theresults of the simulation
*/
function grapher(canvas,graphTitle,color){
	
//memebers of the grapher class
this.canvas = canvas;

this.positionOfScale = 0;
// string the name of the canvas
this.graphtTite = graphTitle; 

this.color = color;
// points Array stores the values of both while the simulation is running
this.points = new Array();


//add a new set of values to the points array takes two values 
this.append = appendToArray;
//clears the array this is used when the simulations is restarted
this.clear = clearArray;
//draws the values stored in the array starting with a given point
this.draw = draw;
this.slide = slide;
this.scale = drawScale;



function clearArray(){
this.points = new Array();
this.i = 0;
}


function appendToArray(value){
this.points.push(value);
}



function draw(start){
// local varuables used in this function
var x = 0;
var y;
var ctx = this.canvas.getContext("2d");
ctx.save();
ctx.clearRect ( 0 , 0 , 600, 200 );
ctx.strokeStyle = "#FF0000";
//if(this.points.length>470){start = this.points.length - 471;} 
//paint the distance graph

	 ctx.beginPath();
	 ctx.strokeStyle = this.color;
	 ctx.moveTo(0,this.points[start]);

for (var i=start;i<this.points.length;i++){

y = this.points[i];
ctx.lineTo(x,y);
x = x+0.1;
}
ctx.stroke();

ctx.restore();


return start;
}//end of function

function slide(start){
// local varuables used in this function
//alert(start);
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


//position,l,ml,mh,h
function drawScale(p,scale){
var ctx = this.canvas.getContext("2d");
ctx.save();
var pstn = p*120;

for (var i=0;i<=130;i++){
if (i%5 == 0){
ctx.beginPath();
ctx.strokeStyle = this.color;
ctx.moveTo(pstn+0,i);
ctx.lineTo(pstn+2,i);
ctx.stroke();
}
if (i%35 == 0){
ctx.beginPath();
ctx.strokeStyle = this.color;
ctx.moveTo(pstn+2,i);
ctx.lineTo(pstn+4,i);
ctx.stroke();
}
}
ctx.font = "10px 'Myriad Pro'";
ctx.fillStyle = this.color;
ctx.fillText(Math.round(scale*100)/100,    pstn+5, 7);
ctx.fillText(Math.round(scale*100)/200,  pstn+5, 37.5);
ctx.fillText("0",      pstn+5, 73);
ctx.fillText(Math.round(scale*100)/-200, pstn+5, 107.5);
ctx.restore();
}//end of function*/

}



/*------------------------------------- end class -------------------------------------------*/

/*
**This class is responsable for graphong the labels for the and clearing the canvas
*/
function Mastergrapher(canvas,graphTitle,color){


//memebers of the grapher class
this.canvas = canvas;

//string the name of the canvas
this.graphtTite = graphTitle; 

this.color = color;

//draws the values stored in the array starting with a given point
this.draw = drawMaster;
this.slide = slideMaster;


function drawMaster(start,maxTime){

var x = 30;
//var y;
var ctx = this.canvas.getContext("2d");
ctx.save();
//var ctx = c
//clear the rectangle every time the function draws
ctx.clearRect ( 0 , 0 , 600, 200 );


//if(start<390){start = 0;}
//paint the distance graph
	 ctx.beginPath();
	 ctx.strokeStyle = "#999999";
	 ctx.moveTo(30,61);
     ctx.lineTo(480,61);
     ctx.stroke();

 
ctx.font = "18px 'Myriad Pro'";
ctx.fillStyle = "#000000";
ctx.fillText("0.00",    25, 135);
ctx.fillText(Math.round(1*maxTime/5*1000)/1000,    100, 140);
ctx.fillText(Math.round(2*maxTime/5*1000)/1000,    200, 140);
ctx.fillText(Math.round(3*maxTime/5*1000)/1000,    300, 140);
ctx.fillText(Math.round(4*maxTime/5*1000)/1000,    380, 140);
ctx.fillText(Math.round(maxTime*1000)/1000,        460, 140);
//alert(Math.round(maxTime*1000)/1000);
     for (i=start;i<=start+450;i++){
	 
	 if(i%18 == 0){
	 
	 ctx.beginPath();
	 ctx.strokeStyle = "#999999";
	 ctx.moveTo(x,0);
     ctx.lineTo(x,122);
     ctx.stroke();
	 }
	 
	 
	 if(i%90 == 0){
	 
	 ctx.beginPath();
	 ctx.strokeStyle = "#000000";
	 ctx.moveTo(x,0);
     ctx.lineTo(x,122);
     ctx.stroke();
	 }
	 
	 if(i%100 == 0){
	
	 }
	 x = x+1;
	 }

ctx.restore();
}


function slideMaster(start){

var x = 30;
//var y;
var ctx = this.canvas.getContext("2d");
ctx.save();
//clear the rectangle every time the function draws
ctx.clearRect ( 0 , 0 , 390, 200 );


//if(start<390){start = 0;}
//paint the distance graph
     
	 ctx.beginPath();
	 ctx.strokeStyle = "#999999";
	 ctx.moveTo(0,70);
     ctx.lineTo(390,70);
     ctx.stroke();
	
ctx.font = "10px 'Myriad Pro'";
ctx.fillStyle = "#999999";

     for (i=start;i<=start+390;i++){
	 
	 if(i%5 == 0){
	
	 ctx.beginPath();
	 ctx.strokeStyle = "#999999";
	 ctx.moveTo(x,135);
     ctx.lineTo(x,140);
     ctx.stroke();
	 }
	 
	 
	 if(i%50 == 0){
	 
	 ctx.beginPath();
	 ctx.strokeStyle = "#999999";
	 ctx.moveTo(x,130);
     ctx.lineTo(x,135);
     ctx.stroke();
	 }
	 
	 if(i%100 == 0){
	 ctx.fillText(i/50,    x, 125);
	 }
	 x = x+1;
	 }

ctx.restore();
}


}
