
function toggleSet(parent){

//contains the toggle sets//
this.set = new Array();

//used to keep track of which event is curently in use
this.index = NaN;

//refference to the parent object
this.parent = parent;

/*================================================================================*/
this.addToggle = function(l,t){
var ord = this.set.length;
this.set[ord]=new toggle(l,t);	

this.parent.add(this.set[ord]);	
this.addEvent(this.set[ord],ord)
}	
/*================================================================================*/

//bind to capture mousedown event from the element
this.addEvent = function(tggl,ord){

var c = this;
	
//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
tggl.htmlElement.addEventListener("mousedown",function(e){ c.handleEvent(ord);  });
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
tggl.htmlElement.attachEvent("mousedown",function(e){ c.handleEvent(ord);  });
}

//this is the touchsreenevents
if(window.platformFlag=="IOS"||window.platformFlag=="AND"){
tggl.htmlElement.addEventListener("touchstart",function(e){ c.handleEvent(ord); });
}
	
}
/*========================================================================================================*/
this.handleEvent = function(ord){

for(i=0;i<this.set.length;i++){
if(i!=ord){
this.set[i].running=0;
this.set[i].out_stoped_LF();
}

}

if(this.set[ord].running==1){
this.userFunction(ord);
}

}

/*========================================================================================================*/	
this.userFunction = function(a){}
this.bind = function(fnctn){
this.userFunction = fnctn;	
}

/*========================================================================================================*/
this.reset = function(){
for(i=0;i<this.set.length;i++){
this.set[i].running=0;
this.set[i].out_stoped_LF();
}	

}
/*========================================================================================================*/
this.setRight=function(ord){

for(i=0;i<this.set.length;i++){
this.set[i].right=0;
}
this.set[ord].right=1;
}





}
