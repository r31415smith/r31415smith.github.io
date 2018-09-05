function output(left,top,width,height){

    this.htmlElement = document.createElement("input");

    this.value = "";

//define default input values
    this.height = height;
    this.width  = width;
    this.top    = top;
    this.left   = left;

/*========================================================================================================*/

    this.build = function(){
	this.htmlElement.style.position = "absolute";
	this.htmlElement.style.top = this.top+"px";
	this.htmlElement.style.left = this.left+"px";
	this.htmlElement.style.width = this.width+"px";
	this.htmlElement.style.height = this.height+"px";
	this.htmlElement.style.backgroundColor="#999999";
	this.htmlElement.style.borderStyle="solid";
	this.htmlElement.style.borderColor="#000000";
	this.htmlElement.style.fontSize="100%";
	this.htmlElement.style.zIndex = "500";	
	this.htmlElement.readOnly=true;
	
// These parameters appear to be inherited from CSS by iOS 7/Safari,Chrome differently from Firefox 
// They have to be set manually
	this.htmlElement.style.borderRadius= "0px";	
	this.htmlElement.style.paddingTop=   "0px";
	this.htmlElement.style.paddingBottom="0px";
	this.htmlElement.style.paddingLeft=  "0px";
	this.htmlElement.style.paddingRight= "0px";

    }

/*========================================================================================================*/

    this.setValue = function(v){
	this.htmlElement.value = v;
	this.value = v;
    }


//call all the function to make this button visable

    this.build();

	
}
