function targetWave(){


this.data = new Float32Array(550);
this.htmlElement = document.createElement("canvas");
this.ball = document.getElementById("ball");


/*==================================================*/
this.build = function(){

this.htmlElement.setAttribute("width",550);
this.htmlElement.setAttribute("height",300);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "30px";
this.htmlElement.style.left = "10px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#FF9999";

}
/*==================================================*/
this.draw = function(){

var y;
var ctx = this.htmlElement.getContext("2d");

ctx.save();
ctx.clearRect(0,0,550,300);
ctx.beginPath();
ctx.fillStyle = "#99CCFF";
ctx.moveTo(0,150);

for(x=0;x<550;x++){
ctx.lineTo(x,this.data[x]);
}

ctx.lineTo(550,300);
ctx.lineTo(0,300);
ctx.lineTo(0,150);

ctx.fill();
ctx.restore();




var x = 290;
var y = this.data[300]-10;

ctx.save();
ctx.drawImage(this.ball,x,y,20,20);
ctx.restore();


}
/*==================================================*/
this.appendValue = function(i,v){
this.data[i] = v;	
}
/*==================================================*/
this.build();


}
