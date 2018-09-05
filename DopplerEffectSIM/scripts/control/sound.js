function sound(){

this.vol1 = 0;
this.frequency = 0;
this.previous_frequency = 0;
this.phase = 0;

var aud = new Audio();
aud.mozSetup(1,44100);

this.timedSound;
this.sample_counter = 0;

this.xCoeficcient  = 0;



this.data = new Float32Array(1000);
this.data2 = new Float32Array(1000);

this.check;

this.building_flag = 0;

this.x = 0;
this.nope = 0;
/*==================================================*/
this.buildArray = function(){

//this.building_flag = 1;
	
this.xCoeficcient = 2*Math.PI*this.frequency/44100;	

if(this.previous_frequency==this.frequency){


var Phase_new = (2*Math.PI*this.x/44100)*(this.previous_frequency - this.frequency) - this.phase;




var old_coof = 2*Math.PI*this.previous_frequency/44100;	 

var old_dy = Math.cos(this.x*old_coof+this.phase);
var new_dy = Math.cos(this.x*this.xCoeficcient+Phase_new);


if(old_dy>0&&new_dy<0){
Phase_new = Phase_new + this.frequency*Math.PI/44100;
}

if(old_dy<0&&new_dy>0){
Phase_new = Phase_new + this.frequency*Math.PI/44100;
}




this.phase = Phase_new;

this.previous_frequency = this.frequency;

}
/* */
//this.x = Math.round(1000*Math.random());

	
for(var i=0;i<1000;i++){
this.data[i] = this.vol1*Math.sin(this.x*this.xCoeficcient+this.phase);
this.x = this.x+1;
this.sample_counter = this.sample_counter + 1;

}

//this.building_flag = 0;

}
/*==================================================*/
this.run = function(c){


this.timedSound =  setInterval(function() {  

if(c.check<10000){
var w = aud.mozWriteAudio(c.data);
//c.buildArray2();
//var w = aud.mozWriteAudio(c.data2);
c.buildArray();
}

c.check = c.sample_counter-aud.mozCurrentSampleOffset();

}, 1);

	

}
/*==================================================*/
this.setFrequency1 = function(f){
this.previous_frequency = this.frequency;
this.frequency = f;

}
/*==================================================*/
this.buildArray();
this.run(this);



}
/*==================================================*/
/*==================================================*/
/*==================================================*/
function SoundDummy(){
this.vol1 = 0;
this.vol2 = 0;
this.vol3 = 0;
this.timedSound;
this.sample_counter = 0;
this.xCoeficcient  = 0;
this.xCoeficcient2 = 0;
this.xCoeficcient3 = 0;
this.check;
this.run = run;
this.setFrequency1 = setFrequency1;
this.setFrequency2 = setFrequency2;
this.setFrequency3 = setFrequency3;
function run(c){}
function setFrequency1(f){}
function setFrequency2(f){}
function setFrequency3(f){}
}
/*==================================================*/
