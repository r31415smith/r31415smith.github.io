function control(){


    this.timeEvent;
    this.running = 0;

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


/*==================================================*/
    this.build = function(){
	
	this.parent = new parent("parent");
	

	
	
	this.perspectiveView = new perspectiveView();
	this.parent.add(this.perspectiveView);

	this.topView = new topView();
	this.parent.add(this.topView);
	

	
	this.timeView = new timeView();
	this.parent.add(this.timeView);
	
	this.runButton = new runButton(780,430);
	this.parent.add(this.runButton);
	this.resetButton = new resetButton(870,430);
	this.parent.add(this.resetButton);
	this.printButton = new printButton(780,380)
	this.parent.add(this.printButton);

	this.keyPad = new keyPad();
	this.parent.add(this.keyPad);
	this.fzeroIn = new ergoInput(35,425,90,23,this.keyPad);
	this.parent.add(this.fzeroIn);
	this.srcVelIn = new ergoInput(218,425,90,23,this.keyPad);
	this.parent.add(this.srcVelIn);
	this.obsVelIn = new ergoInput(410,425,90,23,this.keyPad);
	this.parent.add(this.obsVelIn);
	this.relVelOut = new output(600,425,90,23);
	this.parent.add(this.relVelOut);

    }
/*==================================================*/
    this.bindEvents = function(c){

//--------------------
	this.fzeroIn.bind("in",function(){
	    c.stop();
	    c.runButton.running = 0;
	    c.runButton.out_stoped_LF();
	});
	this.srcVelIn.bind("in",function(){
	    c.stop();
	    c.runButton.running = 0;
	    c.runButton.out_stoped_LF();
	});
	this.obsVelIn.bind("in",function(){
	    c.stop();
	    c.runButton.running = 0;
	    c.runButton.out_stoped_LF();
	});
//--------------------
	this.fzeroIn.bind("out",function(a){
	    if ( a > 0 ) {
		c.logic.f0 = a;
	    }
	    c.reset();
	});
	this.srcVelIn.bind("out",function(a){
	    var vrel = c.logic.V_man + a ;
	    if ( a < c.logic.V_sound && a > -c.logic.V_sound && vrel < c.logic.V_sound && vrel > -c.logic.V_sound ) {
		c.logic.V_spk = a;
	    }
	    c.reset();
	});
	this.obsVelIn.bind("out",function(a){
	    var vrel = a + c.logic.V_spk ;
	    if ( a < c.logic.V_sound && a > -c.logic.V_sound && vrel < c.logic.V_sound && vrel > -c.logic.V_sound ) {
		c.logic.V_man = a;
	    }
	    c.reset();
	});
//--------------------
	this.runButton.bindRun(function(){
	    c.run(c);
	});
	this.runButton.bindStop(function(){
	    c.stop();
	});
//--------------------
	this.resetButton.bind("mousedown",function(){
	    c.reset();
	});

//this.prntBtn.bind("mousedown",function(){ window.print();});
	this.printButton.bind("mousedown",function(){
	    window.print() ;
	});
//--------------------

    }
/*==================================================*/
    this.t = 0;
    this.run = function(c){
	
//var x = 0;

	var intersection_time = c.logic.getIntersectionTime()

	var vol_coof = 0.8;
	var vol1_flag = 1;
	
//this.running = 1;

	this.timeEvent = setInterval(function(){

	    var pos_man = c.logic.calcPosMan(c.t)
	    var pos_spk = c.logic.calcPosSpk(c.t)
	    
	    var dist = pos_spk - pos_man;

	    c.topView.clear();
	    c.topView.drawMan(pos_man,c.logic.man_orient);
	    c.topView.drawSpeaker(pos_spk,c.logic.spk_orient);

//--------------vol_coof = 0.9/(Math.abs(dist)+1);
	    c.t=c.t+0.05;
	    c.timeView.drawTime(c.t);

//c.t=c.t+0.05;

	    var sep = c.t - intersection_time ;
	    var fudgefactor = 1/3 ;
	    var loudness = Math.pow( Math.E, -sep*sep/(2*intersection_time*intersection_time * fudgefactor ) ) ; // gaussian 

//	    console.log ( "c.logic.V_spk", c.logic.V_spk, "c.logic.V_man", c.logic.V_man, "intersection_time", intersection_time, c.logic.f1, c.logic.f2 ) ;

// MAP:  catch cases of negative source velocity
// Case 1:  moving apart at the beginning, hence always use V1
	    if ( c.logic.relative_V1 < 0 ) {
		c.timeView.drawF(c.logic.f1);
		c.sine.setVolume(0, vol_coof * vol1_flag * (0.1 + 0.9 * loudness ) );
		c.perspectiveView.drawSpeaker(Math.abs(dist),c.logic.rel_orient);
		c.relVelOut.setValue(c.logic.relative_V1);

// Case 2:  moving toward each other, but speaker at negative velocity so flip V1 and V2
	    } else if ( c.logic.V_spk < 0 ) {
		if(c.t>intersection_time){
		    c.sine.setVolume(0, vol_coof * vol1_flag * ( 0.1 + 0.9 * loudness ) );
		    c.sine.setFrequency(0,c.logic.f2);
		    c.perspectiveView.clear();
		    c.relVelOut.setValue(c.logic.relative_V2);
		    c.timeView.drawF(c.logic.f2);
		} else {
		    c.timeView.drawF(c.logic.f1);
		    c.sine.setVolume(0, vol_coof * vol1_flag * (0.1 + 0.9 * loudness ) );
		    c.perspectiveView.drawSpeaker(Math.abs(dist),c.logic.rel_orient);
		    c.relVelOut.setValue(c.logic.relative_V1);
		}

// Case 3:  moving toward each other, but speaker at positive velocity so everything is in nominal conditions
	    } else {
		if(c.t>intersection_time){
		    c.sine.setVolume(0, vol_coof * vol1_flag * ( 0.1 + 0.9 * loudness ) );
		    c.sine.setFrequency(0,c.logic.f2);
		    c.perspectiveView.clear();
		    c.relVelOut.setValue(c.logic.relative_V2);
		    c.timeView.drawF(c.logic.f2);
		} else if (c.t<=intersection_time || c.t == Infinity){
		    c.sine.setVolume(0, vol_coof * vol1_flag * (0.1 + 0.9 * loudness ) );
		    c.perspectiveView.drawSpeaker(Math.abs(dist),c.logic.rel_orient);
		    c.relVelOut.setValue(c.logic.relative_V1);
		    c.timeView.drawF(c.logic.f1);
		}
	    }

//	    c.sine.setVolume(0, vol_coof * vol1_flag);
	    
	},50);
	
/* */


    }
/*==================================================*/
    this.stop = function(){
	
	clearInterval(this.timeEvent);
	this.sine.setVolume(0,0);
	//this.running = 0;

    }
/*==================================================*/
    this.reset = function(){
	
	this.stop();
	this.t = 0;
	
	this.runButton.running = 0;
	this.runButton.out_stoped_LF();
	
	this.newState();
	
    }
/*==================================================*/
    this.newState = function(){
	
	this.logic.calculate();
	
	this.timeView.drawTime(0);

//	if ( Math.abs(this.logic.V_spk) > Math.abs(this.logic.V_man) ) {
//	    this.timeView.drawF(this.logic.f2);
//	} else {
	    this.timeView.drawF(this.logic.f1);
//	}
	
	this.sine.setFrequency(0,this.logic.f1);
	this.relVelOut.setValue(this.logic.relative_V1);
//this.sine.setFrequency2(this.logic.f2);

	this.sine.setVolume(0,0);
	
	this.fzeroIn.setValue(this.logic.f0);

//---------------------------------------------------------
	if(this.logic.V_man>=0&&this.logic.V_spk<0){
	    
	    this.logic.V_man_real =  1*this.logic.V_man;
	    this.logic.V_spk_real = -1*this.logic.V_spk;
	    
	    this.logic.man_pos_zero = 0;
	    this.logic.spk_pos_zero = 5;
	    
	    this.srcVelIn.setValue(this.logic.V_spk);
	    this.obsVelIn.setValue(this.logic.V_man);
	}
	
	if(this.logic.V_man>=0&&this.logic.V_spk>=0){
	    
	    this.logic.V_man_real =  1*this.logic.V_man;
	    this.logic.V_spk_real = -1*this.logic.V_spk;
	    
	    this.logic.man_pos_zero = 0;
	    this.logic.spk_pos_zero = 27;
	    
	    this.srcVelIn.setValue(this.logic.V_spk);
	    this.obsVelIn.setValue(this.logic.V_man);
	    
	}
	
	if(this.logic.V_man<0&&this.logic.V_spk<0){
	    
	    this.logic.V_man_real =  1*this.logic.V_man;
	    this.logic.V_spk_real = -1*this.logic.V_spk;
	    
	    this.logic.man_pos_zero = 12;
	    this.logic.spk_pos_zero = 16;
	    
	    this.srcVelIn.setValue(this.logic.V_spk);
	    this.obsVelIn.setValue(this.logic.V_man);
	    
	}
	
	if(this.logic.V_man<0&&this.logic.V_spk>=0){
	    
	    this.logic.V_man_real =  1*this.logic.V_man;
	    this.logic.V_spk_real = -1*this.logic.V_spk;
	    
	    this.logic.man_pos_zero = 24;
	    this.logic.spk_pos_zero = 27;
	    
	    this.srcVelIn.setValue(this.logic.V_spk);
	    this.obsVelIn.setValue(this.logic.V_man);
	}

//---------------------------------------------------------

	if(this.logic.V_man_real>=0 && this.logic.V_spk_real<0){
	    //alert('a');
	    this.logic.man_orient =  1;
	    this.logic.spk_orient = -1;
	    this.logic.rel_orient = -1;
	}
	if(this.logic.V_man_real>=0&&this.logic.V_spk_real>=0){
	    //alert('b');
	    this.logic.man_orient = 1;
	    this.logic.spk_orient = 1;
	    this.logic.rel_orient = 1;
	}/* */
	if(this.logic.V_man_real<0&&this.logic.V_spk_real<0){
	    //alert('c');
	    this.logic.man_orient = -1;
	    this.logic.spk_orient = -1;
	    this.logic.rel_orient =  1;
	}/* */
	if(this.logic.V_man_real<0&&this.logic.V_spk_real>=0){
	    //alert('d');
	    this.logic.man_orient = -1;
	    this.logic.spk_orient =  1;
	    this.logic.rel_orient = -1;
	}/* */
	
	
	
//---------------------------------------------------------
		
	var pos_man = this.logic.calcPosMan(this.t)
	var pos_spk = this.logic.calcPosSpk(this.t)
	var dist = pos_spk - pos_man;
	
	this.topView.clear();
	this.topView.drawMan(pos_man,this.logic.man_orient);
	this.topView.drawSpeaker(pos_spk,this.logic.spk_orient);
	
	this.perspectiveView.drawSpeaker(Math.abs(dist),this.logic.rel_orient);

    }
/*==================================================*/

    this.build();
    this.bindEvents(this);
    this.newState();
//this.run(this);

}
