function logic(){

    this.f = 0.2 ;
    this.T = 5.000 ;
    this.L = 50 ;
    this.g = 9.81 ;

// NEW
    this.OLDf = 0 ;
    this.OLDT = 0 ;
    this.OLDL = 0 ;
    
// NEW
    this.solvefor = 0 ; // =0 [f]; =1 [T]
    this.testOK = 0 ; // =0 [good], =1 [bad]

// *********************************************************************************

// NEW
    this.setsolvefor = function(a){
	this.solvefor = a;
    }

// *********************************************************************************

    this.setf = function(a){
	this.storeOldValues() ;
	this.f = a ;
	this.calculateSolveFor() ;
	this.testValues() ;
	if ( this.testOK != 0 ) {
	    this.returnOldValues() ;
	}
    }
    
    this.setT = function(a){
	this.storeOldValues() ;
	this.T = a ;
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
	    this.f = 1 / this.T ;
	} else if ( this.solvefor == 1 ) {
	    this.T = 1 / this.f ;
	}
	this.L = this.T * this.T * this.g / ( 4 * Math.PI * Math.PI ) ;
    }

// NEW:  This function determines if the user set of values
// and quantity to solve for Lke sense (no dividing by zero)
    this.testValues = function () {
	this.testOK = 0 ;
	if ( !isFinite(this.f) || !isFinite(this.T) ) { // divide by zero
	    this.testOK = 1 ;
	} else if ( this.f <= 0 || this.T <= 0 ) { // negative values
	    this.testOK = 1 ;
	} else {
	    this.testOK = 0 ;
	} 
    }

// NEW:  Stores the previous set of variables
    this.storeOldValues = function () {
	this.OLDf = this.f ;
	this.OLDT = this.T ;
	this.OLDL = this.L ;
    }

// NEW:  Returns the old values
    this.returnOldValues = function () {
	this.f = this.OLDf ;
	this.T = this.OLDT ;
	this.L = this.OLDL ;
    }

    this.calculateSolveFor() ;

}
