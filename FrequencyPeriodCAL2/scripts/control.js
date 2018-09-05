function control(pnd){

    this.logic = new logic();
    this.pendView = new pendView(pnd);

// NEW
    this.pullDownMenu = new pullDownMenu();  
    this.solvefor = 0 ; // initialize

/*========================================================================================================*/

    this.build = function(){
	this.parent = new parent("parent");

	this.keyPad = new keyPad();
	this.parent.add(this.keyPad);

	this.fOut = new output(15,145,95,19);
	this.parent.add(this.fOut);
	this.fIn = new ergoInput(15,145,95,19,this.keyPad);
	this.parent.add(this.fIn);

	this.TOut = new output(335,215,95,19);
	this.parent.add(this.TOut);
	this.TIn = new ergoInput(335,215,95,19,this.keyPad);
	this.parent.add(this.TIn);

	this.eq = new eqButton(185,125);
	this.parent.add(this.eq);

// NEW
	this.selectSolve = new select(20,310,200,30,this.keyPad);
	this.parent.add( this.selectSolve );
	for ( i=0 ; i<=1 ; i+=1 ){
	    this.selectSolve.addOption(i,this.pullDownMenu.solvefor[i][0]);
	}

	this.showHideInputs(0);
	
}	

/*========================================================================================================*/

    this.bindInputs = function(c){
	
	this.fIn.bind("out",function(a){c.logic.setf(a);c.newState();});
	this.TIn.bind("out",function(a){c.logic.setT(a);c.newState();});

// NEW
	this.selectSolve.bind("change",function(a){
	    c.logic.setsolvefor(parseFloat(c.pullDownMenu.solvefor[a][1]));
	    this.solvefor = c.logic.solvefor;  // this does work!
	    c.showHideInputs(parseInt(a));
	});

    }	

/*========================================================================================================*/

    this.showHideInputs = function(a)
    {
        this.TOut.htmlElement.style.display = "none";
        this.fOut.htmlElement.style.display = "none";
        
        this.TIn.htmlElement.style.display = "inherit";
        this.fIn.htmlElement.style.display = "inherit";
    
        switch(a){
        case 0:
            this.fIn.htmlElement.style.display = "none";
            this.fOut.htmlElement.style.display = "inherit";
            break;
          
        case 1:
            this.TIn.htmlElement.style.display = "none";
            this.TOut.htmlElement.style.display = "inherit";
            break;
            
        default:
            
        }
    
    }

/*========================================================================================================*/

    this.newState = function(){
	
	var f = this.logic.f ;
	var T = this.logic.T ;
	
	this.fIn.setValue(round(f));	
	this.TIn.setValue(round(T));

	this.fOut.setValue(round(f));	
	this.TOut.setValue(round(T));

	this.pendView.L = this.logic.L;
	this.pendView.t = 0;

	//this.pendView.draw(0);
	//drawspring
    }

/*========================================================================================================*/

    this.build();	
    this.newState();
    this.bindInputs(this);
	
}
