/*************************************************************
 * 
 *************************************************************/
var labelView = function(x,y,w,h)
{
    
    this.htmlElement = document.createElement("canvas");
    
    
    this.htmlElement.setAttribute("width",w);
    this.htmlElement.setAttribute("height",h);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = y+"px";
    this.htmlElement.style.left = x+"px";
    //this.htmlElement.style.backgroundColor = "#FCC";
    this.htmlElement.style.zIndex = "500";
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

}
/*************************************************************
 * 
 *************************************************************/
labelView.prototype.draw = function(str)
{
    
    var ctx = this.htmlElement.getContext("2d");
    ctx.clearRect(0,0,this.w,this.h);
    
    ctx.save();
      ctx.textAlign="center"; 
      ctx.font = "12.0px 'Arial'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText(str, this.w/2, this.h/2);

    ctx.restore();
    
}
/*************************************************************
 * 
 *************************************************************/

/*************************************************************
 * 
 *************************************************************/
