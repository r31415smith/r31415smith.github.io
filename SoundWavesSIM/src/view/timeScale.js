function timeScale(){

this.htmlElement = document.createElement("canvas");

this.height = 230;
this.width  = 650;
this.top    = 25;
this.left   = 114;


/*==================================================================================*/
this.build = function(){

this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
//this.htmlElement.style.backgroundColor = "#999999";
this.htmlElement.style.zIndex = "500";


}
/*==================================================================================*/
this.show = function(){
this.htmlElement.style.display = "";
}
this.hide = function(){
this.htmlElement.style.display = "none";
}
/*==================================================================================*/
this.draw = function(val){

var ctx = this.htmlElement.getContext("2d");

ctx.clearRect(0,0,650,230);

ctx.save();

ctx.fillStyle="#E6ECF7";
ctx.fillRect(0,0,650,182);
ctx.fillRect(0,185,650,45);

ctx.restore();


ctx.save();

ctx.strokeStyle="#96B7E0";

for(i=0;i<6;i++){
ctx.beginPath();
ctx.moveTo(i*130,195.1);
ctx.lineTo(i*130,205);
ctx.closePath();
ctx.stroke();
}

for(i=0;i<26;i++){
	
	
ctx.beginPath();
ctx.moveTo(i*26,0);
ctx.lineTo(i*26,182);
ctx.closePath();
ctx.stroke();
}

for(i=0;i<8;i++){
ctx.beginPath();
ctx.moveTo(0,i*26);
ctx.lineTo(650,i*26);
ctx.closePath();
ctx.stroke();
}

ctx.restore()

ctx.save();

ctx.fillStyle="#000000";
ctx.font="16px Arial";
ctx.textAlign="center";
ctx.fillText(round(val*0.25),130,220);
ctx.fillText(round(val*0.5),260,220);
ctx.fillText(round(val*0.75),390,220);
ctx.fillText(round(val),520,220);

ctx.restore();

ctx.save();

ctx.fillStyle="#000000";
ctx.font="16px Arial";
ctx.textAlign="center";
ctx.fillText("Time (s)",610,225);


ctx.restore();



}
/*==================================================================================*/
this.build();
//this.draw(5);

}
