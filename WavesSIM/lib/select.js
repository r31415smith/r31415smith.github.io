function select(left,top,width,height){
	
this.htmlElement = document.createElement("select");

this.optionsAr = new Array();
	
this.height = height;
this.width  = width;
this.top    = top;
this.left   = left;	

/*========================================================================================================*/
this.build = function(){
this.htmlElement.style.position = "absolute";
this.htmlElement.setAttribute("type","number");
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.width = this.width+"px";
this.htmlElement.style.height = this.height+"px";
this.htmlElement.style.backgroundColor="#FFFFFF";
this.htmlElement.style.borderStyle="solid";
this.htmlElement.style.borderColor="#000000";
this.htmlElement.style.fontSize="100%";
this.htmlElement.style.zIndex = "500";	

}
/*========================================================================================================*/
this.addOption = function(val,label){

var i = this.optionsAr.length;

this.optionsAr[i] = document.createElement("option");	
this.optionsAr[i].innerHTML = label;
this.optionsAr[i].value = val;
this.htmlElement.appendChild(this.optionsAr[i]);

}
/*========================================================================================================*/
this.makeEvents = function(c){
//bind events for non internet explorer borswers
if(window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("change",function(e){c.userFunction(this.value);});
}

//bind internet expolorer specific events
if(window.browserFlag=="IE"){
this.htmlElement.attachEvent("change",function(e){c.userFunction(this.value);});
}
	
}
/*========================================================================================================*/
this.userFunction = function(v){};
this.bind = function(evnt,fnctn){
	if(evnt=="change"){this.userFunction=fnctn;}
}


this.build();
this.makeEvents(this);

}
