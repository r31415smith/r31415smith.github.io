function logic(){






this.t = 0.0;//time
this.s = 5;//scaling pixels per cm
//--------------------
this.v_target = 110;//velocity
this.f_target = 1;//frequency
this.l_target = 110;
this.p_target = 0.0001;
this.a_target = 30;
//--------------------

this.v = 20  ;//vlocity
this.l = 50  ;
this.f = 1  ;//frequency

this.p = 0 ;
this.a = 30 ;
//--------------------
/*==================================================*/
this.calculate = function(x){

var l = this.s*this.v/this.f;

var time_phase = Math.PI*2*this.f*this.t;

var c = (x)*(Math.PI*2/l) + this.p + time_phase;

var y = 150 - this.a*Math.sin(c);

return y;

}
/*==================================================*/
this.calculateTarget = function(x){

var l = this.s*this.v_target/this.f_target;

var time_phase = Math.PI*2*this.f_target*this.t;

var c = (x)*(Math.PI*2/l) + this.p_target + time_phase;

var y = 150 - this.a_target*Math.sin(c);

return y;

}
/*==================================================*/
this.setL = function(a){

    if ( a > 0 ) {
	this.l = a;
	this.v = this.l*this.f
    }

};
//--------------------
this.setF = function(a){

    if ( a > 0 ) {
	this.f = a;
	this.v = this.l*this.f
    }
};
//--------------------
this.setPhase = function(a){

    if ( a >= 360 ) {
	aa = a - 360 ;
    } else if ( a < 0 ) {
	aa = a + 360 ;
    } else {
	aa = a ;
    }
	
	
    this.p = aa*Math.PI/180;

};
//--------------------
this.setA = function(a){

    if ( a > 0 ) {
	this.a = a;
    }

};
/*==================================================*/
this.reset = function(){


//this.v_target = 20+Math.random()*20;
//this.l_target = 50+Math.random()*120;

//this.f_target = this.v_target/this.l_target;
//this.p_target = Math.random()*2*Math.PI;

//this.a_target = this.l_target/3+Math.random()*20;


this.f_target = Math.round((0.2 + Math.random()*1.8)*10)/10; //frequency
this.l_target = Math.round((30 + Math.random()*40)*10)/10; //wavelength
this.v_target = this.l_target * this.f_target ; // velocity
this.p_target = 0;//Math.random()*2*Math.PI ; //phase
this.a_target = 10 + Math.random()*50 ; //amplitude


//alert("frequency:"+this.f_target+", this.wavelength:"+this.l_target);

this.t = 0;

}
/*==================================================*/
this.score = function(){

if ( this.a > this.a_target ) {
    var s1 = (this.a_target/this.a) ;
} else {
    var s1 = (this.a/this.a_target) ;
}

if ( this.f > this.f_target ) {
    var s2 = (this.f_target/this.f) ;
} else {
    var s2 = (this.f/this.f_target) ;
}

if ( (this.p+40) > (this.p_target+40) ) {
    var s3 = ((this.p_target+40)/(this.p+40)) ;
} else {
    var s3 = ((this.p+40)/(this.p_target+40)) ;
}

if ( this.l > this.l_target ) {
    var s4 = (this.l_target/this.l) ;
} else {
    var s4 = (this.l/this.l_target) ;
}

var score = 100 * s1 * s2 * s3 * s4 ;

if(score<0){
	score = 0;
} else if ( score >= 99.5 ) {
    score = 100 ;
}

return score;


}
/*==================================================*/
this.setF(this.f);
this.reset();
}


