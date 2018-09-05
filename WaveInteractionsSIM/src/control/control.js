/*************************************************************
 * 
 *************************************************************/
var control = function()
{
    this.logic = new logic();

    this.parent = new parent("parent");
    
    this.keyPad = new keyPad();
    this.parent.add(this.keyPad);
    
    this.mainTank = new tankView(5,30,this.logic);
    this.parent.add(this.mainTank);
    this.gridView = new gridView();
    this.parent.add(this.gridView);
    
    this.time = 0 ;
    this.tCalc = 0 ;
    this.tClock = 0 ;
    this.tGraph = 0 ;
    
/* These were only for development purposes    
    this.amp_1_Tank = new tankView(5,540,this.logic);
    this.parent.add(this.amp_1_Tank);
    this.amp_2_Tank = new tankView(305,540,this.logic);
    this.parent.add(this.amp_2_Tank);
    
    this.phase_1_Tank = new tankView(5,840,this.logic);
    this.parent.add(this.phase_1_Tank);
    this.phase_2_Tank = new tankView(305,840,this.logic);
    this.parent.add(this.phase_2_Tank);   
*/
    
    this.runBtn = new runButton(650,50);
    this.parent.add(this.runBtn);
    
    this.gridBtn = new button(650,125); // XXXXX This should be called "Grid"
    this.gridBtn.buttonString="Grid";
    this.gridBtn.out_LF();
    this.parent.add(this.gridBtn);
    
    this.resetBtn = new resetButton(790,433);
    this.parent.add(this.resetBtn);
    
    this.printBtn = new printButton(890,430);
    this.parent.add(this.printBtn);
    
    this.fIn = new ergoInput(635,215,100,27,this.keyPad);
    this.parent.add(this.fIn);
    this.wIn = new ergoInput(635,290,100,27,this.keyPad);
    this.parent.add(this.wIn);
    this.thetaIn = new ergoInput(635,365,100,27,this.keyPad);
    this.parent.add(this.thetaIn);
    this.indexRefractionIn = new ergoInput(635,440,100,27,this.keyPad);
    this.parent.add(this.indexRefractionIn);
    
    this.interactionSelect = new select(12,362,150,30);
    this.parent.add(this.interactionSelect);
    
    this.interactionSelect.addOption(0 , 'None');
    this.interactionSelect.addOption(1 , 'Reflection');
    this.interactionSelect.addOption(2 , 'Refraction');
    this.interactionSelect.addOption(3 , 'Diffraction');
    this.interactionSelect.addOption(4 , 'Absorption');
    this.interactionSelect.addOption(5 , 'Interference');
    this.interactionSelect.addOption(6 , 'Doppler effect');

    this.waveFormSelect = new select(205,362,150,30);
    this.parent.add(this.waveFormSelect);
    
    this.waveFormSelect.addOption(0 , 'Plane');
    this.waveFormSelect.addOption(1 , 'Circular');
    
    this.waveDurationSelect = new select(12,442,150,30);
    this.parent.add(this.waveDurationSelect);

    this.waveDurationSelect.addOption(0 , 'Pulse');
    this.waveDurationSelect.addOption(1 , 'Continuous');

    this.boundarySelect = new select(425,362,150,30);
    this.parent.add(this.boundarySelect);
    
    this.boundarySelect.addOption(0 , 'None');
    this.boundarySelect.addOption(1 , 'Flat');
    this.boundarySelect.addOption(2 , 'Tank walls');
    this.boundarySelect.addOption(3 , 'Angled');
    this.boundarySelect.addOption(4 , 'Concave');
    this.boundarySelect.addOption(5 , 'Convex');
    this.boundarySelect.addOption(6 , 'Half wall');

    this.timeCalcOut = new output(560,55,60,30) ;
    this.parent.add(this.timeCalcOut) ;
    this.tCalc = 0 ;
/* These were only for testing response times
    this.timeClockOut = new output(560,65,60,30) ;
    this.parent.add(this.timeClockOut) ;
    this.tClock = 0 ;
    this.timeCalcOut = new output(560,130,60,30) ;
    this.parent.add(this.timeCalcOut) ;
    this.tCalc = 0 ;
    this.timeGraphOut = new output(560,205,60,30) ;
    this.parent.add(this.timeGraphOut) ;
    this.tGraph = 0 ;
*/

// This should be modified to default to medium-resolution for desktops and low-resolution for mobile devices XXXXX
    this.binningSelect = new select(205,442,200,30);
    this.parent.add(this.binningSelect);
    this.binningSelect.addOption(0 , 'Low-resolution (fast)');
    this.binningSelect.addOption(1 , 'Medium-resolution');
    this.binningSelect.addOption(2 , 'High-resolution (slow)');

    if(window.platformFlag == "DSK"){
       this.logic.setBinning(1);
    }else{
       this.logic.setBinning(0); 
    }/* */
    
// This needs to be fixed so that changing one changes the other XXXXX
// These buttons also should appear ONLY when this.wave_interaction_type == 3 [diffraction] and this.boundary_type == 1 [flat]

    this.singleSlitLable = new label(460,400,110,30,"One gap");
    this.parent.add(this.singleSlitLable);
    this.singleSlitToggle = new toggle(410,390);
    this.parent.add(this.singleSlitToggle);

    this.doubleSlitLable = new label(460,440,110,30,"Two gap");
    this.parent.add(this.doubleSlitLable);
    this.doubleSlitToggle = new toggle(410,430);
    this.parent.add(this.doubleSlitToggle);

    
    this.bindInputs(this);
    this.bindSelects(this);
    this.bindEvents(this);
    this.newState();
// Draw the new boundary with an empty tank
    var temp_array = this.logic.buildTankModel(0);
    this.mainTank.drawTank(temp_array);

}
/*************************************************************
 * 
 *************************************************************/
control.prototype.bindInputs = function(c)
{


   
    //-------------------------------------------------- 
    this.fIn.bind("out",function(v){
        c.logic.setFrequency(v);
        c.reset();
        c.newState();
    });
    this.wIn.bind("out",function(v){
        c.logic.setWavelength(v);
        c.reset();
        c.newState();
    });
    this.thetaIn.bind("out",function(v){
        c.logic.setTheta(v);
        c.reset();
        c.newState();
    });
    this.indexRefractionIn.bind("out",function(v){
        c.logic.setIndexRefraction(v);
        c.reset();
        c.newState();
    });
    //--------------------------------------------------  
    
}
/*************************************************************
 * 
 *************************************************************/
control.prototype.bindSelects = function(c)
{
    
    this.interactionSelect.bind("change",function(v){
        
        c.logic.setInteraction(v);
        c.reset();
        c.newState();
        
// Draw the boundary if switching to reflection or diffraction
//  if ( c.logic.wave_interaction_type != 3 ) {
        var temp_array = c.logic.buildTankModel(0);
        c.mainTank.drawTank(temp_array);
//  }

    });

    this.binningSelect.bind("change",function(v){
        
        c.logic.setBinning(v);
        c.reset();
        c.newState();
    });
    this.waveFormSelect.bind("change",function(v){
        c.logic.setWaveForm(v);
        c.reset();
        c.newState();
    });
    this.waveDurationSelect.bind("change",function(v){
        c.logic.setWaveDuration(v);
        c.reset();
        c.newState();
    });
    this.boundarySelect.bind("change",function(v){

        c.logic.setBoundary(v);
        c.reset();
        c.newState();
        // Draw the new boundary with an empty tank
        var temp_array = c.logic.buildTankModel(0);
        c.mainTank.drawTank(temp_array);
        
    });

    
}
/*************************************************************
 * 
 *************************************************************/
control.prototype.bindEvents = function(c)
{   
    
    
//-------------------------------------------------- 
    this.runBtn.bindRun(function(){
        c.run(c);
    });
    this.runBtn.bindStop(function(){
	   c.stop(); 
    });
//-------------------------------------------------- 

    this.gridShowing = 0;
    this.gridBtn.bind("mousedown",function(){
        
        if(c.gridShowing==0)
        {
            c.gridView.draw();
            c.gridShowing=1;
        }else{
            c.gridView.hide();
            c.gridShowing=0;
        }
        
    });
    
    
    this.resetBtn.bind("mousedown",function(){
        c.reset();
    });
    this.printBtn.bind("mousedown",function(){
        
    });
    
    
    

   
    // THIS NEEDS TO BE FIXED SO THAT THESE TWO BUTTONS ARE MUTUALLY EXCLUSIVE  XXXXX
    // and that the logic parameter is correctly set
    
    this.number_of_slits = 
    
    this.singleSlitToggle.bindRun(function(){
        
    	
    	//var temp_array = c.logic.buildTankModel(0);
    	//c.mainTank.drawTank(temp_array);
        //c.switchMode(0);
        c.newState();
        
    });

    this.singleSlitToggle.bindStop(function(){
        //alert('asdas')
        c.logic.setNumSlit(1) ;
        //obj.switchMode(-1);
        c.reset();
        c.newState();
    	//var temp_array = c.logic.buildTankModel(0);
    	//c.mainTank.drawTank(temp_array);
    	
    });
    
    this.doubleSlitToggle.bindRun(function(){
        
    	
    	//var temp_array = c.logic.buildTankModel(0);
    	//c.mainTank.drawTank(temp_array);
        //c.switchMode(1);
        c.newState();
        
    });
    
    this.doubleSlitToggle.bindStop(function(){
        
        c.logic.setNumSlit(2) ;
        c.reset();
        //obj.switchMode(-1);
        c.newState();
    	//var temp_array = c.logic.buildTankModel(0);
    	//c.mainTank.drawTank(temp_array);
    	
    });
    
}
/*************************************************************
 * 
 *************************************************************/
control.prototype.run = function(c)
{
    var time_interval = c.logic.time_interval ; // in seconds
    var frequency = 1 / time_interval ; // in hertz
    
    var width = c.logic.width ;
    var height = c.logic.height ;



// runHandleCalc does the calculation of the array
    this.runHandleCalc = setInterval(function(){ 
        	
        // OLD:  set conditions in control.js; NEW:  all of those are handled within logic.js
        //    	if ( c.interactionSelect.getCurrentValue() == 5 && c.waveFormSelect.getCurrentValue() == 1 ) {
        //            temp_array = c.logic.buildTankModel(time);
        //    	}
	
        temp_array = c.logic.buildTankModel(c.time);
        c.timeCalcOut.setValue( Math.round(c.tCalc*10)/10 ) ;
        
    	c.time += time_interval;
    	c.tCalc += time_interval ;
    	
    	//c.newState() ;
	
    },time_interval*1000); // update time is in millisecond
    
    
// runHandleGraph does the graphing, which can be significantly slower
    this.runHandleGraph = setInterval(function(){ 

        c.mainTank.drawTank(temp_array);

    	c.tGraph += time_interval ;
    	//c.newState() ;
    	
    },Math.round((1/10)*1000)); // update time is in millisecond, this is 10 Hz


// runHandleClock handles an absolute clock to judge the other performance
// As long as this update interval is *longer* than the other ones, then it matches the wall clock time
//    var time_interval_clock = 1 ;
    var time_interval_clock = 0.1 ;
    this.runHandleClock = setInterval(function(){ 
        
    	c.tClock += time_interval_clock ;
    	//c.newState() ;
    	
    },Math.round(time_interval_clock*100)); // update time is in 10 ms
//    },Math.round(time_interval_clock*1000)); // update time is in millisecond
    
    
}

/*************************************************************
 * 
 *************************************************************/
control.prototype.stop = function(c)  // this function needs to stop the animation ***but not reset time to zero***   XXXXX
{
    clearInterval(this.runHandleCalc);
    clearInterval(this.runHandleGraph); 
    clearInterval(this.runHandleClock); 
    
    this.runBtn.running = 0;
    this.runBtn.out_stoped_LF();
    
}
/*************************************************************
 * 
 *************************************************************/
control.prototype.reset = function()
{

    this.time = 0;
    this.tCalc = 0;
    this.tClock = 0;
    this.tGraph = 0;
    
    temp_array = this.logic.buildTankModel(this.time);
    this.mainTank.drawTank(temp_array);
    this.newState() ;  
    
    this.stop(); 

    this.runBtn.running = 0;
    this.runBtn.out_stoped_LF();

}
/*************************************************************
 * 
 *************************************************************/
control.prototype.newState = function()
{   

	
    // this.interactionSelect.selectItemByValue(this.logic.wave_interaction_type);
    // this.binningSelect.selectItemByValue(this.logic.binning_type);
    // this.waveFormSelect.selectItemByValue(this.logic.waveform_type);
    // this.waveDurationSelect.selectItemByValue(this.logic.wave_duration_type);
    // this.boundarySelect.selectItemByValue(this.logic.boundary_type);
	
	var c = this;
	setTimeout(function(){
		c.interactionSelect.selectItemByValue(c.logic.wave_interaction_type);
	    c.binningSelect.selectItemByValue(c.logic.binning_type);
	    c.waveFormSelect.selectItemByValue(c.logic.waveform_type);
	    c.waveDurationSelect.selectItemByValue(c.logic.wave_duration_type);
	    c.boundarySelect.selectItemByValue(c.logic.boundary_type);
	},50);
    
    //
    
    

    
    
    this.fIn.setValue(round(this.logic.frequency));
    this.wIn.setValue(round(this.logic.wavelength));   
    this.thetaIn.setValue(round(this.logic.user_theta));   
    this.indexRefractionIn.setValue(round(this.logic.index_of_refraction));   

    this.timeCalcOut.setValue( Math.round(this.tCalc*10)/10 ) ;
/* These were only for development purposes
    this.timeClockOut.setValue( Math.round(this.tClock)/10 ) ;
    this.timeCalcOut.setValue( round(this.tCalc) ) ;
    this.timeGraphOut.setValue(round(this.tGraph) ) ;
*/
    
// THIS IS NOT WORKING CORRECTLY  XXXXX


    if(this.logic.wave_interaction_type == 3 && this.logic.boundary_type == 1)
    {
        
        this.singleSlitLable.draw();
        this.singleSlitToggle.htmlElement.style.display = "block";
        this.doubleSlitLable.draw();
        this.doubleSlitToggle.htmlElement.style.display = "block";
        
    }else{
        
        this.singleSlitLable.hide();
        this.singleSlitToggle.htmlElement.style.display = "none";
        this.doubleSlitLable.hide();
        this.doubleSlitToggle.htmlElement.style.display = "none";
        
    }

    
    this.singleSlitToggle.running = 1;
    this.singleSlitToggle.out_running_LF();
    this.doubleSlitToggle.running = 1;
    this.doubleSlitToggle.out_running_LF();

    if ( this.logic.num_slit == 1 ) {
        this.singleSlitToggle.running = 0;
        this.singleSlitToggle.out_stoped_LF();
    }
    else if ( this.logic.num_slit == 2 ) {
        this.doubleSlitToggle.running = 0;
        this.doubleSlitToggle.out_stoped_LF();
    }/* */


}

/*************************************************************
 * 
 *************************************************************/
