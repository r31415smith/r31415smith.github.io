/*************************************************************
 * 
 *************************************************************/
var tankView = function(left,top,logic)
{
    this.htmlElement = document.createElement("canvas");
    this.logic = logic;

    this.width  = this.logic.width ; // Full size of tank
    this.width  = this.logic.width ; // Full size of tank
    this.height = this.logic.height ;
    this.x_bin = this.logic.x_bin ; // how many pixels to bin in the x-dimension
    this.y_bin = this.logic.y_bin ;

    this.top    = top;
    this.left   = left;
    
    this.htmlElement.setAttribute("width",this.width);
    this.htmlElement.setAttribute("height",this.height);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = this.top+"px";
    this.htmlElement.style.left = this.left+"px";
    //this.htmlElement.style.backgroundColor = "#FCC";
    this.htmlElement.style.border = "solid";
    this.htmlElement.style.zIndex = "500";
        
    
    this.colors = new Array();
    var H, S, B ;
    var RGB ;
    for ( var i=0 ; i<=50 ; i+=1 ) {
	H = 213 ;
	S =   0 + i*2 ;
	B = 100 - i*1 ;
	this.colors[i] = convertHSBtoRGB(H,S,B) ;
    }
// Hard-code the color dark gray for plotting boundaries
    this.colors[51] = '#333333' ;

/* // Five hard-coded colors
    this.colors = new Array();
    this.colors[0] = '#CFD8EE'
    this.colors[1] = '#A5BAE0'
    this.colors[2] = '#7D9FD3'
    this.colors[3] = '#5688C7'
    this.colors[4] = '#054070' 
*/

   
}
/*************************************************************
 * 
 *************************************************************/
tankView.prototype.clear = function()
{
    var ctx = this.htmlElement.getContext("2d");
    
    ctx.clearRect(0,0,this.width,this.height);
    ctx.save();

    for ( x=0 ; x<this.width ; x+=this.x_bin ){

        for ( y=0 ; y<this.height ; y+=this.y_bin ){
            ctx.fillStyle = colors[tankModel[x][y]];
            ctx.fillRect(x,y,this.x_bin,this.y_bin);
        }

    }

    ctx.restore();
}
/*************************************************************
 * 
 *************************************************************/
tankView.prototype.drawTank = function(tankModel)
{   
    
    this.width  = this.logic.width ; // Full size of tank
    this.width  = this.logic.width ; // Full size of tank
    this.height = this.logic.height ;
    this.x_bin = this.logic.x_bin ; // how many pixels to bin in the x-dimension
    this.y_bin = this.logic.y_bin ;

//    tankModel[x][y]
    var colors = this.colors;
    var ctx = this.htmlElement.getContext("2d");
    
    ctx.clearRect(0,0,this.width,this.height);
    ctx.save();

    for ( x=0 ; x<this.width ; x+=this.x_bin ){

        for ( y=0 ; y<this.height ; y+=this.y_bin ){
            ctx.fillStyle = colors[tankModel[x][y]];
            ctx.fillRect(x,y,this.x_bin,this.y_bin);
        }

    }

    ctx.restore();
    
}
/*************************************************************
 * 
 *************************************************************/

/* 
   Input:  H, S, B (from Adobe Illustrator)
   Normalize:  h=H/360, s=S/100, b=B/100
   Output:  red + green + blue in hex, i.e., '#23B390'
   0 <= red,green,blue <= 255 (integers)
*/
function convertHSBtoRGB(H, S, B) {

    var h, s, b ;
    var red, green, blue ;
    var i, f, p, q, t ;

// 0 <= h,s,b <= 1
    h = H / 360 ;
    s = S / 100 ;
    b = B / 100 ;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = b * (1 - s);
    q = b * (1 - f * s);
    t = b * (1 - (1 - f) * s);
    switch (i % 6) {
	
    case 0: 
	red = b; 
	green = t; 
	blue = p; 
	break;
	
    case 1: 
	red = q; 
	green = b; 
	blue = p; 
	break;

    case 2: 
	red = p;
	green = b; 
	blue = t; 
	break;
	
    case 3: 
	red = p; 
	green = q;
	blue = b; 
	break;
	
    case 4: 
	red = t;
	green = p;
	blue = b; 
	break;
	
    case 5: 
	red = b;
	green = p;
	blue = q; 
	break;

    }
    red = Math.floor( red * 255 ) ;
    green = Math.floor( green * 255 ) ;
    blue = Math.floor( blue * 255 ) ;
    var RGB = '#' + red.toString(16) + green.toString(16) + blue.toString(16) ;

    return RGB ;
}

