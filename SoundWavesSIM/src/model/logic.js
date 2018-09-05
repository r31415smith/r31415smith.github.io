function logic(){

    this.timeScale = new Array(0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20,50,100,200,500,1000,5000,10000);
    this.distScale = new Array(0.0001,0.0002,0.0005,0.001,0.002,0.005,0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20,50,100);
    
    this.timeScaleInd = 2;
    this.distScaleInd = 14;
    
    this.F = 300;
    this.W = 1;//stands for wave length
    this.A = 1;
    
    this.F_target = 1;
    this.W_target = 340.29;
    this.A_target = 1;
    
    this.C0 = 16.351;//the frequency of key C in octave 0
    
    this.keyId = 1;
    this.Octave = 5;
    
    this.score = 0;
    
    this.maxXdist = this.distScale[this.distScaleInd];
    this.maxXtime = this.timeScale[this.timeScaleInd];
    
    this.maxY = 1;
    
    var k_time = 1;
    var k_dist = 1;
    var const_time = 1;
    var const_dist = 1;
    this.prepTargetVars = function(){
	
	k_time =2*Math.PI*this.F_target*this.maxXtime;;
	k_dist = 2* Math.PI/this.W_target * this.maxXdist;
	const_time = this.A_target/this.maxY;
	const_dist = this.A_target/this.maxY;
	
    }
/*==================================================================================*/	
    this.calcTargetTime = function(t){

	var y = Math.sin(k_time*t)*const_time;
	
	return y;
    }
/*==================================================================================*/	
    this.calcTargetDist = function(t){
	
	var y = Math.sin(k_dist*t)*const_dist;	
	
	return y;
    }
/*==================================================================================*/	
    this.calculateForTime = function(t){
	
	var k = 2* Math.PI * this.F * this.maxXtime;
	
	var y = Math.sin(k*t)/this.maxY*this.A;	
	
	return y;

    }
/*==================================================================================*/
    this.calculateForDistance = function(t){
	
	var k = 2* Math.PI / this.W * this.maxXdist;
	var y = Math.sin(k*t)/this.maxY*this.A;	
	return y;
	
    }
/*==================================================================================*/
    this.calcFrequency = function(){
	
	this.F_target = Math.pow(Math.pow(2,1/12),this.keyId)*this.C0*Math.pow(2,this.Octave);
	this.W_target = 340.29/this.F_target;
	
    }
/*==================================================================================*/
    this.setKeyID = function(a){
	this.keyId = a;
    }
/*==================================================================================*/
    this.setOctave = function(a){
	if ( a >= 3 ) {
	    this.Octave = a;
	}
    }
/*==================================================================================*/
    this.setF = function(a){
	if ( a > 0 ) {
	    this.F = a;
	}
    }
/*==================================================================================*/
    this.setW = function(a){
	if ( a > 0 ) {
	    this.W = a;
	}
    }
/*==================================================================================*/
    this.setA = function(a){
	if ( a >= 0 ) {
	    this.A = a;	
	}
    }
/*==================================================================================*/
    this.calcScore = function(){
	
	var s = 2;
	
	if(this.F>this.F_target){
	    var a = Math.pow(this.F_target/this.F,s)*50;
	}else{
	    var a = Math.pow(this.F/this.F_target,s)*50;
	}
	
	if(this.W>this.W_target){
	    var b = Math.pow(this.W_target/this.W,s)*50;
	}else{
	    var b = Math.pow(this.W/this.W_target,s)*50;
	}
	
	this.score = a+b;
	
	
	if(this.score<0){this.score=0;}
	if(this.score>=99.5){this.score=100;}
	
    }
/*==================================================================================*/
    this.distScale_up = function(){
	
	if(this.distScaleInd+1<this.distScale.length){
	    this.distScaleInd++;
	}
	this.maxXdist = this.distScale[this.distScaleInd];
    }

    this.distScale_down = function(){
	
	if(this.distScaleInd-1>0){
	    this.distScaleInd--;
	}
	this.maxXdist = this.distScale[this.distScaleInd];
    }

    this.timeScale_up = function(){
	
	if(this.timeScaleInd+1<this.timeScale.length){
	    this.timeScaleInd++;
	}
	this.maxXtime = this.timeScale[this.timeScaleInd];
    }

    this.timeScale_down = function(){
	
	if(this.timeScaleInd-1>0){
	    this.timeScaleInd--;
	}
	this.maxXtime = this.timeScale[this.timeScaleInd];
    }
    /*==================================================================================*/

    
}
