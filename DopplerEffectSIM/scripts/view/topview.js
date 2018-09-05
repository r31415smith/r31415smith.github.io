function topView(){

this.htmlElement = document.createElement("div");
this.backGrid = document.createElement("canvas");
this.frontGrid = document.createElement("canvas");


this.guy = document.getElementById("guy");
this.speakerSide = document.getElementById("side");

/*==================================================*/
this.build = function(){



this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "26px";
this.htmlElement.style.left = "1px";
this.htmlElement.style.zIndex = "500";
this.htmlElement.style.backgroundColor = "#FFCCCC";	



this.backGrid.setAttribute("width",748);
this.backGrid.setAttribute("height",90);
this.backGrid.style.position = "absolute";
this.backGrid.style.top = "0px";
this.backGrid.style.left = "0px";
this.backGrid.style.zIndex = "500";
//this.backGrid.style.backgroundColor = "#CCCCFF";	

this.htmlElement.appendChild(this.backGrid);//move down

this.frontGrid.setAttribute("width",748);
this.frontGrid.setAttribute("height",90);
this.frontGrid.style.position = "absolute";
this.frontGrid.style.top = "0px";
this.frontGrid.style.left = "0px";
this.frontGrid.style.zIndex = "500";
//this.frontGrid.style.backgroundColor = "#FFCCCC";	

this.htmlElement.appendChild(this.frontGrid);//move down


}
/*==================================================*/
this.clear = function(){
var ctx = this.frontGrid.getContext("2d");
ctx.clearRect(0,0,750,100);

}
/*==================================================*/
this.draw = function(){

var ctx = this.backGrid.getContext("2d");

ctx.lineWidth = 0.5;
ctx.strokeStyle = "#9999FF";
var X = 0;

for(i=0;i<30;i++){


    ctx.beginPath();
    ctx.moveTo(X,0);
    ctx.lineTo(X,200);
    ctx.closePath();
    ctx.stroke();

X = X + 25;

}



}
/*==================================================*/
this.drawMan = function(pos,orientation){

var ctx = this.frontGrid.getContext("2d");

      ctx.save();
      
      if(orientation==-1){
      ctx.translate(5+pos*25,16);
      }else{
      ctx.translate(40+pos*25,72);
	  ctx.rotate(-Math.PI/1.0);
      }
      
      
      

      
 // layer1/Group


//ctx.clearRect(0,0,750,300);
ctx.drawImage(this.guy,0,0,35,55);

	  ctx.restore();
}
/*==================================================*/
this.drawSpeaker = function(pos,orientation){

var ctx = this.frontGrid.getContext("2d");

      ctx.save();
  

  
      if(orientation==-1){
	  ctx.translate(50+pos*25,66);
	  ctx.rotate(-Math.PI/1.0);
      }else{
	  ctx.translate(25+pos*25,15);
      }    

      

      


//ctx.clearRect(0,0,750,300);
ctx.drawImage(this.speakerSide,0,0,30,55);

	  ctx.restore();

}
/*==================================================*/
this.build();
this.draw();
this.drawMan(11,1);
this.drawSpeaker(10,-1);


}
