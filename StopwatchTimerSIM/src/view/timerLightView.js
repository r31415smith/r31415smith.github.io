function timerLightView(){


this.htmlElement = document.createElement("canvas");

/***************************************************
 *
 ***************************************************/
this.build = function(){
this.htmlElement.setAttribute("width",130);
this.htmlElement.setAttribute("height",50);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "127px";
this.htmlElement.style.left = "333px";
//this.htmlElement.style.border = "solid";
//this.htmlElement.style.backgroundColor = "#CC99CC";
this.htmlElement.style.zIndex = "500";
	
}
/***************************************************
 *
 ***************************************************/
this.draw = function(a){

var ctx = this.htmlElement.getContext("2d");

ctx.clearRect(0,0,130,50);

	if(a==0){
	
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#00FF00";
		ctx.arc(32.5,24,17.5,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	
	}else{
	
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#FF0000";
		ctx.arc(89.5,24,17.5,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	
	}


}
/***************************************************
 *
 ***************************************************/
this.build();
this.draw(1);


}
