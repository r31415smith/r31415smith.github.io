function logic(){

    this.f0 = 500;

    this.f1 = 1;
    this.f2 = 1;

    this.relative_V1 = 10 ;
    this.relative_V2 = -10 ;
    
    this.V_man = 5;
    this.V_spk = 5;
    
    this.V_man_real = 0;
    this.V_spk_real = 0;
    
    //this.V_sound = 340.29;
    this.V_sound = 343 ;
    this.V_abs = 0;
    
    this.spk_pos_zero = 0;
    this.man_pos_zero = 0;
    
    this.man_orient = 1;
    this.spk_orient = 1;
    this.rel_orient = 1;
    
/*==================================================*/

    this.calculate = function(){
	
	//    this.V_abs = Math.abs(this.V_man - this.V_spk);
	this.V_abs = Math.abs(this.V_man + this.V_spk);
	
	/* OLD */
	//this.f1 = this.f0*(1+this.V_abs/this.V_sound);
	//this.f2 = this.f0*(1-this.V_abs/this.V_sound);
	
	//    this.relative_V1 = (this.V_man-this.V_spk);
	//    this.relative_V2 = -1*(this.V_man-this.V_spk);
	this.relative_V1 = (this.V_man+this.V_spk);
	this.relative_V2 = -1*(this.V_man+this.V_spk);
	
	/* NEW */

	/* Moving towards each other */
	if ( this.V_sound != this.V_spk ) { // No dividing by zero when not moving relative to each other
	    this.f1 = this.f0*((this.V_sound + this.V_man)/(this.V_sound - this.V_spk)) ;
	/* Moving away from each other */
	    this.f2 = this.f0*((this.V_sound - this.V_man)/(this.V_sound + this.V_spk));
	} else {
	    this.f1 = this.f0 ;
	    this.f2 = this.f0 ;
	}
		
	/* Moving away from each other */
	this.f2 = this.f0*((this.V_sound - this.V_man)/(this.V_sound + this.V_spk));

	
    }
    
/*==================================================*/

    this.calcF = function(dist){

	var V_abs = Math.abs(this.V_man - this.V_spk);
	
	var f = this.f0*(1+(V_abs*dist)/(this.V_sound*Math.sqrt(dist*dist+4)));

	//alert(dist);
	//var f = this.f0*(1+(V_abs*dist));
	
	//return this.f0;
	return f;
    }
    this.calcA = function(dist){
	
	var a = 1;
	
    }

/*==================================================*/

    this.calcPosMan = function(t){
	
	var pos = this.man_pos_zero + this.V_man_real * t;
	
	return pos;
	
    }

/*==================================================*/

    this.calcPosSpk = function(t){
	
	var pos = this.spk_pos_zero + this.V_spk_real * t;
	
	return pos;
	
    }

/*==================================================*/

    this.getIntersectionTime = function(){
	

/* OLD:  there is no reason why negative intersection times should be flagged
   var x = (this.spk_pos_zero - this.man_pos_zero)/(this.V_man_real - this.V_spk_real);
	if(x<0){
	    x=Infinity;
	}
*/
	if ( this.V_man_real != this.V_spk_real ) { // Protect against dividing by zero
	    var x = (this.spk_pos_zero - this.man_pos_zero)/(this.V_man_real - this.V_spk_real);
	} else {
//	    x=Infinity;
// Rather than set=infinity, use a time far, far in the future
// If intersection time is = Infinity, there are error messages in Audio.js
	    x = 999999 ; 
	}
	
	return x;
    }
    
/*==================================================*/

}