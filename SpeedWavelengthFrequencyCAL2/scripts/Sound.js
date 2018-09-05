function Sound(){

this.vol1 = 0.1;
this.vol2 = 0;
this.vol3 = 0;

var aud = new Audio();
aud.mozSetup(1,44100);

this.timedSound;
this.marker = 0;

this.xCoeficcient  = 0;
this.xCoeficcient2 = 0;
this.xCoeficcient3 = 0;


this.data = new Float32Array(100);
this.data2 = new Float32Array(100);

this.check;
this.run = run;

this.buildArray1 = buildArray1;
this.buildArray2 = buildArray2;

this.setFrequency1 = setFrequency1;
this.setFrequency2 = setFrequency2;
this.setFrequency3 = setFrequency3;
this.run(this);

this.buildArray1();

function buildArray1(){
for(var i=0;i<100;i++){
this.data[i] = (this.vol1*Math.sin(this.marker*this.xCoeficcient)+this.vol2*Math.sin(this.marker*this.xCoeficcient2)+this.vol3*Math.sin(this.marker*this.xCoeficcient3))/3;
this.marker = this.marker + 1;
}

}

function buildArray2(){
for(var i=0;i<100;i++){
this.data2[i] = (this.vol1*Math.sin(this.marker*this.xCoeficcient)+this.vol2*Math.sin(this.marker*this.xCoeficcient2)+this.vol3*Math.sin(this.marker*this.xCoeficcient3))/3;
this.marker = this.marker + 1;
}
	
}

function run(c){
	

this.timedSound =  setInterval(function() {  
if(c.check<10000){
var w = aud.mozWriteAudio(c.data);
c.buildArray2();
var w = aud.mozWriteAudio(c.data2);
c.buildArray1();
}

c.check = c.marker-aud.mozCurrentSampleOffset();

}, 1);

	

}

function setFrequency1(f){
	this.xCoeficcient = 2*Math.PI*f/44100;
	}
function setFrequency2(f){
	this.xCoeficcient2 = 2*Math.PI*f/44100;
	
}
function setFrequency3(f){
	this.xCoeficcient3 = 2*Math.PI*f/44100;
	}

}

function SoundDummy(){
this.vol1 = 0;
this.vol2 = 0;
this.vol3 = 0;
this.timedSound;
this.marker = 0;
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
