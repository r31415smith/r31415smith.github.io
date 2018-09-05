/***************************************************
 * 
 ***************************************************/
var SineErgoIOS = function(n) {


    if('webkitAudioContext' in window) {
        this.AudioContext = new webkitAudioContext();
    }
    
    this.oscillator = new Array();
    this.gainNode   = new Array();
    
    for(i=0;i<n;i++){
        
        this.oscillator[i] = this.AudioContext.createOscillator();
        this.oscillator[i].type = 0;
        this.gainNode[i] = this.AudioContext.createGainNode();
    
        this.oscillator[i].frequency.value = 0;
        this.gainNode[i].gain.value = 0.0;
    
        this.oscillator[i].connect(this.gainNode[i]);
        this.gainNode[i].connect(this.AudioContext.destination);
        
        this.oscillator[i].noteOn && this.oscillator[i].noteOn(0); 
  
    }
    


};
/***************************************************
 * 
 ***************************************************/
SineErgoIOS.prototype.setFrequency = function(i,value){
        
        this.oscillator[i].noteOn && this.oscillator[i].noteOn(0);
        this.oscillator[i].frequency.value = value;

};
/***************************************************
 * 
 ***************************************************/
SineErgoIOS.prototype.setVolume = function(i,value){


        this.oscillator[i].noteOn && this.oscillator[i].noteOn(0);
        this.gainNode[i].gain.value = value;

};
/***************************************************
 * 
 ***************************************************/




