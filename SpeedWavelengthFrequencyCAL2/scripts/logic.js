function logic(){

    this.v = 343;
    this.f = 343;
    this.Lambda = 1;
    
    this.vol1 = 0.1;

    this.getValue = function(i,f1,time){
//    function getValue(i,f1,time){
	//var a1 = i*2*Math.PI/450*f1*time;
	var a1 = i*2*Math.PI/97/this.Lambda;
	
	var b = 26*(Math.sin(a1)*this.vol1);	
	return b;
    }	
	
// NEW
    this.OLDv = 0 ;
    this.OLDf = 0 ;
    this.OLDLambda = 0 ;
    
// NEW
    this.solvefor = 0 ; // =0 [v]; =1 [f]; =2 [Lambda]
    this.testOK = 0 ; // =0 [good], =1 [bad]

// *********************************************************************************

// NEW
    this.setsolvefor = function(a){
	this.solvefor = a;
    }

// *********************************************************************************

    this.setv = function(a){
	this.storeOldValues() ;
	this.v = a ;
	this.calculateSolveFor() ;
	this.testValues() ;
	if ( this.testOK != 0 ) {
	    this.returnOldValues() ;
	}
    }
    
    this.setf = function(a){
	this.storeOldValues() ;
	this.f = a ;
	this.calculateSolveFor() ;
	this.testValues() ;
	if ( this.testOK != 0 ) {
	    this.returnOldValues() ;
	}
    }
    
    this.setLambda = function(a){
	this.storeOldValues() ;
	this.Lambda = a ;
	this.calculateSolveFor() ;
	this.testValues() ;
	if ( this.testOK != 0 ) {
	    this.returnOldValues() ;
	}
    }
    
// *********************************************************************************

// NEW
// Argument is the variable that the user has tried to change
    this.calculateSolveFor = function(){
	if ( this.solvefor == 0 ) {
	    this.v = this.f * this.Lambda ;
	} else if ( this.solvefor == 1 ) {
	    this.f = this.v / this.Lambda ;
	} else if ( this.solvefor == 2 ) {
	    this.Lambda = this.v / this.f ;
	}
    }

// NEW:  This function determines if the user set of values
// and quantity to solve for Lke sense (no dividing by zero)
    this.testValues = function () {
	this.testOK = 0 ;
	if ( !isFinite(this.v) || !isFinite(this.f) || !isFinite(this.Lambda) ) { // divide by zero
	    this.testOK = 1 ;
	} else if ( this.v <= 0 || this.f <= 0 || this.Lambda <= 0 ) { // negative values
	    this.testOK = 1 ;
	} else {
	    this.testOK = 0 ;
	} 
    }

// NEW:  Stores the previous set of variables
    this.storeOldValues = function () {
	this.OLDv = this.v ;
	this.OLDf = this.f ;
	this.OLDLambda = this.Lambda ;
    }

// NEW:  Returns the old values
    this.returnOldValues = function () {
	this.v = this.OLDv ;
	this.f = this.OLDf ;
	this.Lambda = this.OLDLambda ;
    }

    this.calculateSolveFor() ;

}
