/*************************************************************
 * 
 *************************************************************/
var label = function(left,top,width,height,string){

    this.string = string;

    this.htmlElement = document.createElement("canvas");
    
    this.htmlElement.setAttribute("width",width);
    this.htmlElement.setAttribute("height",height);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = top+"px";
    this.htmlElement.style.left = left+"px";
    //this.htmlElement.style.backgroundColor = "#F2F9F9";/* */
    //this.htmlElement.style.border = "solid";
    this.htmlElement.style.zIndex = "500";
    
    this.draw();

}
/*************************************************************
 * 
 *************************************************************/
label.prototype.hide = function()
{
    var ctx = this.htmlElement.getContext("2d");
    
    ctx.clearRect(0,0,150,150);
    
}
/*************************************************************
 * 
 *************************************************************/
label.prototype.draw = function()
{
      var ctx = this.htmlElement.getContext("2d");

      ctx.save();
      ctx.font = "18.0px 'Arial'";
      ctx.fillText(this.string, 0, 20);
      ctx.restore();
}
/*************************************************************
 * 
 *************************************************************/


