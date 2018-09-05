/*************************************************************
 * 
 *************************************************************/
var gridView = function()
{


    this.htmlElement = document.createElement("canvas");
    
    this.htmlElement.setAttribute("width",610);
    this.htmlElement.setAttribute("height",330);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = "0px";
    this.htmlElement.style.left = "0px";
    //this.htmlElement.style.backgroundColor = "#FFCCCC";/* */
    //this.htmlElement.style.border = "solid";
    this.htmlElement.style.zIndex = "500";

}
/*************************************************************
 * 
 *************************************************************/
gridView.prototype.hide = function()
{
    var ctx = this.htmlElement.getContext("2d");
    
    ctx.clearRect(0,0,610,330);
    
}
/*************************************************************
 * 
 *************************************************************/
gridView.prototype.draw = function()
{
    var ctx = this.htmlElement.getContext("2d");

    ctx.save();
    
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 0.25;

// Full width of tank is 2.0 m; space the grid 0.1 m apart, so there are 20 divisions
    var linespacing = 512 / 20 ;
    var x_offset = 7;
    var y_offset = 33;
    
    for(i=0;i<19;i++)
    {
        ctx.beginPath();
        ctx.moveTo(x_offset+linespacing + i*linespacing, y_offset+0);
        ctx.lineTo(x_offset+linespacing + i*linespacing, y_offset+256);
        ctx.stroke();
    }  
    
    
    for(i=0;i<12;i++)
    {
        ctx.beginPath();
        ctx.moveTo(x_offset+0, y_offset+linespacing + i*linespacing);
        ctx.lineTo(x_offset+512, y_offset+linespacing + i*linespacing);
        ctx.stroke();
    } /* */
      
ctx.strokeStyle = "#FFFFFF";
// Heavy subdivisions
    ctx.lineWidth = 0.5 ;
    linespacing *= 5 ;

    for(i=0;i<3;i++)
    {
        ctx.beginPath();
        ctx.moveTo(x_offset+linespacing + i*linespacing, y_offset+0);
        ctx.lineTo(x_offset+linespacing + i*linespacing, y_offset+256);
        ctx.stroke();
    }  
    
    for(i=0;i<1;i++)
    {
        ctx.beginPath();
        ctx.moveTo(x_offset+0, y_offset+linespacing + i*linespacing);
        ctx.lineTo(x_offset+512, y_offset+linespacing + i*linespacing);
        ctx.stroke();
    }  /* */


      
    ctx.restore();

      ctx.save();
      ctx.font = "14.0px 'Arial'";

// Grid labels; these should go on/off with the grid
      ctx.fillText("0 m",     2, 310);
      ctx.fillText("0.5",   127, 310);
      ctx.fillText("1.0",   252, 310);
      ctx.fillText("1.5",   380, 310);
      ctx.fillText("2.0",   510, 310);

      ctx.fillText("1.0",   525,  38);
      ctx.fillText("0.5",   525, 166);
      ctx.fillText("0 m",   525, 294);
     ctx.restore();
}
/*************************************************************
 * 
 *************************************************************/
