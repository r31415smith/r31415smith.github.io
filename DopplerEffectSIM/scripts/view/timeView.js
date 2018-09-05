function timeView(){

    this.htmlElement = document.createElement("div");
    this.backGrid = document.createElement("canvas");
    this.frontGrid = document.createElement("canvas");
    
    this.guy = document.getElementById("guy");
    this.speakerSide = document.getElementById("side");

/*==================================================*/

    this.build = function(){
	
	this.htmlElement.style.position = "absolute";
	this.htmlElement.style.top = "118px";
	this.htmlElement.style.left = "1px";
	this.htmlElement.style.zIndex = "500";
	//this.htmlElement.style.backgroundColor = "#FFCCCC";	
	
	this.backGrid.setAttribute("width",300);
	this.backGrid.setAttribute("height",150);
	this.backGrid.style.position = "absolute";
	this.backGrid.style.top = "0px";
	this.backGrid.style.left = "0px";
	this.backGrid.style.zIndex = "500";
	//this.backGrid.style.backgroundColor = "#CCCCFF";	
	
	this.htmlElement.appendChild(this.backGrid);//move down
	
	this.frontGrid.setAttribute("width",300);
	this.frontGrid.setAttribute("height",150);
	this.frontGrid.style.position = "absolute";
	this.frontGrid.style.top = "0px";
	this.frontGrid.style.left = "0px";
	this.frontGrid.style.zIndex = "500";
	//this.frontGrid.style.backgroundColor = "#FFCCCC";	
	
	this.htmlElement.appendChild(this.frontGrid);//move down
	
    }

/*==================================================*/

    this.clear = function(){
	var ctx = this.frontGrid.getContext("2d");
	ctx.clearRect(0,0,750,100);
	
    }

/*==================================================*/

    this.drawBack = function(){
	
	var ctx = this.backGrid.getContext("2d");
	
	// layer1/Observed frequency
	ctx.save();
	ctx.font = "Bold 18.0px 'Arial'";
	ctx.fillText("Observed frequency", 0.0, 130.9);
	
	// layer1/Time ms
	ctx.fillText("Time (m:s)", 4.0, 51.9);
	ctx.restore();
	
    }

/*==================================================*/

    this.drawTime = function(t){
	
	var ctx = this.frontGrid.getContext("2d");
	
	//var h = Math.floor(t/3600);
	var m = Math.floor(t/60);
	var s = Math.floor(t - m*60);
	var s_d = Math.floor((t-m*60-s)*100);
	
	if(m<10){m="0"+m;}
	if(s<10){s="0"+s;}
	
	var string = m+":"+s+"."+s_d;
	
	ctx.clearRect(0,0,300,150);
	// layer2/000000
	ctx.save();
	ctx.font = "Bold 36.0px 'Arial'";
	ctx.fillStyle = "rgb(134, 22, 24)";
	ctx.fillText(string, 1.0, 30.9);
	
	// layer2/4111 Hz
	//ctx.fillText("411.1 Hz", 1.0, 109.9);
	ctx.restore();
    }

/*==================================================*/

    this.drawF = function(f){
	
	var ctx = this.frontGrid.getContext("2d");
	
	// layer2/000000
	ctx.save();
	ctx.font = "Bold 36.0px 'Arial'";
	ctx.fillStyle = "rgb(134, 22, 24)";
	
	ctx.fillText(Math.round(f*10)/10+" Hz", 1.0, 109.9);
	ctx.restore();
    }

/*==================================================*/

    this.build();
    this.drawBack();
    
}
