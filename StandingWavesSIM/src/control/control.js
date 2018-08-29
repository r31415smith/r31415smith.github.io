/*************************************************************
 * 
 *************************************************************/
var control = function()
{
    
    this.volume = 0;
    this.mute_flag = 0;
    this.running_flag = 1;
    
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

    this.parent = new parent("parent");
    
    this.keyPad = new keyPad();
    this.parent.add(this.keyPad);
    
    this.oscillatorView = new oscillatorView();
    this.parent.add(this.oscillatorView);
    
    this.labelMinFrequency = new labelView(567,180,60,20);
    this.parent.add(this.labelMinFrequency);
    this.labelMaxFrequency = new labelView(693,180,60,20);
    this.parent.add(this.labelMaxFrequency);
    
    
    this.frequencyIn = new ergoInput(430,155,86,26,this.keyPad);
    this.parent.add(this.frequencyIn);
    this.amplitudeIn = new ergoInput(430,210,86,26,this.keyPad);
    this.parent.add(this.amplitudeIn);
    this.tensionIn = new ergoInput(430,320,86,26,this.keyPad);
    this.parent.add(this.tensionIn);
    this.massLengthIn = new ergoInput(430,375,86,26,this.keyPad);
    this.parent.add(this.massLengthIn);
    
    
    this.volumeSlide = new slide(584,424,153,50);
    this.parent.add(this.volumeSlide);
    this.muteBtn = new muteButton(430,423);
    this.parent.add(this.muteBtn);
    
    this.runBtn = new runButton(795,420);
    //this.parent.add(this.runBtn);
    
    this.printBtn = new printButton(885,420);
    this.parent.add(this.printBtn);
    
    this.fRangeSlide = new zoom(327,90,410,50);
    this.parent.add(this.fRangeSlide);
    
    this.fSlide = new zoom(585,145,150,50);
    this.parent.add(this.fSlide);
    this.aSlide = new zoom(585,200,150,50);
    this.parent.add(this.aSlide);
    this.tSlide = new zoom(585,310,150,50);
    this.parent.add(this.tSlide);
    this.mSlide = new zoom(585,365,150,50);
    this.parent.add(this.mSlide);
    
    
    
    this.bindEvents(this);
    this.newState();

}
/*************************************************************
 * 
 *************************************************************/
control.prototype.bindEvents = function(c)
{

    this.frequencyIn.bind("out",function(v){

        var err = c.logic.setF(v);
        if(err==1)
        {
            c.fSlide.slidePosition = 71;
            c.fSlide.drawSlider();
            
            a = 25+(375 - 25)*(v-31)/(1500);
            
            c.fRangeSlide.slidePosition = a;
            c.fRangeSlide.drawSlider();
        }

        c.newState();
    });
    
    this.amplitudeIn.bind("out",function(v){
//        c.logic.setA(v);
        c.logic.setA(v/5);
        c.newState();
    });
    
    this.tensionIn.bind("out",function(v){
        c.logic.setT(v);
        c.newState();
    });
    
    this.massLengthIn.bind("out",function(v){
        c.logic.setM(v);
        c.logic.calc();
        c.newState();
    });
    
    this.fRangeSlide.bind("slide",function(a){
        
        c.fSlide.slidePosition = 71;
        c.fSlide.drawSlider();
        
        v = (a-25)/(375-25);
        
        c.logic.setF(31+1500*v);

        c.newState();
    });
    
    this.fSlide.slidePosition = 71;
    this.fSlide.drawSlider();
    
    this.fSlide.bind("slide",function(a){
        
        v = (a-25)/(115-25);

        
        c.logic.modF(v);
        c.newState();
        
    });
    
    this.aSlide.slidePosition = 70; // corresponds to A=10% for range 1-20%
    this.aSlide.drawSlider();
    
    this.aSlide.bind("slide",function(a){
        v = (a-25)/(115-25);

        c.logic.setA(c.logic.a_min + (c.logic.a_max - c.logic.a_min)*v);
        c.newState();
    });
    
    this.tSlide.bind("slide",function(a){
        v = (a-25)/(115-25);
        
        c.logic.setT(c.logic.t_min + (c.logic.t_max - c.logic.t_min)*v);
        c.newState();
        
    });
    this.mSlide.bind("slide",function(a){
        v = (a-25)/(115-25);
        
        c.logic.setM(c.logic.m_min + (c.logic.m_max - c.logic.m_min)*v);
        c.newState();
    });
    
    this.volumeSlide.bind("slide",function(a){
        v = (a)/(128);
        
        c.volume = v;
        
        c.newState();
    });
    
    this.muteBtn.bindRun(function(){
        c.mute_flag = 1;
        c.newState();
    });
    
    this.muteBtn.bindStop(function(){
        c.mute_flag = 0;
        c.newState();
    });
    
    /*this.runBtn.bindRun(function(){
        c.running_flag = 1;
        c.newState();
    });
    
    this.runBtn.bindStop(function(){
        c.running_flag = 0;
        c.newState();
    });/* */
    this.printBtn.bind("mousedown",function(a){
        window.print();
    }); 
}
/*************************************************************
 * 
 *************************************************************/
control.prototype.newState = function()
{   
    

    
    this.sine.setFrequency(0,this.logic.F);
    
    //console.log(this.volume + " " + this.mute_flag + " " + this.volume*this.mute_flag);
    //console.log(this.logic.F+" : "+this.volume*this.mute_flag);
    this.sine.setVolume(0,this.volume*this.mute_flag);//*this.running_flag

    this.labelMinFrequency.draw(round(this.logic.F_range_center - this.logic.f_mod_range)+" Hz");
    this.labelMaxFrequency.draw(round(this.logic.F_range_center + this.logic.f_mod_range)+" Hz");

    this.frequencyIn.setValue(round(this.logic.F));
//    this.amplitudeIn.setValue(round(this.logic.A));
    this.amplitudeIn.setValue(Math.round(this.logic.A*5));
    this.tensionIn.setValue(round(this.logic.T));
    this.massLengthIn.setValue(round(this.logic.M));

    this.oscillatorView.draw(this.logic.f_numb,this.logic.A*this.logic.amplitude_cofeicient,this.logic.string_alpha_coof);

}
/*************************************************************
 * 
 *************************************************************/
