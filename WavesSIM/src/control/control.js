function control(){


this.logic = new logic();
this.data = new data();

this.playIntervalHandle;
this.playing_flag = 0;

/*==================================================*/
this.build = function(){

	this.parent = new parent("parent");
	
	this.targetWave = new targetWave(this);
	this.parent.add(this.targetWave);
	
	this.grid = new grid();
	this.parent.add(this.grid);
	
	this.graph = new graphView();
	this.parent.add(this.graph);
	
	this.keyPad = new keyPad();
	this.parent.add(this.keyPad);
	
//	this.timeIn = new output(592,43,150,26);
	this.timeIn = new output(600,65,100,25);
	this.parent.add(this.timeIn);
	
//	this.lamdaIn = new ergoInput(592,190,150,26,this.keyPad);
	this.lamdaIn = new ergoInput(600,195,100,25,this.keyPad);
	this.parent.add(this.lamdaIn);
	
//	this.fIn = new ergoInput(592,250,150,26,this.keyPad);
	this.fIn = new ergoInput(600,260,100,25,this.keyPad);
	this.parent.add(this.fIn);
	
//	this.phaseIn = new output(592,315,150,26);
	this.phaseIn = new output(600,325,100,25);
	this.parent.add(this.phaseIn);
	
//	this.ampIn = new ergoInput(592,377,150,26,this.keyPad);
	this.ampIn = new ergoInput(600,390,100,25,this.keyPad);
	this.parent.add(this.ampIn);

//	this.scoreOut = new output(592,433,150,26);
	this.scoreOut = new output(600,455,100,25);
	this.parent.add(this.scoreOut);

	this.stepBackBtn = new stepBack(125,400);
	this.parent.add(this.stepBackBtn);
	
	this.playStop = new playStop(210,400);
	this.parent.add(this.playStop);
	
	this.stepFrontBtn = new stepFront(300,400);
	this.parent.add(this.stepFrontBtn);
	
	this.reset = new reset(400,400);
	this.parent.add(this.reset);
	
	this.printButton = new printButton(470,400);
	this.parent.add(this.printButton);


}
/*==================================================*/
this.bindInputs = function(c){


//------------------------------
	this.lamdaIn.bind("out",function(a){
		c.logic.t = 0;
		c.logic.setL(a);
		c.newInputState();
	});
//------------------------------
	this.fIn.bind("out",function(a){
		c.logic.t = 0;
		c.logic.setF(a);
		c.newInputState();
	});
/*/------------------------------
	this.phaseIn.bind("out",function(a){
		c.logic.setPhase(a);
		c.newInputState();
	}); /* */
//------------------------------
	this.ampIn.bind("out",function(a){
		c.logic.t = 0;
		c.logic.setA(a);
		c.newInputState();
	});
//------------------------------

}
/*==================================================*/
this.bindButtons = function(c){

//------------------------------
	this.stepBackBtn.bind('mousedown',function(){
//		c.stepBack();
		c.stepFront(); // Waves move left-to-right
	});
//------------------------------
	this.playStop.bindRun(function(){
		c.play(c);
	});
//------------------------------
	this.playStop.bindStop(function(){
		c.stop();
	});
//------------------------------
	this.stepFrontBtn.bind('mousedown',function(){
//		c.stepFront();
		c.stepBack(); // Waves move left-to-right
	});
//------------------------------
	this.reset.bind('mousedown',function(){
		c.logic.reset();
		c.newInputState();
	});
//------------------------------
	this.printButton.bind('mousedown',function(){
		window.print();
	});
//------------------------------

}
/*==================================================*/
this.play = function(c){


if(this.playing_flag == 0){
	
	this.playing_flag = 1;
	
	this.playIntervalHandle = setInterval(function(){
	
//		c.logic.t = c.logic.t + 0.05; // Waves go right-to-left
		c.logic.t = c.logic.t - 0.05; // Waves go left-to-right
		c.drawGraph();
	
	},50);

}

}
/*==================================================*/
this.stop = function(){

	this.playing_flag = 0;
	clearInterval(this.playIntervalHandle);

}
/*==================================================*/
this.stepFront = function(){

	if(this.playing_flag == 0){
		this.logic.t = this.logic.t + 0.05;
		this.drawGraph();
	}
}
/*==================================================*/
this.stepBack = function(){
	
	if(this.playing_flag == 0){
		this.logic.t = this.logic.t - 0.05;
		this.drawGraph();
	}
}
/*==================================================*/
this.newInputState = function(){
	
	var score = this.logic.score();
	this.scoreOut.setValue(Math.floor(score));
	
	this.lamdaIn.setValue(round(this.logic.l));
	this.fIn.setValue(round(this.logic.f));
	this.phaseIn.setValue(round(this.logic.p*180/Math.PI));
	this.ampIn.setValue(round(this.logic.a));
	
	this.drawGraph();

}
/*==================================================*/
this.drawGraph = function(){
	
//	this.timeIn.setValue(Math.round(this.logic.t*10)/10);
	this.timeIn.setValue( Math.abs(this.logic.t.toFixed(2)) ); // Abs value when waves go left-to-right
	
	for(i=0;i<550;i++){
	
		this.graph.appendValue(i,this.logic.calculate(i));
		this.targetWave.appendValue(i,this.logic.calculateTarget(i));
	
	}/* */

	this.graph.draw();
	this.targetWave.draw();

}
/*==================================================*/
this.build();
this.bindInputs(this);
this.bindButtons(this);
this.newInputState();

}
