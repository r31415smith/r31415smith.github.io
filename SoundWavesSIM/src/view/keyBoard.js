function keyBoard(){

this.htmlElement = document.createElement("div");	

this.height = 10;
this.width  = 10;
this.top    = 260;
this.left   = 5;

this.keyAr = new Array();
/*==================================================================================*/
this.build = function(){

this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.width = this.width+"px";
this.htmlElement.style.height = this.height+"px";
this.htmlElement.style.backgroundColor = "#999999";
this.htmlElement.style.zIndex = "500";


this.key0  = new whiteKeyLeft(0,0,0,'C');
this.htmlElement.appendChild(this.key0.canvas);
this.key1  = new blackKey(37,0,1,'C');
this.htmlElement.appendChild(this.key1.canvas);
this.key2  = new whiteKeyCenter(60,0,2,'D');
this.htmlElement.appendChild(this.key2.canvas);
this.key3  = new blackKey(97,0,3,'D');
this.htmlElement.appendChild(this.key3.canvas);
this.key4  = new whiteKeyRight(120,0,4,'E');
this.htmlElement.appendChild(this.key4.canvas);
this.key5  = new whiteKeyLeft(180,0,5,'F');
this.htmlElement.appendChild(this.key5.canvas);
this.key6  = new blackKey(216,0,6,'F');
this.htmlElement.appendChild(this.key6.canvas);
this.key7  = new whiteKeyCenter(240,0,7,'G');
this.htmlElement.appendChild(this.key7.canvas);
this.key8  = new blackKey(276,0,8,'G');
this.htmlElement.appendChild(this.key8.canvas);
this.key9  = new whiteKeyCenter(300,0,9,'A');
this.htmlElement.appendChild(this.key9.canvas);
this.key10 = new blackKey(336,0,10,'A');
this.htmlElement.appendChild(this.key10.canvas);
this.key11 = new whiteKeyRight(360,0,11,'B');
this.htmlElement.appendChild(this.key11.canvas);
this.key12 = new whiteKeyLeft(420,0,12,'C');
this.htmlElement.appendChild(this.key12.canvas);
this.key13 = new blackKey(456,0,13,'C');
this.htmlElement.appendChild(this.key13.canvas);
this.key14 = new whiteKeyCenter(480,0,14,'D');
this.htmlElement.appendChild(this.key14.canvas);
this.key15 = new blackKey(517,0,15,'D');
this.htmlElement.appendChild(this.key15.canvas);
this.key16 = new whiteKeyRight(540,0,16,'E');
this.htmlElement.appendChild(this.key16.canvas);/**/



}
/*==================================================================================*/
this.bindKeys = function(c){

for(i=0;i<17;i++){
eval("this.key"+i+".bind(function(a){c.handleKeyPress(a);});")
}

}
/*==================================================================================*/
this.handleKeyPress = function(a){


for(i=0;i<17;i++){
if(i!=a){
eval("this.key"+i+".drawKeyUp();");
}
}

eval("this.key"+a+".drawKeyDown();");
this.userFunction(a);
}
/*==================================================================================*/
this.userFunction = function(a){}
this.bind = function(funct){
this.userFunction = funct;	
}


this.build();
this.bindKeys(this);


}
