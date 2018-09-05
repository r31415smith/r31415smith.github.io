function pendView(canvas){

    this.canvas = canvas;
    this.tm = 0;

    this.L;
    this.t = 0;
    
    this.playHandle;
    
    this.draw = draw;
    this.run = run;
    
    this.run(this);
    
    function draw(th){
	
	var ctx = this.canvas.getContext("2d");
	ctx.clearRect(0,0,400,400);
	
	//ctx.save();
	//ctx.beginPath();
	//ctx.fillStyle="#CC9966";
	//ctx.fillRect(20,10,200,20);
	//ctx.closePath();
	//ctx.fill();
	//ctx.restore();
	
	ctx.save();
	
	ctx.translate(120, 30);
	ctx.rotate(th);
	
	//ctx.save();
	ctx.beginPath();
	ctx.moveTo(0.0,0.0);
	ctx.lineTo(0.0, this.L*30);
	ctx.closePath();
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.stroke();
	ctx.closePath();
	
	//ctx.fillStyle="#999999";
	ctx.fillStyle="#333333";
	ctx.beginPath();
	//ctx.arc(0,this.L*30,15,0,Math.PI*2,true);
	ctx.arc(0,this.L*30,4,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
	//*/ 
    }
    
    function run(c){
	c.playHandle=setInterval(function(){
	    //alert(c.L);
	    c.t=c.t+0.1;
	    //var th = c.deltaTh*c.t;
	    var th = 0.3*Math.sin(Math.sqrt(9.81/c.L)*c.t);
	    
	    c.draw(th);
	    //alert(th);	
	},100);		
    }

}

/*------------------------------------- end class -------------------------------------------*/
