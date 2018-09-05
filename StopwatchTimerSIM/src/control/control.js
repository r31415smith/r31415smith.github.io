/*************************************************************
 * 
 *************************************************************/




function control(){

this.logic = new logic();
	
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


this.timedIntervalHandle = null;


this.t_start = 0;
this.mode = 0;
this.vol  = 1;
this.mute = 1;
this.soundInterval = 1000;
this.countDownFrom = 10000;

this.timeOfPause = 0;
this.durationOfPause = 0;
/***************************************************
 *
 ***************************************************/
this.build = function(){
	
	this.parent = new parent("parent");
	

	

	
	this.totalTOut = new output(88,155,98,36);
	this.parent.add(this.totalTOut);
	
	this.hOut = new output(30,294,40,25);
	this.parent.add(this.hOut);
	this.mOut = new output(100,294,40,25);
	this.parent.add(this.mOut);
	this.sOut = new output(180,294,60,25);
	this.parent.add(this.sOut);
	
	

	
	this.tOut = new output(340,195,100,25);
	this.parent.add(this.tOut);


	
	this.minTenOut = new output(560,273,20,30);
	this.parent.add(this.minTenOut);
	this.minOnesOut = new output(590,273,20,30);
	this.parent.add(this.minOnesOut);
	this.secTenOut = new output(625,273,20,30);
	this.parent.add(this.secTenOut);
	this.secOnesOut = new output(655,273,20,30);
	this.parent.add(this.secOnesOut);	
	this.secDecOnesOut = new output(690,273,20,30);
	this.parent.add(this.secDecOnesOut);
	this.secDecsOut = new output(718,273,20,30);
	this.parent.add(this.secDecsOut);
	
	
	this.stopWatchRunBtn = new runButton(5,70);
	this.parent.add(this.stopWatchRunBtn);
	this.stopWatchReset = new resetButton(195,70);
	this.parent.add(this.stopWatchReset);
	
	this.timerLightView = new timerLightView();
	this.parent.add(this.timerLightView);
	
	this.timeRunBtn = new runButton(300,240);
	this.parent.add(this.timeRunBtn);
	this.timeReset = new resetButton(410,240);
	this.parent.add(this.timeReset);


	this.countDownRunBtn = new runButton(550,200);
	this.parent.add(this.countDownRunBtn);
	this.countDownReset = new resetButton(660,200);
	this.parent.add(this.countDownReset);

	this.volumeSlide = new slide(310,418,170,60);
	this.parent.add(this.volumeSlide);
	
	this.muteBtn = new muteButton(610,400);
	this.parent.add(this.muteBtn);
	
	this.keyPad = new keyPad();
	this.parent.add(this.keyPad);
	this.soundDurationIn = new ergoInput(400,85,80,25,this.keyPad);
	this.parent.add(this.soundDurationIn);
	this.startAtIn = new ergoInput(630,144,75,25,this.keyPad);
	this.parent.add(this.startAtIn);
}
/***************************************************
 *
 ***************************************************/
this.bindInputs = function(c){


	this.soundDurationIn.bind("out",function(a){
		
		var t = a*1000;
		if(t<250){
			t=250;
		}
		c.soundInterval = t;
		c.newInputState();
		
	});
	
	this.startAtIn.bind("out",function(a){
	    if ( a < 0.25 ) {
		var t = 250;
	    } else {
		var t = a*1000;
	    }
	    if(t>3599999){
		t=3599999;
	    }
	    c.countDownFrom = t;
	    c.newInputState();
	});


}
/***************************************************
 *
 ***************************************************/
this.bindBtns = function(c){
	
//----------------------------------------------------
	this.stopWatchRunBtn.bindRun(function(){
		if(c.mode != 1){
			c.reset();
			c.mode = 1;		
		}
	
	c.flipButtons();
	c.run(c);
	});	
	this.stopWatchRunBtn.bindStop(function(){
	c.stop();
	});
	this.stopWatchReset.bind("mousedown",function(){
	c.reset();c.flipButtons();c.newInputState();
	});
//----------------------------------------------------
	this.timeRunBtn.bindRun(function(){
		if(c.mode != 2){
			c.reset();
			c.mode = 2;
		}
	c.flipButtons();
	c.run(c);
	});
 	this.timeRunBtn.bindStop(function(){
	c.stop();
 	});
	this.timeReset.bind("mousedown",function(){
	c.reset();c.flipButtons();c.newInputState();
	});
//----------------------------------------------------
	this.countDownRunBtn.bindRun(function(){
		if(c.mode != 3){
			c.reset();
			c.mode = 3;
		}
	c.flipButtons();
	c.run(c);
	});
	this.countDownRunBtn.bindStop(function(){
	c.stop();
	});
	this.countDownReset.bind("mousedown",function(){
	c.reset();c.flipButtons();
	c.newInputState();
	});
//----------------------------------------------------
	this.volumeSlide.bind("slide",function(a){
		c.vol = a/138;
		//c.soundQ.setVolume(c.vol*c.mute);
		c.sine.setVolume(0, c.vol*c.mute);
	});
	
	
	
	this.muteBtn.running = 1;
	this.muteBtn.out_running_LF();
	this.muteBtn.bindRun(function(){
		c.mute = 1;
		//c.soundQ.setVolume(c.vol*c.mute);
		c.sine.setVolume(0, c.vol*c.mute);
	});
	this.muteBtn.bindStop(function(){
		c.mute = 0;
		//c.soundQ.setVolume(c.vol*c.mute);
		c.sine.setVolume(0, c.vol*c.mute);
	});
//----------------------------------------------------

}
/***************************************************
 *
 ***************************************************/
this.reset = function(){

	var t = new Date().getTime();
	
	this.t_start = t;
	this.timeOfPause = t;
	
	this.durationOfPause = 0;
	this.mode = 0;
	
	clearInterval(this.timedIntervalHandle);

}
/***************************************************
 *
 ***************************************************/
this.run = function(c){

//this.t_start = new Date().getTime();

if(this.timeOfPause!=0){
	
	var tu = new Date().getTime()
	this.durationOfPause = this.durationOfPause +  (tu-this.timeOfPause);
	this.timeOfPause = 0;

}

this.timedIntervalHandle = setInterval(function(){ 

		var t_now = new Date().getTime() - c.t_start - c.durationOfPause;
		
		if(c.mode == 1){
		
			c.drawStopWatch(t_now);
			
		}else if(c.mode == 2){
		
			c.drawTimer(t_now);
		
		}else if(c.mode == 3){
		
			c.drawCountDown(t_now);
		
		}
		
},50);

}
/***************************************************
 *
 ***************************************************/
this.stop = function(){

	clearInterval(this.timedIntervalHandle);
	this.timeOfPause = new Date().getTime();
	this.sine.setFrequency(0,0);
}
/***************************************************
 *
 ***************************************************/
this.drawStopWatch = function(tm){

	var num = tm/1000;
	this.totalTOut.setValue(num.toFixed(2));
	
	var h = Math.floor(tm/(1000*60*60));
	
	tm = tm - (h*1000*60*60);
	
	var m = Math.floor(tm/(1000*60));
	
	tm = tm - m*1000*60;
	
	var s = tm/1000;
	
	this.hOut.setValue(h);
	this.mOut.setValue(m);
	this.sOut.setValue(s.toFixed(2));


}
/***************************************************
 *
 ***************************************************/
this.sound_played = 0;
this.light_color = 0;

this.drawTimer = function(tm){

	var num = tm/1000;
	this.tOut.setValue(num.toFixed(2));
	
	var num2 = this.soundInterval/1000;
	this.soundDurationIn.setValue(num2.toFixed(2));
	
	
	var c = tm/this.soundInterval-Math.floor(tm/this.soundInterval);
	
	
	if(c<0.5 && this.sound_played == 0){
		
	//this.soundQ.playSound(1);
	this.sine.setFrequency(0,600);
	this.sound_played = 1;
	
	if(this.light_color==1){
	this.light_color=0;	
	}else{
	this.light_color = 1;
	}
	
	this.timerLightView.draw(this.light_color);
	}else{
	
	}
	
	if(c>=0.5){
	this.sine.setFrequency(0,0);
	this.sound_played = 0;
	//this.timerLightView.draw(1);
	}
	/* */

}
/***************************************************
 *
 ***************************************************/
this.drawCountDown = function(tm){

	var time_left = (this.countDownFrom - tm);
	
	//this.startAtIn.setValue(time_left);
	
	if(time_left<0){
		//this.stop();
		this.reset();
		this.flipButtons();
		//this.soundQ.playSound(0);
		this.sine.setFrequency(0,400);
		var c = this;
		setTimeout(function(){
			c.sine.setFrequency(0,0);
		},800)
		
		return;
	}
	
	var M = Math.floor(time_left/(1000*60*10));
	time_left = time_left - (M*1000*60*10);
	
	var m = Math.floor(time_left/(1000*60));
	time_left = time_left - (m*1000*60);
	
	
	var S  = Math.floor(time_left/(1000*10));
	
	time_left = time_left - (S*1000*10);
	
	var s  = Math.floor(time_left/(1000));
	time_left = time_left - (s*1000);
	
	var D  = Math.floor(time_left/(100));
	time_left = time_left - (D*100);
	
	var d  = Math.floor(time_left/(10));
	
	
	this.minTenOut.setValue(M);
	this.minOnesOut.setValue(m);
	this.secTenOut.setValue(S);
	this.secOnesOut.setValue(s);
	this.secDecOnesOut.setValue(D);
	this.secDecsOut.setValue(d);


}
/***************************************************
 *
 ***************************************************/
this.flipButtons = function(){

if(this.mode!=1){

this.stopWatchRunBtn.running = 0;
this.stopWatchRunBtn.out_stoped_LF();

}

if(this.mode!=2){

this.timeRunBtn.running = 0;
this.timeRunBtn.out_stoped_LF();

}

if(this.mode!=3){

this.countDownRunBtn.running = 0;
this.countDownRunBtn.out_stoped_LF();

}



}
/***************************************************
 *
 ***************************************************/
this.newInputState = function(){

this.totalTOut.setValue(0);
	
this.hOut.setValue(0);
this.mOut.setValue(0);
this.sOut.setValue(0);
	
	
	
this.soundDurationIn.setValue((this.soundInterval/1000).toFixed(2));
	
this.tOut.setValue(0);

this.startAtIn.setValue(0);

//--------------------------------------------
	var time_left = this.countDownFrom;	
	this.startAtIn.setValue(time_left/1000);
	
	var M = Math.floor(time_left/(1000*60*10));
	time_left = time_left - (M*1000*60*10);	
	var m = Math.floor(time_left/(1000*60));
	time_left = time_left - (m*1000*60);
	
	
	var S  = Math.floor(time_left/(1000*10));
	time_left = time_left - (S*1000*10);	
	var s  = Math.floor(time_left/(1000));
	time_left = time_left - (s*1000);
	
	var D  = Math.floor(time_left/(100));
	time_left = time_left - (D*100);
	var d  = Math.floor(time_left/(10));
	
	
this.minTenOut.setValue(M);
this.minOnesOut.setValue(m);
this.secTenOut.setValue(S);
this.secOnesOut.setValue(s);
this.secDecOnesOut.setValue(D);
this.secDecsOut.setValue(d);
//--------------------------------------------


}
/***************************************************
 *
 ***************************************************/
this.build();
this.newInputState();

this.bindInputs(this);
this.bindBtns(this);

this.reset();

//this.run(this);
//
}
