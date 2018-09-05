var control = function(graph){

    this.x=5;

    this.inputPainter = new inputPainter();
    this.logic = new logic();

    try{this.sound = new Sound();}catch(err){this.sound = new SoundDummy();}
    
    
    try
	{
	    if (window.platformFlag == "IOS" )
	    {	
	        this.sine = new SineErgoIOS(4);
	    }
		else
		{
			this.sine = new SineErgo(4);
	    }

    }
	catch(err)
	{
		this.sine = new SineEmpty();
		alert("Your browser may not generate Audio.");
	}

    this.WaveGraph = new grapher(graph,"Deflection","000000");

// NEW
    this.pullDownMenu = new pullDownMenu();  
    this.solvefor = 0 ; // initialize


	this.parent = new parent("audioHarmonicsPlayer");
	
	this.keyPad = new keyPad();
	this.parent.add(this.keyPad);

	this.vOut = new output(55,260,100,25);
	this.parent.add(this.vOut);
	this.vIn = new ergoInput(55,260,100,25,this.keyPad);
	this.parent.add(this.vIn);

	this.fOut = new output(335,260,100,25);
	this.parent.add(this.fOut);
	this.fIn = new ergoInput(335,260,100,25,this.keyPad);
	this.parent.add(this.fIn);

	this.lambdaOut = new output(480,260,100,25);
	this.parent.add(this.lambdaOut);
	this.lambdaIn = new ergoInput(480,260,100,25,this.keyPad);
	this.parent.add(this.lambdaIn);

	this.slide = new slide(465,96,170,50);
	this.slide.slidePosition=10;
	this.slide.drawSlider();
	this.parent.add(this.slide);

	this.eq = new eqButton(210,235);
	this.parent.add(this.eq);

// NEW
	this.selectSolve = new select(500,180,200,30,this.keyPad);
	this.parent.add( this.selectSolve );
	for ( i=0 ; i<=2 ; i+=1 ){
	    this.selectSolve.addOption(i,this.pullDownMenu.solvefor[i][0]);
	}

	this.showHideInputs(0);
	

    this.newState();
    this.bindInputs(this);  
    this.bindSlide(this);
    
}
/*========================================================================================================*/

control.prototype.bindInputs = function(c){

	this.vIn.bind("out",function(a){c.logic.setv(a);c.newState();});
	this.fIn.bind("out",function(a){c.logic.setf(a);c.newState();});
	this.lambdaIn.bind("out",function(a){c.logic.setLambda(a);c.newState();});


// NEW
	this.selectSolve.bind("change",function(a){
	    c.logic.setsolvefor(parseFloat(c.pullDownMenu.solvefor[a][1]));
	    this.solvefor = c.logic.solvefor;  // this does work!
	    c.showHideInputs(parseInt(a));
	});

    }

/*========================================================================================================*/
control.prototype.showHideInputs = function(a)
    {
        this.vOut.htmlElement.style.display = "none";
        this.fOut.htmlElement.style.display = "none";
        this.lambdaOut.htmlElement.style.display = "none";
        
        this.vIn.htmlElement.style.display = "inherit";
        this.fIn.htmlElement.style.display = "inherit";
        this.lambdaIn.htmlElement.style.display = "inherit";
    
        switch(a){
        case 0:
            this.vIn.htmlElement.style.display = "none";
            this.vOut.htmlElement.style.display = "inherit";
            break;
          
        case 1:
            this.fIn.htmlElement.style.display = "none";
            this.fOut.htmlElement.style.display = "inherit";
            break;
            
        case 2:
            this.lambdaIn.htmlElement.style.display = "none";
            this.lambdaOut.htmlElement.style.display = "inherit";
            break;
            
        default:
            
        }
    
    }

/*========================================================================================================*/
control.prototype.bindSlide = function(c){
	
	this.slide.bind('slide',function(g){
	    c.x = g;
	    
	    if(c.x<5){c.x=5;}
	    if(c.x>145){c.x=145;}

	    c.sine.setVolume(0, (c.x-5)/142);
	    
	    
	    c.logic.vol1 = (c.x-5)/142;
	    c.newState();
	    
	});
    }

/*========================================================================================================*/
control.prototype.newState = function(){

	this.vIn.setValue(round(this.logic.v));
	this.fIn.setValue(round(this.logic.f));
	this.lambdaIn.setValue(round(this.logic.Lambda));

	this.vOut.setValue(round(this.logic.v));
	this.fOut.setValue(round(this.logic.f));
	this.lambdaOut.setValue(round(this.logic.Lambda));

	//this.f1 = parseFloat(this.vIn.value);
	//this.sound.setFrequency1(this.logic.f);
	this.sine.setFrequency(0,this.logic.f);

	
	
	this.WaveGraph.clear();
	this.WaveGraph.draw(0);
	var x = 0;	
	for(var i = 0;i<6000;i++){							
	    var a = this.logic.getValue(x,this.logic.f,this.logic.Lambda);
	    x=x+0.1;
	    this.WaveGraph.append(31-a);
	}									
	this.WaveGraph.draw(0);
	
	//this.vIn.setValue(this.logic.v);
	//this.lambdaIn.setValue(this.logic.Lambda);
	//this.fIn.setValue(this.logic.f);
	
    }

/*========================================================================================================*/
