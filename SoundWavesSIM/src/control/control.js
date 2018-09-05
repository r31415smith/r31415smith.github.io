function control(){


    this.timeEvent;
    
	try
	{
		if (window.platformFlag == "IOS")
		{
			this.sine = new SineErgoIOS(4);
		}
		else
		{
			this.sine = new SineErgo(4);
		}
	}
	catch (err)
	{
		this.sine = new SineEmpty();
		alert("Your browser may not generate Audio.");
		
	}

this.logic = new logic();
this.graph_disstance_flag = 0;
this.mute_flag = 0;
/*==================================================================================*/
this.build = function(){

this.parent = new parent("parent");




this.distScale = new distScale();
this.parent.add(this.distScale);

this.timeScale = new timeScale();
this.parent.add(this.timeScale);

this.targetGraph = new grapher(114,52,650,130,"#FF0000");
this.parent.add(this.targetGraph);

this.graph = new grapher(114,52,650,130,"#000000");
this.parent.add(this.graph);

this.keyBoard = new keyBoard();
this.parent.add(this.keyBoard);


this.keyPad = new keyPad()
this.parent.add(this.keyPad);

this.octaveIn = new ergoInput(335,455,100,25,this.keyPad);
this.parent.add(this.octaveIn);

//this.amplIn = new ergoInput(5,55,90,25,this.keyPad);
this.amplIn = new ergoInput(5,65,90,25,this.keyPad);
this.parent.add(this.amplIn);

//this.xMaxlIn = new ergoInput(585,205,90,25,this.keyPad);
//this.parent.add(this.xMaxlIn);

this.fOut = new ergoInput(620,295,100,25,this.keyPad);
this.parent.add(this.fOut);
this.wOut = new ergoInput(620,375,100,25,this.keyPad);
this.parent.add(this.wOut);
this.aOut = new ergoInput(620,455,100,25,this.keyPad);
this.parent.add(this.aOut);

this.fOut.htmlElement.style.backgroundColor="#FFFFFF";
this.wOut.htmlElement.style.backgroundColor="#4F4F4F";	

this.scoreOut = new output(470,455,100,25);
this.parent.add(this.scoreOut);

this.distToggle = new toggle(10,120);
this.distToggle.string = "Distance";
this.parent.add(this.distToggle);
this.distToggle.running_LF();
this.distToggle.running = 1;


this.timeToggle = new toggle(10,181);
this.timeToggle.string = "Time";
this.parent.add(this.timeToggle);
this.timeToggle.stoped_LF();
this.timeToggle.running = 0;


this.mute = new muteButton(0,430);
this.parent.add(this.mute);

this.volumeControl = new volControl(80,440,150,30);
this.parent.add(this.volumeControl);

this.prntBtn = new printButton(240,440);
this.parent.add(this.prntBtn);

//this.reset = new resetButton(180,440);
//this.parent.add(this.reset);

this.scaleControl = new scaleControl();
this.parent.add(this.scaleControl);


}
/*==================================================================================*/
this.bindKeyBoard = function(c){

this.keyBoard.bind(function(a){
    c.logic.setKeyID(a);
    c.newState();
});

this.mute.bindRun(function(){c.mute_flag = 1;c.newState();});
this.mute.bindStop(function(){c.mute_flag = 0;c.newState();});

}
/*==================================================================================*/
this.bindInputs = function(c){


this.octaveIn.bind("out",function(a){ c.logic.setOctave(a);c.newState();});

this.amplIn.bind("out",function(a){ c.logic.maxY = a;c.newState();});

/*
this.xMaxlIn.bind("out",function(a){
if(c.graph_disstance_flag == 0){
c.logic.maxXtime = a;
}else{
c.logic.maxXdist = a;
}
c.newState();
});
/* */



this.scaleControl.bind("up",function(){ 
    if(c.graph_disstance_flag == 0){
	c.logic.timeScale_up();
    }else{
	c.logic.distScale_up();
    }
    c.newState();

});

this.scaleControl.bind("down",function(){ 
    if(c.graph_disstance_flag == 0){
	c.logic.timeScale_down();
    }else{
	c.logic.distScale_down();
    }
    c.newState();

});



this.fOut.bind("out",function(a){ 
    c.logic.setF(a);
    c.newState();
    if(c.graph_disstance_flag == 0){     // time graph
	c.wOut.htmlElement.style.backgroundColor="#4F4F4F"; // Gray out wavelength
	c.fOut.htmlElement.style.backgroundColor="#FFFFFF"; // White for frequency		
    } else {  // distance graph
	c.fOut.htmlElement.style.backgroundColor="#4F4F4F"; // Gray out frequency
	c.wOut.htmlElement.style.backgroundColor="#FFFFFF"; // White for wavelength
    }
});
this.wOut.bind("out",function(a){ 
    c.logic.setW(a);
    c.newState();
    if(c.graph_disstance_flag == 0){   // time graph
	c.wOut.htmlElement.style.backgroundColor="#4F4F4F"; // Gray out wavelength
	c.fOut.htmlElement.style.backgroundColor="#FFFFFF"; // White for frequency
    } else {  // distance graph
	c.fOut.htmlElement.style.backgroundColor="#4F4F4F"; // Gray out frequency
	c.wOut.htmlElement.style.backgroundColor="#FFFFFF"; // White for wavelength
    }
});
this.aOut.bind("out",function(a){ 
    c.logic.setA(a);
    c.newState();
});



//----------------------------------------//
this.distToggle.bindStop(function(){


c.timeToggle.running_LF();
c.timeToggle.running = 1;


c.graph_disstance_flag = 1;
c.newState();
c.fOut.htmlElement.style.backgroundColor="#4F4F4F";
c.wOut.htmlElement.style.backgroundColor="#FFFFFF";		
});
//----------------------------------------//
this.timeToggle.bindStop(function(){

c.distToggle.running_LF();
c.distToggle.running = 1;

c.graph_disstance_flag = 0;
c.newState();

c.fOut.htmlElement.style.backgroundColor="#FFFFFF";
c.wOut.htmlElement.style.backgroundColor="#4F4F4F";	
});
//----------------------------------------//

this.prntBtn.bind("mousedown",function(){ window.print();});

this.volumeControl.bind("slide",function(a){ 

var vol = a/120;
c.logic.A_target = vol;
volume = vol;
c.drawVolume();


});

	
}
/*==================================================================================*/
this.newState = function(){

    this.logic.calcFrequency();
    this.logic.calcScore();
    
    this.sine.setFrequency(0,this.logic.F_target);
    this.sine.setVolume(0,this.logic.A_target*this.mute_flag);
    
    this.octaveIn.setValue(this.logic.Octave);
    this.amplIn.setValue(this.logic.maxY);
    
    this.fOut.setValue(this.logic.F);
    this.wOut.setValue(this.logic.W);
    this.aOut.setValue(this.logic.A);
    
    this.scoreOut.setValue(Math.round(this.logic.score));

//    if(this.graph_disstance_flag == 0){
// Set background color appropriate for plotting amplitude against distance
//    this.wOut.htmlElement.style.backgroundColor="#FFFFFF";
//    this.fOut.htmlElement.style.backgroundColor="#4F4F4F";	
//	c.fOut.htmlElement.style.backgroundColor="#4F4F4F";
//	c.wOut.htmlElement.style.backgroundColor="#FFFFFF";		
//    } else {
// Set background color appropriate for plotting amplitude against time
//    this.fOut.htmlElement.style.backgroundColor="#FFFFFF";
//    this.2Out.htmlElement.style.backgroundColor="#4F4F4F";	
//	c.wOut.htmlElement.style.backgroundColor="#4F4F4F";
//	c.fOut.htmlElement.style.backgroundColor="#FFFFFF";		
//    }

/*
 * draw the distance or time scale here and make it visable or invisable 
 */
    if(this.graph_disstance_flag == 0){
	this.timeScale.draw(this.logic.maxXtime);
	this.timeScale.show();
	this.distScale.hide();
    }else{
	this.distScale.draw(this.logic.maxXdist);
	this.distScale.show();
	this.timeScale.hide();
    }
/* */


//draw user graph
    this.drawUserGraph();
//draw target graph
    this.drawVolume();

}
/*==================================================================================*/
this.drawUserGraph = function(){


var n = 0;


//this.logic.prepTargetVars();
this.graph.clearData();

if(this.graph_disstance_flag == 0){

var delta_T = this.logic.maxXtime*1/520;
var D = 0.2/this.logic.F;

if(delta_T<=D){//get real value

	for(i=0;i<650;i++){
	n = n+0.0019;
	this.graph.appendValue(this.logic.calculateForTime(n));
	}

}else{//invent values here
	
	for(i=0;i<650;i++){
		if(i%2==0){this.targetGraph.appendValue(this.logic.A);
		}else{this.targetGraph.appendValue(-this.logic.At);}
	}

}

this.graph.draw(0);



}else{//--------------------------------------------------------------

var delta_W = this.logic.maxXdist/520;
var D = 0.2*this.logic.W;

if(delta_W<=D){//get real value

	for(i=0;i<650;i++){
	n = n+0.0019;
	this.graph.appendValue(this.logic.calculateForDistance(n));
	}

}else{//invent values here
	
	for(i=0;i<650;i++){
		if(i%2==0){this.targetGraph.appendValue(this.logic.A);
		}else{this.targetGraph.appendValue(-this.logic.A);}
	}

}

this.graph.draw(0);

}


}
/*==================================================================================*/
this.drawVolume = function(){
var n = 0;


this.logic.prepTargetVars();
this.targetGraph.clearData();

if(this.graph_disstance_flag == 0){

var delta_T = this.logic.maxXtime*1/520;
var D = 0.2/this.logic.F_target;

if(delta_T<=D){//get real value

	for(i=0;i<650;i++){
	n = n+0.0019;
	this.targetGraph.appendValue(this.logic.calcTargetTime(n));
	}

}else{//invent values here
	
	for(i=0;i<650;i++){
		if(i%2==0){this.targetGraph.appendValue(this.logic.A_target);
		}else{this.targetGraph.appendValue(-this.logic.A_target);}
	}

}

this.targetGraph.draw(0);



}else{//--------------------------------------------------------------

var delta_W = this.logic.maxXdist/520;
var D = 0.2*this.logic.W_target;

if(delta_W<=D){//get real value

	for(i=0;i<650;i++){
	n = n+0.0019;
	this.targetGraph.appendValue(this.logic.calcTargetDist(n));
	}

}else{//invent values here
	
	for(i=0;i<650;i++){
		if(i%2==0){this.targetGraph.appendValue(this.logic.A_target);
		}else{this.targetGraph.appendValue(-this.logic.A_target);}
	}

}

this.targetGraph.draw(0);

}

	
}/* -- end of drawVolume function -- */

/*==================================================================================*/
// --------------------------------- sound producer ------------------------------- //
/*==================================================================================*/


/*==================================================================================*/
this.build();
this.bindKeyBoard(this);
this.bindInputs(this);


this.newState()

}
