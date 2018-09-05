function graphView(){

this.htmlElement = document.createElement("canvas");
this.ball = document.getElementById("ball2");


this.data = new Float32Array(550);

/*========================================================================================================*/
this.build = function(){

this.htmlElement.setAttribute("width","550");
this.htmlElement.setAttribute("height","300");
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "30px";
this.htmlElement.style.left = "10px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#0099CC";	
}
/*========================================================================================================*/
this.appendValue = function(i,v){
this.data[i] = v;	
}
/*========================================================================================================*/
this.draw = function(){



var ctx = this.htmlElement.getContext("2d");
ctx.clearRect(0,0,600,400);

ctx.save();
ctx.strokeStyle = "#FF0000";
ctx.beginPath();

ctx.moveTo(0,150);
 
for(x=0;x<550;x++){
ctx.lineTo(x,this.data[x]);
}

ctx.stroke();
ctx.restore();


var x = 300;
var y = this.data[300];

ctx.save();
ctx.strokeStyle = "#FF0000";
//ctx.drawImage(this.ball,x,y,20,20);


ctx.beginPath();
ctx.arc(x,y,15,0,2*Math.PI);
ctx.stroke();

ctx.restore();


}//end of function
/*========================================================================================================*/
this.build();

}
