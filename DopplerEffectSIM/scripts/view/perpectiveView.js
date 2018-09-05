function perspectiveView(){

this.htmlElement = document.createElement("div");
this.backGrid = document.createElement("canvas");
this.frontGrid = document.createElement("canvas");


this.speakerFront = document.getElementById("front");
this.speakerBack  = document.getElementById("back");
/*==================================================*/
this.build = function(){


this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "117px";
this.htmlElement.style.left = "2px";
this.htmlElement.style.zIndex = "500";
this.htmlElement.style.backgroundColor = "#FFCCCC";	



this.backGrid.setAttribute("width",748);
this.backGrid.setAttribute("height",300);
this.backGrid.style.position = "absolute";
this.backGrid.style.top = "0px";
this.backGrid.style.left = "0px";
this.backGrid.style.zIndex = "500";
//this.backGrid.style.backgroundColor = "#FFFFFF";

this.htmlElement.appendChild(this.backGrid);//move down

this.frontGrid.setAttribute("width",748);
this.frontGrid.setAttribute("height",300);
this.frontGrid.style.position = "absolute";
this.frontGrid.style.top = "0px";
this.frontGrid.style.left = "0px";
this.frontGrid.style.zIndex = "500";
//this.frontGrid.style.backgroundColor = "#FFCCCC";	

this.htmlElement.appendChild(this.frontGrid);//move down
}
/*==================================================*/
this.draw = function(){

var ctx = this.backGrid.getContext("2d");

//actual distance
var D;

//scale is 20 pixels per meeter
var s = 30;

//this is the variable of distance when converted to usable value
var d;


var Cy = 150;
var Cx = 375;

var Ix = 800;


var x;
var y;

ctx.lineWidth = 0.5;
ctx.strokeStyle = "#99CCFF";

D = 1;
ctx.save();
ctx.translate(0,300);

for(i=0;i<1000;i++){

d = Cx - D*s
x = (Cy - (Cy*Cx/d))*Ix*d/(Cy*Ix - Cy*d);

y = Cy/Ix*x;


    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(750,y);
    ctx.closePath();
    ctx.stroke();

D++;

}
ctx.restore();


var X= - 600;
for(i=0;i<51;i++){

	ctx.beginPath();
    ctx.moveTo(375,152);
    ctx.lineTo(X,300);
    ctx.closePath();
    ctx.stroke();

X = X + 40;

}



	
}
/*==================================================*/
this.drawSpeaker = function(D,orient){

var Cy = 150;
var Cx = 375;




//D=D-15;

//scale is 20 pixels per meeter
var s = 30;

//this is the variable of distance when converted to usable value
var d;


var Cy = 150;
var Cx = 375;

var Ix = 800;


var x;
var y;

try{

d = Cx - D*s
x = (Cy - (Cy*Cx/d))*Ix*d/(Cy*Ix - Cy*d);

y = Cy/Ix*x;

//alert(y)
var size = 2*(150+y);



var ctx = this.frontGrid.getContext("2d");



ctx.clearRect(0,0,750,300);
if(orient==-1){
ctx.drawImage(this.speakerFront,Cx-size/2,Cy-size/2,size,size);
}else{
ctx.drawImage(this.speakerBack,Cx-size/2,Cy-size/2,size,size);
}

}catch(er){
//alert(size+" : "+er);
}


}
/*==================================================*/
this.clear = function(){
var ctx = this.frontGrid.getContext("2d");

ctx.clearRect(0,0,750,300);
}
/*==================================================*/
this.build();
this.draw();



var c = this;
var x = 1;
/*
setInterval(function(){
c.drawFront(x);
x=x+5;
},20);
/* */


}
