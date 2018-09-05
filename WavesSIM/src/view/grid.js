function grid(){



this.htmlElement = document.createElement("canvas");


/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){
this.htmlElement.setAttribute("width",551);
this.htmlElement.setAttribute("height",301);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "30px";
this.htmlElement.style.left = "10px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#FFFFFF";	
}
/*========================================================================================================*/
this.draw = function(){

var ctx = this.htmlElement.getContext("2d");

var x = 0;
var y = 0;

ctx.save();
ctx.fillStyle = "#F7941E";


for(i=0;i<7;i++){
ctx.fillRect(0,y,551,1);
y=y+50;
}


for(i=0;i<12;i++){
ctx.fillRect(x,0,1,301);
x=x+50;
}

ctx.restore();

}
/*========================================================================================================*/
this.build();
this.draw();

}


