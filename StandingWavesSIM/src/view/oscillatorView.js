/*************************************************************
 * 
 *************************************************************/
var oscillatorView = function()
{

    this.htmlElement = document.createElement("canvas");
    
    
    this.htmlElement.setAttribute("width",240);
    this.htmlElement.setAttribute("height",460);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = 12+"px";
    this.htmlElement.style.left = 1+"px";
    //this.htmlElement.style.backgroundColor = "#FCC";
    this.htmlElement.style.zIndex = "500";
    
    
    this.n = 1;
    
    
    
    //this.draw(350,10,109,50,0.1);
    //this.draw(350,8,109,50,0.1);
    //this.draw(350,6,109,50,0.1);
    //this.draw(350,4,109,50,0.1);
    
}
/*************************************************************
 * 
 *************************************************************/
oscillatorView.prototype.draw = function(n,A,alpha_coof)
{   
    
    var ctx = this.htmlElement.getContext("2d");
    ctx.clearRect(0,0,240,460);
    
    ctx.save();
    
    if(A<1)
    {
        ctx.beginPath();
        ctx.moveTo(109,50);
        ctx.lineTo(109,400);
        ctx.stroke();
    }else{
        //console.log(n);
        var L = 350/n;
        var x = 109;
        var y = 50.0;
        
        for(i=0;i<n;i++)
        {
            Y = y + i*L;
            this.drawWave(L,A*1.0,x,Y,alpha_coof*0.05);
            this.drawWave(L,A*0.8,x,Y,alpha_coof*0.10);
            this.drawWave(L,A*0.6,x,Y,alpha_coof*0.15);
            this.drawWave(L,A*0.4,x,Y,alpha_coof*0.20);
            this.drawWave(L,A*0.2,x,Y,alpha_coof*0.25);
            
        }/* */
    }
    
    ctx.restore();

}
/*************************************************************
 * 
 *************************************************************/
oscillatorView.prototype.drawWave = function(L,A,x,y,alpha)
{
    
    var x_xero = x;
    var y_zero = y;
    
    var A = A;//Amplitude
    var Y = L/2;
    
    var R = (Math.pow(A,2) +Math.pow(Y,2))/(2*A);
    var X = R - A;
    var th = Math.asin(Y/R);

    
    var ctx = this.htmlElement.getContext("2d");
    
    
    ctx.save();
    
    ctx.globalAlpha = alpha;
    
    ctx.beginPath();
    ctx.arc(x_xero+X,y_zero+Y,R,Math.PI-th,Math.PI+th,false);
    ctx.fill();
    //ctx.stroke();/* */


    ctx.beginPath();
    ctx.arc(x_xero-X,y_zero+Y,R,-th,th,false);
    ctx.fill();
    //ctx.stroke();


    ctx.restore();
    
}
/*************************************************************
 * 
 *************************************************************/
